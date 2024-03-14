import { UserProvider } from '@/context/UserContext'
import type { AppProps } from 'next/app'


export default function MyApp({ Component, pageProps }: AppProps) {

   return (
      <UserProvider>
         <Component {...pageProps} />
      </UserProvider>
   )
}