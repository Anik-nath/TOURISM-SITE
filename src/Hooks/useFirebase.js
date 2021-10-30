import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/Firebase.initialize";
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      setUser(result);
      window.location.reload();
      window.location.replace('tours');
    });
  };
  const logout =()=>{
    signOut(auth)
    .then(() => {
        setUser({})
        window.location.reload();
      })
  }
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user);
        }
      });
  },[])
return {
    user,
    signInWithGoogle,
    logout
}
};
export default useFirebase;