import { UserListContext } from "@/contexts/UserListContext";
import { useContext } from "react";

export const useUserList = () => useContext(UserListContext)