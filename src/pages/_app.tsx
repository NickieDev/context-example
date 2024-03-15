import { UserProvider } from '@/contexts/UserContext'
import { UserListProvider } from '@/contexts/UserListContext'
import type { AppProps } from 'next/app'


export default function MyApp({ Component, pageProps }: AppProps) {

   return (
      <UserListProvider>
         <UserProvider>
            <Component {...pageProps} />
         </UserProvider>
      </UserListProvider>
   )
}