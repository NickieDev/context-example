'use client'

import { useState } from "react"
import { InputField } from "./InputField"
import { Item } from "./Item"
import { useUser } from "@/hooks/useUser"
import { Button } from "./Button"

export const ContentArea = () => {
   const { nameField, setNameField, emailField, setEmailField, } = useUser()

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
            <Item />
            <Item />
            <Item />
         </div>
   
      </div>

   )
}