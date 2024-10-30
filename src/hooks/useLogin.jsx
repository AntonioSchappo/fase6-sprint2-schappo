import { useContext } from "react";
import { LoginContext } from "@/contexts/LoginContext";

export function useLogin() {
    const context = useContext(LoginContext);
    return context;
}