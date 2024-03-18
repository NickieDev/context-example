'use client'

import { useEffect, useState } from "react"
import { InputField } from "./InputField"
import { Item } from "./Item"
import { useUser } from "@/hooks/useUser"
import { Button } from "./Button"
import axios from "axios"
import { User } from "@/types/user"
import { baseURL } from "@/libs/baseURL"
import { serviceAPI } from "@/service/service"
import { useUserList } from "@/hooks/useUserList"
import { UserListProvider } from "@/contexts/UserListContext"
import { UserProvider } from "@/contexts/UserContext"
import { useToEdit } from "@/hooks/useToEdit"

export const ContentArea = () => {
   const { nameField, setNameField, emailField, setEmailField, } = useUser()
   // const [nameField, setNameField] = useState('')
   // const [emailField, setEmailField] = useState('')
   const { userList, setUserList } = useUserList()

   const { toEdit, setToEdit } = useToEdit()

   const getUsers = async() => {
      try {
         let users = await serviceAPI.getUserList()
         console.log(users)

         setNameField('')
         
         setEmailField('')

         setUserList(users)
         
      } catch(e) {
         console.log(e)
      }
   }

   useEffect(() => {
      getUsers()
   }, [])

   return(
      <div className="flex items-center flex-col w-full">

         <div className="w-[768px] flex items-center justify-between gap-4">
            <InputField 
               placeholder='Digite seu nome'
               valueField={ nameField } 
               onChangeField={ setNameField }
            />
      
            <InputField
               placeholder='Digite seu email'
               valueField={ emailField } 
               onChangeField={ setEmailField } 
            />

            <Button toEdit={ toEdit } />
         </div>

         <div className="mt-10 w-[768px]">
            { userList.length === 0 && <p className="text-base text-gray-400">Ainda não possui nenhum usuário cadastrado</p> }

            { userList.map((item, index) => (
               <Item 
                  id={ item.id } 
                  userName={ item.userName } 
                  userEmail={ item.userEmail } 
                  key={ item.id } /> 
            ))}
         </div>
   
      </div>
   )
}