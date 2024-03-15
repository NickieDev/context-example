import { userContext } from "@/contexts/UserContext";
import { useContext } from "react";

// Custom Hook para facilitar sua utilização
export const useUser = () => useContext(userContext)