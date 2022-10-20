import { getProviders, signIn, useSession, signOut, getSession } from "next-auth/react";
import { connectToDatabase } from '../util/mongodb'

import Sidebar from "../components/Sidebar";
import MainProfil from "../components/MainProfil";
import React, { useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { AiFillSetting } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { TiThMenu } from 'react-icons/ti'
import Navbar from "../components/Navbar";



function home({ players }) {

  const { data: session, status } = useSession();
  console.log(session)

  const [menu, setMenu] = useState(true)

  const menuHandler = () => {
    setMenu(!menu)
  }



  return (
    <div className=" bg-[#000300]   ">

      <div className=" bg-[#000300] z-50 ">


        <Navbar />

        {/* <div className='md:flex md:justify-between hidden  '>

            <div className='w-[100%] bg-[#000300]  p-3 md:flex md:justify-between '>
              <h1 className='text-[#00df9a] text-4xl p-1'>InstaKoora</h1>

              <ul className='md:absolute md:flex text-black text-xl md:mr-0 top-0 right-0 p-2'>
                <button className='p-2 flex text-[#00df9a] '><AiFillHome size={25} /><li>Home</li></button>
                <button className='p-2 flex text-[#00df9a] '><AiFillSetting size={25} /><li>Settings</li></button>
                <button className='p-2 flex text-[#00df9a] ' onClick={() => signOut()}><BsFillPersonFill size={25} /><li>Signe Out</li></button>
              </ul>
            </div>
          </div>

          <div className=' bg-[#000300]'>
            <button className='md:hidden absolute  top-0 right-0 p-3 text-[#00df9a]' onClick={menuHandler} ><TiThMenu size={30} /></button>
            <h1 className=' text-4xl p-3 md:hidden text-[#00df9a]'>InstaKoora</h1>

          </div>
          <ul className={!menu ? ' md:hidden flex text-[#00df9a] text-xl flex-row border-b justify-around  border-b-gray-700 h-16 w-[90%] mx-[5%] ' : 'hidden'}>
            <button className=' flex text-[#00df9a] '><AiFillHome size={25} /><li className=" ">Home</li></button>
            <button className=' flex text-[#00df9a] '><AiFillSetting size={25} /><li className=" ">Settings</li></button>
            <button className=' flex  text-[#00df9a]' onClick={() => signOut()}><BsFillPersonFill size={25} /><li className="">Signe Out</li></button>
          </ul> */}
      </div>



      <div className="md:grid md:grid-cols-3 xl:grid xl:grid-cols-4    ">

        <Sidebar />



        <div className=" w-[100%]   xl:col-span-3 md:col-span-2   ">
          <MainProfil players={players} />
        </div>
      </div>







    </div>

  )

}

export default home


export const getServerSideProps = async (context) => {
  const session = await getSession(context)
 
  
  // Get players on SSR
  const { db } = await connectToDatabase();
  const players = await db
    .collection("players")
    .find({ email: session.user.email })
    .sort({ timestamp: -1 })
    .toArray();

  return {
    props: {
      session,
      players: players.map((player) => ({
        _id: player._id.toString(),
        inputName: player.inputName,
        inputAge: player.inputAge,
        inputPhone: player.inputPhone,
        username: player.username,
        email: player.email,
        userImg: player.userImg,
        createdAt: player.createdAt,
      }))
    },
  }
}