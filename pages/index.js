import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from '../components/Navbar';
import Hero from '../components/LandingPage/Hero.jsx'
import GetStarted from '../components/LandingPage/GetStarted'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    <Hero />
    <GetStarted />
    </>
  );
}
