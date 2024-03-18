import { useUserList } from "@/hooks/useUserList"
import { baseURL } from "@/libs/baseURL"
import { User } from "@/types/user"

export const serviceAPI = {
   getUserList: async(): Promise<User[]> => {
      return new Promise (async(resolve) => {
         await baseURL.get('/')
         //.then(res => setUserList(res.data.result))
            .then(({ data }) => resolve(data.result))
            .catch(e => console.log(e))
      })
   },
   
   getUser: async(id: number): Promise<User> => {
    return new Promise (async(resolve) => {
      await baseURL.get(`/${ id }`)
         // .then(({ data }) => data.result)
         .then(({ data }) => {
            //console.log(data)

            resolve(data.result)
         })
      .catch(e => console.log(e))
    }) 
   },

   createUser: async(name: string, email: string): Promise<User> => {
      return new Promise (async(resolve) => {
         await baseURL.post('/', {
            userName: name, userEmail: email
         })
            .then(res => {
               console.log(res.data.result)

               resolve(res.data.result)
            })
            .catch(e => console.log(e))
      })
   },

   updateUser: async(id: number, name: string, email: string): Promise<User> => {
      return new Promise (async(resolve) => {
         await baseURL.put(`/${ id }`, {
            userName: name, userEmail: email
         })
            .then(res => {
               // console.log(res.data.result)
               // serviceAPI.getUserList()

               resolve(res.data.result)
            })
            .catch(e => {
               console.log(e)
            })
      })
   },

   deleteUser: async(id: number): Promise<User> => {
      return new Promise (async(resolve) => {
         await baseURL.delete(`/${ id }`)
         .then(res => {
            console.log(res.data.result)

            resolve(res.data.result)        
         })
         .catch(e => {
            console.log(e)
         })
      })
   }

}