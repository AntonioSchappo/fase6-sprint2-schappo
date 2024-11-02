"use client";
import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { v4 as uuid } from "uuid";

export const LoginContext = createContext({});

export default function LoginProvider({ children }) {
  const [isBusinessLoggedIn, setIsBusinessLoggedIn] = useState(false);
  const [businessLogged, setBusinessLogged] = useState({});

  const [isOngLoggedIn, setIsOngLoggedIn] = useState(false);
  const [ongLogged, setOngLogged] = useState({});

  function LoginBusiness(email, password) {
    const { getItem } = useLocalStorage("businesses");
    const { setItem } = useLocalStorage("businessLogged");
    const businessList = getItem() || [];
    const businessToLog = businessList.find((b) => b.email === email);

    if (!businessToLog || businessToLog.password !== password) {
      alert("E-mail e/ou senha incorretos");
      return;
    }

    setIsBusinessLoggedIn(true);
    setBusinessLogged(businessToLog);
    setItem(businessToLog);
    return isBusinessLoggedIn;
  }

  function LogoutBusiness() {
    const { removeItem } = useLocalStorage("businessLogged");

    setIsBusinessLoggedIn(false);
    setBusinessLogged({});
    removeItem();
  }

  /**
   * @param {Institution} business
   * @returns
   */
  function RegisterBusiness(business) {
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

    return true;
  }

  function LoginOng(email, password) {
    const { getItem } = useLocalStorage("ongs");
    const { setItem } = useLocalStorage("ongLogged");
    const ongsList = getItem() || [];
    const ongToLog = ongsList.find((o) => o.email === email);

    if (!ongToLog || ongToLog.password !== password) {
      alert("E-mail e/ou senha incorretos");
      return;
    }

    setIsOngLoggedIn(true);
    setOngLogged(ongToLog);
    setItem(ongToLog);
    return isBusinessLoggedIn;
  }

  useEffect(() => {
    const token = window.localStorage.getItem("businessLogged");
    if (token) {
      setIsBusinessLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const token = window.localStorage.getItem("ongLogged");
    if (token) {
      setIsOngLoggedIn(true);
    }
  }, []);

  return (
    <LoginContext.Provider
      value={{
        business: businessLogged,
        ong: ongLogged,
        isBusinessLoggedIn,
        isOngLoggedIn,
        LoginBusiness,
        LogoutBusiness,
        RegisterBusiness,
        LoginOng,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
