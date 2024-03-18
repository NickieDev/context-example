import { ToEditProvider } from '@/contexts/ToEditContext'
import { UserProvider } from '@/contexts/UserContext'
import { UserListProvider } from '@/contexts/UserListContext'
import type AppProps from 'next/app'


export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ToEditProvider>
      <UserListProvider>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </UserListProvider>
    </ToEditProvider>
  )
}