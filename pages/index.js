import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar'
import Background from '../Components/Background'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fintract Global</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fintractlogo.ico"/>
      </Head>
      
      <Navbar/>
      <Background/>
      </div>
  )
}