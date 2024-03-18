import { ToEditContext } from "@/contexts/ToEditContext";
import { useContext } from "react";

export const useToEdit = () => useContext(ToEditContext);