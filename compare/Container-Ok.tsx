'use client'

import { useState } from "react"
import { InputField } from "./InputField"
import { Item } from "./Item"
import { useUser } from "../hooks/useUser"

export const ContentArea = () => {
   const { nameField, setNameField, emailField, setEmailField, } = useUser()

   return(
      <div className="flex items-center flex-col border border-red-600 w-full">

         <div className="w-[768px] border">
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
         </div>
   
         <Item />
         <Item />
         <Item />
      </div>

   )
}