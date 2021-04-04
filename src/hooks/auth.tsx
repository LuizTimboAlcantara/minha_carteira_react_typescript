import React, { createContext, useContext, useState } from "react";

interface IAuthContext {
  logged: boolean;
  signIn(email: string, passwor: string): void;
  signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem("@minha-carteira:logged");

    return !!isLogged;
  });

  const signIn = (email: string, password: string) => {
    if (email === "luiz@email.com" && password === "abc@123") {
      localStorage.setItem("@minha-carteira:logged", "true");
      setLogged(true);
    } else {
      alert("Senha ou usuário inválidos!");
    }
  };

  const signOut = () => {
    localStorage.removeItem("@minha-carteira:logged");
    setLogged(false);
  };

  return <AuthContext.Provider value={{ logged, signIn, signOut }}>{children}</AuthContext.Provider>;
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
