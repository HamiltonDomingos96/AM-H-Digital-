import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
  updateProfile,
  setPersistence,
  browserLocalPersistence,
  type User
} from 'firebase/auth';
import { auth, isFirebaseConfigured } from './firebase';

/**
 * Tradução das mensagens de erro do Firebase Authentication para português de Angola/lusófono.
 */
export function getFirebaseAuthErrorMessage(error: any): string {
  const code = error?.code || '';

  switch (code) {
    case 'auth/invalid-email':
      return 'O formato do e-mail inserido é inválido.';
    case 'auth/user-disabled':
      return 'Esta conta de estudante foi desactivada. Contacte a administração da Academia.';
    case 'auth/user-not-found':
      return 'Não existe nenhuma conta associada a este endereço de e-mail.';
    case 'auth/wrong-password':
      return 'A palavra-passe introduzida está incorrecta.';
    case 'auth/invalid-credential':
      return 'E-mail ou palavra-passe incorrectos. Verifique as suas credenciais.';
    case 'auth/email-already-in-use':
      return 'Já existe uma conta de estudante registada com este e-mail.';
    case 'auth/operation-not-allowed':
      return 'O método de autenticação por e-mail e palavra-passe deve ser activado no Firebase Console.';
    case 'auth/weak-password':
      return 'A palavra-passe é demasiado fraca. Utilize pelo menos 6 caracteres.';
    case 'auth/network-request-failed':
      return 'Falha na ligação à rede. Verifique a sua conexão à internet.';
    case 'auth/too-many-requests':
      return 'Muitas tentativas falhadas. O acesso foi temporariamente suspenso para segurança da conta. Tente mais tarde.';
    case 'auth/missing-password':
      return 'Por favor, introduza a palavra-passe.';
    default:
      return error?.message || 'Ocorreu um erro no serviço de autenticação.';
  }
}

/**
 * Criação de nova conta de estudante no Firebase Authentication.
 */
export async function registerWithFirebase(
  name: string,
  email: string,
  password: string
): Promise<{ success: boolean; user?: User; error?: string }> {
  if (!isFirebaseConfigured() || !auth) {
    return {
      success: false,
      error: 'O Firebase Authentication ainda não foi configurado. Configure as variáveis VITE_FIREBASE_* na Vercel.'
    };
  }

  if (!name || name.trim().length < 3) {
    return {
      success: false,
      error: 'Por favor, insira o seu nome completo (mínimo de 3 caracteres).'
    };
  }

  try {
    // Configurar persistência local no navegador
    await setPersistence(auth, browserLocalPersistence);

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.trim().toLowerCase(),
      password
    );

    // Actualizar o perfil no Firebase com o nome oficial do estudante
    if (userCredential.user) {
      await updateProfile(userCredential.user, {
        displayName: name.trim()
      });
    }

    return { success: true, user: userCredential.user };
  } catch (error: any) {
    console.error('Erro no registo Firebase Auth:', error);
    return { success: false, error: getFirebaseAuthErrorMessage(error) };
  }
}

/**
 * Iniciar sessão no Firebase Authentication com e-mail e palavra-passe.
 */
export async function loginWithFirebase(
  email: string,
  password: string
): Promise<{ success: boolean; user?: User; error?: string }> {
  if (!isFirebaseConfigured() || !auth) {
    return {
      success: false,
      error: 'O Firebase Authentication ainda não foi configurado. Configure as variáveis VITE_FIREBASE_* na Vercel.'
    };
  }

  try {
    await setPersistence(auth, browserLocalPersistence);

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email.trim().toLowerCase(),
      password
    );

    return { success: true, user: userCredential.user };
  } catch (error: any) {
    console.error('Erro no login Firebase Auth:', error);
    return { success: false, error: getFirebaseAuthErrorMessage(error) };
  }
}

/**
 * Enviar e-mail de recuperação de palavra-passe através do Firebase.
 */
export async function resetPasswordWithFirebase(
  email: string
): Promise<{ success: boolean; message?: string; error?: string }> {
  if (!isFirebaseConfigured() || !auth) {
    return {
      success: false,
      error: 'O Firebase Authentication ainda não foi configurado. Configure as variáveis VITE_FIREBASE_* na Vercel.'
    };
  }

  if (!email || !email.includes('@')) {
    return {
      success: false,
      error: 'Por favor, introduza um endereço de e-mail válido.'
    };
  }

  try {
    await sendPasswordResetEmail(auth, email.trim().toLowerCase());
    return {
      success: true,
      message: 'Se este e-mail estiver registado na Academia, receberá uma mensagem com as instruções para redefinir a palavra-passe.'
    };
  } catch (error: any) {
    console.error('Erro na recuperação de senha Firebase:', error);
    // Para segurança, mensagens genéricas evitam enumeração de utilizadores
    if (error?.code === 'auth/user-not-found' || error?.code === 'auth/invalid-email') {
      return {
        success: true,
        message: 'Se este e-mail estiver registado na Academia, receberá uma mensagem com as instruções para redefinir a palavra-passe.'
      };
    }
    return { success: false, error: getFirebaseAuthErrorMessage(error) };
  }
}

/**
 * Terminar sessão do Firebase Authentication.
 */
export async function logoutFirebase(): Promise<{ success: boolean; error?: string }> {
  if (!auth) {
    return { success: true };
  }

  try {
    await signOut(auth);
    return { success: true };
  } catch (error: any) {
    console.error('Erro ao terminar sessão Firebase:', error);
    return { success: false, error: getFirebaseAuthErrorMessage(error) };
  }
}

/**
 * Subscrição ao estado de autenticação em tempo real (onAuthStateChanged).
 */
export function onFirebaseAuthStateChange(callback: (user: User | null) => void): () => void {
  if (!auth) {
    callback(null);
    return () => {};
  }

  return onAuthStateChanged(auth, callback);
}
