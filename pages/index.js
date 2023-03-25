import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/LandingPage/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className = "">
      <Navbar />
     {/* <p className= "text-primary">pranshu</p>
     <p className= "text-secondary text-3xl">pranshu</p>
     <p className='text-error text-6xl'>balveer</p>
     <h1 className='text-warning text-6xl'>prazzwal</h1> */}
     </div>
    </>
  )
}
