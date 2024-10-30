"use client";
import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const LoginContext = createContext({});

export default function LoginProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [businessLogged, setBusiness] = useState({});

  function Login(email, password) {
    const { getItem } = useLocalStorage("businesses");
    const businessList = JSON.parse(getItem());
    const businessToLog = businessList.find((b) => b.email === email);

    if (!businessToLog || businessToLog.password !== password) {
      alert("E-mail e/ou senha incorretos");
      return;
    }

    setIsLoggedIn(true);
    setBusiness(businessToLog);
    return;
  }

  function Logout() {
    setIsLoggedIn(false);
    setBusiness({});
  }

  function Register(business) {
    const { getItem, setItem } = useLocalStorage("businesses");
    const businessList = JSON.parse(getItem()) || [];

    const bussinessExists = businessList.find((b) => b.cnpj === business.cnpj);
    if (bussinessExists) {
      alert("CNPJ já cadastrado");
      return;
    }

    businessList.push(business);

    setItem(JSON.stringify(businessList));
    setBusiness(business);
  }

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <LoginContext.Provider
      value={{
        business: businessLogged,
        logged: isLoggedIn,
        Login,
        Logout,
        Register,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
