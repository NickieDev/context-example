'use client'

import { serviceAPI } from "@/service/service";
import { User } from "@/types/user";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";

type UserListType = {
   userList: User[]
   setUserList: Dispatch<SetStateAction<User[]>>
}

// Valores iniciais para os dados
const initialValue = {
   userList: [],
   setUserList: () => {}
}

// Criação do Context
export const UserListContext = createContext<UserListType>(initialValue)

// -------------------------------
type Props = {
   children: ReactNode
}

// O 'Provider' irá funcionar como um component que vai transportar os dados para os componentes que desejar
export const UserListProvider = ({ children }: Props) => {
   const [userList, setUserList] = useState<User[]>([])

   useEffect(() => {
      serviceAPI.getUserList()
         .then(setUserList)
         .catch(e => console.log(e))
   }, [])

   return(
      <UserListContext.Provider value={{ userList, setUserList }} >
         { children }
      </UserListContext.Provider>
   )
}

//--------------------------------------

// O custom Hook 'useUserList' se encontra dentro da pasta Hooks/useUserList.ts para deixar o código mais oganizado