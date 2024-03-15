'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

// Tipagem para os dados que seram transportados
type UserContextType = {
   nameField: string,
   setNameField: Dispatch<SetStateAction<string>> 
   // setNameField: (newState: string) => void 
   emailField: string,
   setEmailField: Dispatch<SetStateAction<string>> 
   // setEmailField: (newState: string) => void 
}

// Valores iniciais para os dados
let defaultValue: UserContextType = {
   nameField: '',
   setNameField: () => { },
   emailField: '',
   setEmailField: () => { },
}

// Criação do Context
export const userContext = createContext<UserContextType>(defaultValue)

// -------------------------------
type Props = {
   children: ReactNode
}

// O 'Provider' irá funcionar como um component que vai transportar os dados para os componentes que desejar
export const UserProvider = ({ children }: Props) => {
   const [nameField, setNameField] = useState('')
   const [emailField, setEmailField] = useState('')

   return (
      <userContext.Provider value={{ nameField, setNameField, emailField, setEmailField }}>
         {children}
      </userContext.Provider>
   )
}
//--------------------------------------

// O custom Hook 'useUser' se encontra dentro da pasta Hooks/useUser.ts para deixar o código mais oganizado