import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)
      .finally(() => { setIsLoading(false) });
  }

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .finally(() => setIsLoading(false))
  }

  // observe whether user auth state changed or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [])

  return {
    user,
    isLoading,
    signInUsingGoogle,
    logOut
  }
}

export default useFirebase;