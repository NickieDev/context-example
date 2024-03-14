'use client'

import { ChangeEvent, Dispatch, SetStateAction } from "react"

type Props = {
   valueField: string
   onChangeField: Dispatch<SetStateAction<string>>
   placeholder: string
}

export const InputField = ({ valueField, onChangeField, placeholder }: Props) => {
   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChangeField(event.target.value)

      console.log(event.target.value)
   }

   return(
      <input 
         type="text" 
         className="rounded p-2 sm:w-full"
         placeholder={ placeholder }
         value={ valueField }
         onChange={ handleChange }
      />
   )
}