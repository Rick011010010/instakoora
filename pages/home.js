import { getProviders, signIn, useSession, signOut, getSession } from "next-auth/react";
import React, { useState } from 'react'
import Sidebar from "../components/Sidebar";



function home() {

  const { data: session, status } = useSession();
  console.log(session)

  const [menu, setMenu] = useState(true)

  const menuHandler = () => {
    setMenu(!menu)
  }

  if (session) {

    return (
      <div>

        <div className=" ">

          <div className='md:flex md:justify-between hidden  '>

            <div className='w-[100%] bg-gray-400  p-3 md:flex md:justify-between '>
              <h1 className='text-black text-4xl p-1'>InstaKoora</h1>

              <ul className='md:absolute md:flex text-black text-xl md:mr-0 top-0 right-0 p-2'>
                <button className='p-2 flex '><li>Home</li></button>
                <button className='p-2 flex '><li>Settings</li></button>
                <button className='p-2 flex text-center ' onClick={() => signOut()}><li>Signe Out</li></button>
              </ul>
            </div>
          </div>

          <div className=' bg-gray-400'>
            <button className='md:hidden absolute  top-0 right-0 p-3 text-black ' onClick={menuHandler} >X</button>
            <h1 className='text-black text-4xl p-3 md:hidden'>InstaKoora</h1>

          </div>
          <ul className={!menu ? ' md:hidden flex text-black text-xl flex-row border-b justify-center  border-b-gray-700 h-16 w-[90%] mx-[5%] ' : 'hidden'}>
            <button className='p-2 flex  '><li className=" pt-2">Home</li></button>
            <button className='p-2 flex '><li className=" pt-2">Settings</li></button>
            <button className='p-2 flex ' onClick={() => signOut()}><li className=" pt-2">Signe Out</li></button>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row gap-5 ">
          <Sidebar />

        </div>





      </div>

    )

  } else {
    return (
      <div>
        <p>You are not signed in.</p>
        <button onClick={() => signIn()}>Sign in</button>

      </div>

    )
  }
}

export default home


export const getServerSideProps = async (context) => {
  const session = await getSession(context)
  if (!session) {

    return {
      redirect: {
        destination: '/'
      }

    }

  }

  return {
    props: { session },
  }
}