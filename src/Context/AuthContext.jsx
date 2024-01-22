import React, { createContext } from "react";
import { useState } from "react";

//context instance
export const AuthContext = createContext();
function AuthPovider({ children }) {
  const [currentUser, setCurrentUser] = useState(false);

  let data = {
    currentUser,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export default AuthPovider;
