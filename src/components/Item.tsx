'use client'

import { Dispatch, SetStateAction, useContext, useState } from "react"
import { Button } from "./Button"
import { useUser } from "@/hooks/useUser"
import { User } from "@/types/user"
import { serviceAPI } from "@/service/service"
import { useUserList } from "@/hooks/useUserList"
import { useToEdit } from "@/hooks/useToEdit"
import { ToEditContext } from "@/contexts/ToEditContext"

export const Item = ({ id, userName, userEmail }: User) => {

   const { nameField, setNameField, emailField, setEmailField, } = useUser()

   const { userList, setUserList } = useUserList()

   const { setId, toEdit, setToEdit } = useToEdit()

   const handleUpdate = async (id: number, nameField: string, emailField: string) => {
      let findUser = userList.find(user => user.id === id)

      setToEdit(true)

      // alert(toEdit)
      
      // console.log(findUser)
      
      if(findUser) {
         setNameField(findUser.userName)
         setEmailField(findUser.userEmail)
         setId(findUser.id)
      }
   }

   const handleDelete = (id: number) => {
      serviceAPI.deleteUser(id)

      setUserList(userList.filter(user => user.id !== id))
   }

   return(
      <div className="flex items-center justify-center borber border-b-2">

         <div className="flex justify-center items-center text-gray-400">
            <p className="w-[200px] p-4">
               { userName }
            </p>

            <p className="w-[350px] p-4">
               { userEmail }
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

/*
   iron maiden, metallica, nirvana, sex pixtol, dead keneddy, ratos de porao, offspring
*/