import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signInWithRedirect,
  } from 'firebase/auth';
  
  import { auth } from '../config/firebase';
  import { createDocWithId } from './services';
  
  const googleProvider = new GoogleAuthProvider();
  const defaultAvatar = 'https://res.cloudinary.com/santydev/image/upload/v1652883653/675510_gmjthw.jpg';
  
  /**
   * Function validates already used email or weak passwords
   * @param {String} email
   * @param {String} password
   * @returns The new user created or an error if it fails
   */
  export async function createDocOnEmailSignup(email, password) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(userCredential.user);
    await createDocWithId('users', userCredential.user.uid, { email, avatar: defaultAvatar });
    return userCredential.user;
  }
  
  export async function googleLoginWithRedirect() {
    await signInWithRedirect(auth, googleProvider);
  }