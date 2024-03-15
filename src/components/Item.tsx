'use client'

import { Dispatch, SetStateAction, useState } from "react"
import { Button } from "./Button"
import { useUser } from "@/hooks/useUser"
import { User } from "@/types/user"
import { serviceAPI } from "@/service/service"

export const Item = ({ id, name, email }: User) => {
   const [toEdit, setToEdit] = useState(false)

   const { nameField, setNameField, emailField, setEmailField, } = useUser()

   const handleUpdate = (id: number, nameField: string, emailField: string) => {
      serviceAPI.updateUser(id, nameField, emailField)
   }

   const handleDelete = (id: number) => {
      serviceAPI.deleteUser(id)
      // userList.filter(user => user.id !== id)
   }

   return(
      <div className="flex items-center justify-center bober border-b-2">

         <div className="flex justify-center items-center text-red-400">
            <p className="w-[200px] p-4">
               { name } - Name
            </p>

            <p className="w-[350px] p-4">
               { email } - Email
            </p>
         </div>

         <div className="flex gap-4">
            <button onClick={ () => handleUpdate(id, nameField, emailField) }
               className="bg-yellow-600 p-2 w-[87.17px] text-xl text-gray-400 rounded transition-all duration-700 hover:opacity-90">
               Editar
            </button> 

            <button onClick={ () => handleDelete(id) }
               className="bg-red-600 p-2 w-[87.17px] text-xl text-gray-400 rounded transition-all duration-700 hover:opacity-90">
               Excluir
            </button> 
         </div>
      </div>
   )
}