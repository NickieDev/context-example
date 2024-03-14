import { useUser } from "@/hooks/useUser"
import { Dispatch, SetStateAction } from "react"

type Props = {
   toEdit: boolean
}

export const Button = ({ toEdit }: Props) => {
   const { nameField, setNameField, emailField, setEmailField, } = useUser()

   return(
      <div>
         { !toEdit && 
            <button className="bg-sky-600 p-2 w-[87.17px] text-gray-400 rounded transition-all duration-700 hover:opacity-90">
               Adicionar
            </button> 
         }

         { toEdit && 
            <button className="bg-violet-600 p-2 w-[87.17px] text-xl text-gray-400 rounded transition-all duration-700 hover:opacity-90">
               Salvar
            </button> 
         }
         
      </div>
   )
}