'use client'

import { Dispatch, SetStateAction, useState } from "react"
import { Button } from "./Button"
import { useUser } from "../hooks/useUser"



export const Item = () => {
   const [toEdit, setToEdit] = useState(false)

   const { nameField, setNameField, emailField, setEmailField, } = useUser()

   return(
      <div>
         <p>Nome</p>

         <p>Email</p>

         <p onClick={ () => setToEdit(!toEdit) }>EDIT</p>

         <div>
            <Button toEdit={ toEdit } />
         </div>
      </div>
   )
}