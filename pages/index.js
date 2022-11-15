import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar'
import Background from '../Components/Background'
import Ourservices from '../Components/Ourservices'
import Ceointro from '../Components/ceointro'
import Best from '../Components/Best'
import Ourclients from '../Components/Ourclients'
import Signup from '../Components/Signup'
import Footer from '../Components/Footer'



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
      <Ourservices/>
      <Ceointro/>
      <Best/>
      <Ourclients/>
      <Signup/>
      <Footer className ={styles.footerstyle}/>
      </div>
  )
}
