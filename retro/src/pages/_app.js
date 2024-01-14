import '@/styles/globals.css'


import "./chat/chat.css";
import Nav from "@/components/nav";
import { SessionProvider } from "next-auth/react"
export default function App({Component, pageProps: { session, ...pageProps }}) {

    return (
        <>
            <SessionProvider session={session}>

            <Component {...pageProps} />
            </SessionProvider>
        </>
    )

}
