import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../layouts/Navbar'
import Login from '../components/Login'
import Footer from '../layouts/Footer'
import About from './About'
import HowWork from '../layouts/HowWork'
import BeforFoter from '../layouts/BeforFoter'
import AboutUsTele from '../layouts/AboutUsTele'

const Home = () => {



  return (
    <div className=" relative">


      <Head>
        <title>InstaKoora</title>
        <link rel="icon" href="/LOGO INSTA KOORA.png" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@1,800&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,600&display=swap" rel="stylesheet"></link>
      </Head>



      <Navbar/>

      <div className='md:hidden flex justify-center relative' >
        <img src="/BG TELE.png" layout='fill'/>
        <Login />
        <AboutUsTele />
        
      </div>

      <div className='hidden md:flex h-[780px]' >
        <img src="/ex 12 APP.jpg" width={1920} height={700} layout='fill'/>
        <Login />
        <About />
      </div>








      <div>
        <HowWork />
      </div>






      <div>
        <BeforFoter />

      </div>


      <Footer/>









    </div>
  )
}

export default Home
