'use client'

import { useUser } from "@/hooks/useUser"

const TestApp = () => {
   const { nameField } = useUser()

   return(
      <div>
         <p>Testando</p>
         { nameField }
      </div>
   )
}

export default TestApp