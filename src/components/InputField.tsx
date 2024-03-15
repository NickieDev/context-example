'use client'

import { useUser } from "@/hooks/useUser"
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"

type Props = {
   valueField: string
   onChangeField: Dispatch<SetStateAction<string>>
   placeholder: string
}

export const InputField = ({ valueField, onChangeField, placeholder }: Props) => {
   const { value, setValue } = useUser()
   
   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChangeField(event.target.value)

      console.log(event.target.value)
   }

   return(
      <div>
         <input 
            type="text" 
            className="rounded p-2 sm:w-full"
            placeholder={ placeholder }
            value={ valueField }
            onChange={ handleChange }
         />
      </div>
   )
}