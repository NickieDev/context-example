import { useToEdit } from "@/hooks/useToEdit"
import { useUser } from "@/hooks/useUser"
import { useUserList } from "@/hooks/useUserList"
import { serviceAPI } from "@/service/service"
import { User } from "@/types/user"
import { Dispatch, SetStateAction } from "react"

type Props = {
   toEdit: boolean
}

export const Button = ({ toEdit }: Props) => {
   const { nameField, setNameField, emailField, setEmailField, } = useUser()

   const { userList , setUserList } = useUserList()

   const { id, setId, setToEdit } = useToEdit()

   const handleAddUser = async() => {
      let user = userList.find(user => user.userEmail === emailField) 

      if(!user) {
         await serviceAPI.createUser(nameField, emailField)
   
         let users = await serviceAPI.getUserList()
   
         console.log(users)
   
         setNameField('')
   
         setEmailField('')
   
         setUserList(users)
      } else {
         alert('Erro ao tentar registrar usuário.')
      }
   }

   const handleUpdateUser = async() => {
      let user = userList.find(user => user.userEmail === emailField) 

   //   alert(JSON.stringify(user?.userEmail).length >= 1 ? 'Achou' : 'Não')

      if(!user) {
         if(nameField !== '' && emailField !== '') {
            await serviceAPI.updateUser(id, nameField, emailField)
   
            setNameField('')
   
            setEmailField('')
   
            let users = await serviceAPI.getUserList()
   
            setUserList(users)
   
            setToEdit(false)
   
            setId(0)
         }
      } else {
         alert('Erro ao tentar modificar dados do usuário.')
      }

      /**/
   }

   const handleClear = () => {
      setNameField('')

      setEmailField('')

      setToEdit(false)

      setId(0)
   }

   return(
      <div className="flex gap-4">
         { !toEdit && 
            <button className="bg-sky-600 p-2 w-[87.17px] text-gray-400 rounded transition-all duration-700 hover:opacity-90" onClick={ handleAddUser }>
               Adicionar
            </button> 
         }

         { toEdit && 
            <button className="bg-violet-600 p-2 w-[87.17px] text-xl text-gray-400 rounded transition-all duration-700 hover:opacity-90" 
               onClick={ handleUpdateUser }
            >
               Salvar
            </button> 
         }

         <button className="bg-cyan-600 p-2 w-[87.17px] text-xl text-gray-400 rounded transition-all duration-700 hover:opacity-90" onClick={ handleClear }>
            Limpar
         </button>
         
      </div>
   )
}