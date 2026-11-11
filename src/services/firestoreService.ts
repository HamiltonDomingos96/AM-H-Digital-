import {
  doc,
  collection,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
  type DocumentData,
  type QueryConstraint
} from 'firebase/firestore';
import { db, isFirebaseConfigured } from './firebase';

/**
 * Verifica se a instância do Cloud Firestore está pronta para operações.
 */
export const isFirestoreReady = (): boolean => {
  return Boolean(db && isFirebaseConfigured());
};

export interface ServiceResult<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  exists?: boolean;
}

/**
 * Cria ou substitui/mescla um documento no Cloud Firestore.
 * @param collectionPath Caminho da colecção (ex: 'users', 'users/uid/assessments')
 * @param docId Identificador do documento
 * @param data Dados a gravar
 * @param merge Se verdadeiro, mescla com os dados existentes sem sobrescrever tudo (padrão: true)
 */
export async function setDocument<T = DocumentData>(
  collectionPath: string,
  docId: string,
  data: Partial<T>,
  merge = true
): Promise<ServiceResult<{ id: string }>> {
  if (!isFirestoreReady() || !db) {
    return {
      success: false,
      error: 'Cloud Firestore não está configurado ou inicializado. Verifique as variáveis VITE_FIREBASE_*.'
    };
  }

  try {
    const docRef = doc(db, collectionPath, docId);
    await setDoc(docRef, data, { merge });
    return { success: true, data: { id: docId } };
  } catch (error: any) {
    console.error(`Erro ao gravar em ${collectionPath}/${docId}:`, error);
    return {
      success: false,
      error: error?.message || 'Erro ao gravar documento no Firestore.'
    };
  }
}

/**
 * Actualiza campos específicos de um documento existente.
 */
export async function updateDocument<T = DocumentData>(
  collectionPath: string,
  docId: string,
  data: Partial<T>
): Promise<ServiceResult> {
  if (!isFirestoreReady() || !db) {
    return {
      success: false,
      error: 'Cloud Firestore não está configurado ou inicializado.'
    };
  }

  try {
    const docRef = doc(db, collectionPath, docId);
    await updateDoc(docRef, data as any);
    return { success: true };
  } catch (error: any) {
    console.error(`Erro ao actualizar ${collectionPath}/${docId}:`, error);
    return {
      success: false,
      error: error?.message || 'Erro ao actualizar documento no Firestore.'
    };
  }
}

/**
 * Consulta e retorna um documento pelo seu ID.
 */
export async function getDocument<T = DocumentData>(
  collectionPath: string,
  docId: string
): Promise<ServiceResult<T>> {
  if (!isFirestoreReady() || !db) {
    return {
      success: false,
      exists: false,
      error: 'Cloud Firestore não está configurado ou inicializado.'
    };
  }

  try {
    const docRef = doc(db, collectionPath, docId);
    const snap = await getDoc(docRef);

    if (!snap.exists()) {
      return { success: true, exists: false, data: undefined };
    }

    return {
      success: true,
      exists: true,
      data: snap.data() as T
    };
  } catch (error: any) {
    console.error(`Erro ao consultar ${collectionPath}/${docId}:`, error);
    return {
      success: false,
      exists: false,
      error: error?.message || 'Erro ao consultar documento no Firestore.'
    };
  }
}

/**
 * Consulta documentos de uma colecção com filtros e ordenações opcionais.
 */
export async function getCollectionDocuments<T = DocumentData>(
  collectionPath: string,
  constraints: QueryConstraint[] = []
): Promise<ServiceResult<{ count: number; documents: (T & { id: string })[] }>> {
  if (!isFirestoreReady() || !db) {
    return {
      success: false,
      error: 'Cloud Firestore não está configurado ou inicializado.'
    };
  }

  try {
    const colRef = collection(db, collectionPath);
    const q = constraints.length > 0 ? query(colRef, ...constraints) : query(colRef);
    const snap = await getDocs(q);

    const documents = snap.docs.map((docSnap) => ({
      id: docSnap.id,
      ...(docSnap.data() as T)
    }));

    return {
      success: true,
      data: {
        count: documents.length,
        documents
      }
    };
  } catch (error: any) {
    console.error(`Erro ao listar ${collectionPath}:`, error);
    return {
      success: false,
      error: error?.message || 'Erro ao consultar colecção no Firestore.'
    };
  }
}

/**
 * Elimina um documento pelo seu caminho e identificador.
 */
export async function deleteDocument(
  collectionPath: string,
  docId: string
): Promise<ServiceResult> {
  if (!isFirestoreReady() || !db) {
    return {
      success: false,
      error: 'Cloud Firestore não está configurado ou inicializado.'
    };
  }

  try {
    const docRef = doc(db, collectionPath, docId);
    await deleteDoc(docRef);
    return { success: true };
  } catch (error: any) {
    console.error(`Erro ao eliminar ${collectionPath}/${docId}:`, error);
    return {
      success: false,
      error: error?.message || 'Erro ao eliminar documento no Firestore.'
    };
  }
}

export interface FirestoreTestResult {
  success: boolean;
  message: string;
  latencyMs?: number;
  operationsTested?: string[];
  collectionUsed?: string;
  testedUid?: string;
  errorCode?: string;
  possibleCause?: string;
  recommendedSolution?: string;
}

/**
 * Função de teste real para verificar e certificar a comunicação bidireccional com o Cloud Firestore.
 * Executa um ciclo completo com utilizador autenticado:
 * 1. Escrita de documento temporário (setDoc)
 * 2. Leitura e validação de dados (getDoc)
 * 3. Eliminação do documento temporário (deleteDoc)
 */
export async function testFirestoreConnection(): Promise<FirestoreTestResult> {
  if (!isFirestoreReady() || !db) {
    return {
      success: false,
      message: 'Cloud Firestore não está inicializado. As variáveis VITE_FIREBASE_* não estão disponíveis no bundle.',
      errorCode: 'firestore/not-initialized',
      possibleCause: 'Variáveis de ambiente ausentes no build ou Firebase não configurado na Vercel.',
      recommendedSolution: 'Verifique no painel da Vercel (Project Settings > Environment Variables) se as variáveis VITE_FIREBASE_* estão configuradas com escopo de Produção e faça um Redeploy sem cache.'
    };
  }

  // Obter instância de autenticação para validar sessão
  const { auth } = await import('./firebase');
  const currentUser = auth?.currentUser;

  if (!currentUser) {
    return {
      success: false,
      message: 'Utilizador não autenticado. As regras de segurança do Cloud Firestore exigem sessão activa.',
      errorCode: 'auth/unauthenticated',
      possibleCause: 'O teste foi accionado sem nenhuma conta com sessão iniciada no Firebase Authentication.',
      recommendedSolution: 'Inicie sessão ou registe uma conta na Academia através do botão "Entrar" antes de executar o teste de comunicação.'
    };
  }

  const startTime = performance.now();
  const testDocId = `ping_${currentUser.uid.slice(0, 8)}_${Date.now()}`;
  const testDocRef = doc(db, '_connection_test', testDocId);

  try {
    // 1. Escrita temporária
    await setDoc(testDocRef, {
      testId: testDocId,
      uid: currentUser.uid,
      testedAt: Date.now(),
      platform: 'Academia de Marketing H-Digital'
    });

    // 2. Leitura de confirmação
    const snap = await getDoc(testDocRef);
    if (!snap.exists()) {
      throw new Error('O documento de teste foi enviado, mas a leitura retornou vazio (não encontrado).');
    }

    const data = snap.data();
    if (data?.testId !== testDocId) {
      throw new Error('Inconsistência nos dados retornados pelo Firestore.');
    }

    // 3. Limpeza imediata (eliminar documento de teste)
    await deleteDoc(testDocRef);

    const latencyMs = Math.round(performance.now() - startTime);

    return {
      success: true,
      message: 'SUCCESS: Ligação ao Cloud Firestore estabelecida com sucesso.',
      latencyMs,
      operationsTested: ['Escrita (setDoc)', 'Leitura (getDoc)', 'Limpeza (deleteDoc)'],
      collectionUsed: '_connection_test',
      testedUid: currentUser.uid
    };
  } catch (error: any) {
    const errorCode = error?.code || 'firestore/unknown-error';
    const originalMessage = error?.message || 'Erro desconhecido ao comunicar com o Firestore.';

    let possibleCause = 'Erro geral na comunicação de rede com os servidores do Firebase.';
    let recommendedSolution = 'Verifique a consola do programador (F12) e o estado do serviço Firebase.';

    if (errorCode === 'permission-denied') {
      possibleCause = 'As regras de segurança do Firestore na Firebase Console rejeitaram a operação para o utilizador autenticado.';
      recommendedSolution = 'Certifique-se de que publicou na aba Rules da Firebase Console a regra: match /_connection_test/{docId} { allow read, write: if isSignedIn(); }';
    } else if (errorCode === 'unavailable') {
      possibleCause = 'A base de dados Cloud Firestore não está acessível ou ainda não foi criada no projecto.';
      recommendedSolution = 'Aceda à Firebase Console > Build > Firestore Database e crie a base de dados em Modo de Produção.';
    } else if (errorCode === 'failed-precondition') {
      possibleCause = 'A base de dados Firestore está em estado pendente ou com configuração em conflito.';
      recommendedSolution = 'Verifique o status da base de dados na Firebase Console.';
    }

    // Tentar limpar o documento em caso de erro residual
    try {
      await deleteDoc(testDocRef);
    } catch {
      // Ignora falha de limpeza se já houve erro anterior
    }

    return {
      success: false,
      message: originalMessage,
      errorCode,
      possibleCause,
      recommendedSolution
    };
  }
}

export { serverTimestamp, where, orderBy, limit };
