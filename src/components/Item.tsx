'use client'

import { Dispatch, SetStateAction, useState } from "react"
import { Button } from "./Button"
import { useUser } from "@/hooks/useUser"



export const Item = () => {
   const [toEdit, setToEdit] = useState(false)

   const { nameField, setNameField, emailField, setEmailField, } = useUser()

   return(
      <div className="flex items-center justify-center bober border-b-2">

         <div className="flex justify-center items-center text-gray-400">
            <p className="w-[200px] p-4">Nome</p>

            <p className="w-[350px] p-4">Email</p>
         </div>

         <div className="flex gap-4">
            <button className="bg-yellow-600 p-2 w-[87.17px] text-xl text-gray-400 rounded transition-all duration-700 hover:opacity-90">
               Editar
            </button> 

            <button className="bg-red-600 p-2 w-[87.17px] text-xl text-gray-400 rounded transition-all duration-700 hover:opacity-90">
               Excluir
            </button> 
         </div>
      </div>
   )
}