import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';

/**
 * Configurações do cliente Firebase para a Academia de Marketing H-Digital.
 * Estes valores são públicos por concepção no Firebase e lidos das variáveis de ambiente com prefixo VITE_.
 * Devem ser configurados no painel da Vercel (Project Settings > Environment Variables).
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

/**
 * Validação de integridade das credenciais mínimas obrigatórias.
 */
export const isFirebaseConfigured = (): boolean => {
  return Boolean(
    firebaseConfig.apiKey &&
    firebaseConfig.authDomain &&
    firebaseConfig.projectId &&
    firebaseConfig.appId
  );
};

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;

if (isFirebaseConfigured()) {
  try {
    app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
  } catch (error) {
    console.error('Erro na inicialização do Firebase SDK:', error);
  }
} else {
  // Aviso informativo claro sem quebrar a execução ou compilação Vite
  if (typeof window !== 'undefined') {
    console.warn(
      '[Firebase] As variáveis de ambiente VITE_FIREBASE_* ainda não foram configuradas. ' +
      'A aplicação continuará a operar com persistência local até que as credenciais sejam adicionadas no painel da Vercel.'
    );
  }
}

export { app, auth, db, firebaseConfig };
