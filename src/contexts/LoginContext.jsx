"use client";
import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { v4 as uuid } from "uuid";

export const LoginContext = createContext({});

export default function LoginProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [businessLogged, setBusinessLogged] = useState({});

  function Login(email, password) {
    const { getItem } = useLocalStorage("businesses");
    const businessList = JSON.parse(getItem());
    const businessToLog = businessList.find((b) => b.email === email);

    if (!businessToLog || businessToLog.password !== password) {
      alert("E-mail e/ou senha incorretos");
      return;
    }

    setIsLoggedIn(true);
    setBusinessLogged(businessToLog);
    return;
  }

  function Logout() {
    setIsLoggedIn(false);
    setBusinessLogged({});
  }

  /**
   * @param {Institution} business
   * @returns
   */
  function Register(business) {
    const { getItem, setItem } = useLocalStorage("businesses");
    const businessList = getItem() || [];

    const bussinessExists = businessList.find((b) => b.cnpj === business.cnpj);
    if (bussinessExists) {
      alert("CNPJ já cadastrado");
      return;
    }

    const newBusiness = {
      ...business,
      id: uuid(),
    };

    businessList.push(newBusiness);
    setItem(businessList);
    setBusinessLogged(business);

    return true;
  }

  // useEffect(() => {
  //   const token = window.localStorage.getItem("token");
  //   if (token) {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

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
