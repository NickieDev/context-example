'use client'

import { useEffect, useState } from "react"
import { InputField } from "./InputField"
import { Item } from "./Item"
import { useUser } from "@/hooks/useUser"
import { Button } from "./Button"
import axios from "axios"
import { User } from "@/types/user"
import { baseURL } from "@/libs/baseURL"

export const ContentArea = () => {
   const { nameField, setNameField, emailField, setEmailField, } = useUser()
   const [userList, setUserList] = useState<User[]>([])

   const [toEdit, setToEdit] = useState(false)

   const getUserList = async() => {
      await baseURL.get('/')
         .then(res => console.log(res))
         .then(res => setUserList(res.data.result))
   }

   useEffect(() => {
      getUserList()
   }, [userList])

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
            { userList.length === 0 && <p className="text-base text-gray-400">Ainda não possui nenhum usuário cadasrado</p> }

            { userList.length >= 1 &&
               <Item />
            }
         </div>
   
      </div>

   )
}