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


export const ContentArea = () => {
   const { nameField, setNameField, emailField, setEmailField, } = useUser()
   // const [nameField, setNameField] = useState('')
   // const [emailField, setEmailField] = useState('')
   const { userList, setUserList } = useUserList()

   const getUsers = async() => {
      try {
         let users = await serviceAPI.getUserList()
         // console.log(users)
         setUserList(users)
         
      } catch(e) {
         console.log(e)
      }
   }

   useEffect(() => {
      getUsers()
   }, [])

   useEffect(() => {
      console.log(userList)
   }, [userList])

   const [toEdit, setToEdit] = useState(false)

   return(
      <div className="flex items-center flex-col border border-red-600 w-full">

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

         <div className="mt-10">
            { userList.length === 0 && <p className="text-base text-gray-400">Ainda não possui nenhum usuário cadastrado</p> }

            { userList.map((item, index) => (
               <Item 
                  id={ item.id } 
                  name={ item.name } 
                  email={ item.email } 
                  key={ item.id } /> 
            ))}

            <ul>
               { userList.map((item, index) => (
                  <li key={ index }>{ item.name }</li>
               )) }
            </ul>
         </div>
   
      </div>
   )
}