import {useState} from 'react';

function aboutUsTele() {

  const [about, setAbout] = useState(false)

  const AboutHandler = () => {
    setAbout(!about)
  }


  
  return (
    
    <>
    
    <div className={about?" md:hidden absolute w-[90%] px-5 top-28 flex-col justify-around h-auto 5bg-yellow-100 box-sizing rounded-2xl p-5 ":"hidden"}>
      <h1 className="text-xl font-Merriweather tracking-wide py-7">Are you ready to take your football experience to another level.</h1>
      <p className=" tracking-wide  font-opensans ">join Us and you would be able to create your own team and challenge the other teams near to you, By creating an accound you would be able to send or receiving requests from other players or teams to join them base on your location and your schedule.</p>

      <div className="flex justify-start  py-4"><button className='bg-[#6997C6] border rounded-2xl text-white px-10 md:py-2 py-1 shadow-ms hover:shadow-xl active:scale-90 transition duration-150 md:w-60 border-white '>Signup!</button></div>

      
      <button onClick={AboutHandler } className='top-0 right-1 absolute text-2xl'>x</button>
    </div>
    <button className=' absolute top-0 right-0 bg-green-200 px-2 py-7 rounded-full' onClick={AboutHandler } >About Us</button>

    

    </>
  )
}

export default aboutUsTele