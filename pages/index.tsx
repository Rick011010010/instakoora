import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from './leyout/Header'
import Login from './leyout/Login'

const Home: NextPage = () => {



  return (
    <div className="">


      <Head>
        <title>InstaKoora</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>



      

      <div className='sm:display md:hidden ' >
        <Image src="/BG TELE.png" layout='fill' />
      </div>

      <div className='hidden md:flex' >
        <Image src="/ex 12 APP.jpg" layout='fill'/>
      </div>

     





      <Header />

      <Login/>

      





    </div>
  )
}

export default Home
