import '../styles/globals.css'
import MainLayout from "../components/MainLayout";
import Head from "next/head"
import { RecoilRoot } from 'recoil'

function App({ Component, pageProps }) {
  return(
      <>
        <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css" />
            <meta name="theme-color"
                  content="#f5f5f7"
                  media="(prefers-color-scheme: light)" />
            <meta name="theme-color"
                  content="#f5f5f7"
                  media="(prefers-color-scheme: dark)" />
        </Head>
        <RecoilRoot>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </RecoilRoot>
      </>
  )
}

export default App
