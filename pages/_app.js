import '../styles/globals.css'
import MainLayout from "../components/MainLayout";
import Head from "next/head"

function App({ Component, pageProps }) {
  return(
    <>
        <Head>
            <meta name="color-scheme" content="light only"/>
        </Head>
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    </>
  )
}

export default App
