import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const auth = getAuth(app);
  const googelProvaider = new GoogleAuthProvider();

  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, googelProvaider);
  };

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (user, name, image) => {
    return updateProfile(user, { displayName: name, photoURL: image });
  };

  const logout = () => {
    setLoader(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoader(false);
      const email = { email: currentUser.email };
      console.log(email);
      fetch('http://localhost:5000/jwt', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(email),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          localStorage.setItem('Ac-Token', data.token);
        });
    });
    return () => unsubscribe();
  }, [auth]);

  const authInfo = {
    user,
    googleLogin,
    createUser,
    loginUser,
    logout,
    updateUserProfile,
    loader,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvaider;
