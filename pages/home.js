import { getProviders, signIn, useSession, signOut, getSession } from "next-auth/react";
import React, { useState } from 'react'



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
              <h1 className='text-black text-4xl p-1'>Profile Page</h1>

              <ul className='md:absolute md:flex text-black text-xl md:mr-0 top-0 right-0 p-2'>
                <button className='p-2 flex '><li>Home</li></button>
                <button className='p-2 flex '><li>Settings</li></button>
                <button className='p-2 flex text-center ' onClick={() => signOut()}><li>Signe Out</li></button>
              </ul>
            </div>
          </div>

          <div className=''>
            <button className='md:hidden absolute top-0 right-0 p-3 text-black ' onClick={menuHandler} >X</button>
            <h1 className='text-black text-4xl p-3 md:hidden'>Profile Page</h1>

          </div>
          <ul className={!menu ? ' md:hidden flex text-black text-xl flex-col border-r  border-r-gray-700 w-[35%] h-56' : 'hidden'}>
            <button className='p-3 flex '><li>Home</li></button>
            <button className='p-3 flex '><li>Settings</li></button>
            <button className='p-3 flex ' onClick={() => signOut()}><li>Signe Out</li></button>
          </ul>
        </div>
        <img src={session.user.image} alt="" className=" rounded-full" />

        <p >Welcome, {session.user.name}</p>



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