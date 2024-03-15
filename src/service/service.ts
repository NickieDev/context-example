import { useUserList } from "@/hooks/useUserList"
import { baseURL } from "@/libs/baseURL"
import { User } from "@/types/user"

export const serviceAPI = {
   getUserList: async(): Promise<User[]> => {
      return await baseURL.get('/')
      //.then(res => setUserList(res.data.result))
         .then(({ data }) => data.result)
         .catch(e => console.log(e))
   },
   
   getUser: async(id: number) => {
      return await baseURL(`/${ id }`)
         .then(({ data }) => data.result)
         .catch(e => console.log(e))
   },

   createUser: async(name: string, email: string) => {
      return await baseURL.post('/', {
         userName: name, userEmail: email
      })
         .then(res => {
            console.log(res.data.result)
            serviceAPI.getUserList()
         })
         .catch(e => console.log(e))
   },

   updateUser: async(id: number, name: string, email: string) => {
      return await baseURL.put(`/${ id }`, {
         userName: name, userEmail: email
      })
         .then(res => {
            console.log(res.data.result)
            serviceAPI.getUserList()
         })
         .catch(e => console.log(e))
   },

   deleteUser: async(id: number) => {
      return await baseURL.delete(`/${ id }`)
         .then(res => {
            console.log(res.data.result)
         })
         .catch(e => console.log(e))
   }

}