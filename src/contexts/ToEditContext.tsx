'use client'
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

type ToEditType = {
   id: number
   setId: Dispatch<SetStateAction<number>>
   toEdit: boolean
   setToEdit: Dispatch<SetStateAction<boolean>>
}

let defaultValue: ToEditType = {
   id: 0,
   setId: () => { },
   toEdit: false,
   setToEdit: () => {}
}

export const ToEditContext = createContext<ToEditType>(defaultValue)

type Props = {
    children: ReactNode
}

export const ToEditProvider = ({ children }: Props) => {
   const [id, setId] = useState(0)
   const [toEdit, setToEdit] = useState(false)

   return(
      <ToEditContext.Provider value={{ id, setId, toEdit, setToEdit }}>
         {children}
      </ToEditContext.Provider>
   )
}