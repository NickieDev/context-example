'use client'

import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"

type Props = {
   valueField: string
   onChangeField: Dispatch<SetStateAction<string>>
   placeholder: string
}

export const InputField = ({ valueField, onChangeField, placeholder }: Props) => {
   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChangeField(event.target.value)
   }

   return(
      <input 
         type="text" 
         placeholder={ placeholder }
         value={ valueField }
         onChange={ handleChange }
      />
   )
}

/*export const InputField = () => {
   const [nameFiled, setNameField] = useState('')

   return(
      <input type="text" 
         value={ nameFiled }
         onChange={ e => setNameField(e.target.value) }
      />
   )
}*/