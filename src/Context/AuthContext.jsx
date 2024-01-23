import React, { createContext, useEffect } from "react";
import { useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
//context instance
export const AuthContext = createContext();
function AuthPovider({ children }) {
  const [currentUser, setCurrentUser] = useState(false);
  const [loginStatus,setLoginStatud]=useState(false)
  useEffect(() => {
    const changeAuth = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoginStatud(true)
    });
    return () => {
      changeAuth();
    };
  }, []);
  let data = {
    currentUser,
    loginStatus
  };
  return (
    <AuthContext.Provider value={{loginStatus}}>
        {children}
    </AuthContext.Provider>
  );
}

export default AuthPovider;
