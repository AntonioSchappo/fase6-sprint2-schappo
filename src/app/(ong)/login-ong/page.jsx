"use client"
import { useLogin } from "@/hooks/useLogin";
import LoginOngView from "./view";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useState } from "react";

export default function LoginOng() {
  const { LoginOng } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { getItem } = useLocalStorage("ongLogged");
  const ong = getItem();

  const handleLogin = (event) => {
    event.preventDefault();
    const logged = LoginOng(email, password);
    if (logged) {
      alert(`Seja bem-vindo de volta, ${ong.name}!`);
      window.location.href = "/doar";
    }
  };
  return (
    <LoginOngView
      handleLogin={handleLogin}
      setEmail={setEmail}
      setPassword={setPassword}
    />
  );
}
