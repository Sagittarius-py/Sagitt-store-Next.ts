import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import {NavBarDesktop} from './modules/NavBar'
import Landing from './Landing'

import { useRouter } from 'next/router'
import MainContainer from "./MainContainer"

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  
  const router = useRouter()
  console.log(router.pathname)
  const path  = router.pathname;


  return (
    <>
      <Head>
        <title>Sagitt-store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} >
          <NavBarDesktop />
          <MainContainer>
            
            <Landing/>
          </MainContainer>
      </main>


    </>
  )
}
