import React from 'react'
import { BsFillTelephoneFill, BsCalendarDateFill } from 'react-icons/bs'
import { GiTeamDowngrade  } from 'react-icons/gi'
import { HiUserGroup   } from 'react-icons/hi'
import {  BiTime  } from 'react-icons/bi'

import Image from 'next/image'

function Team({ team,teamupdate,setTeamupdate
 }) {

  const updateMyTeam = async () => {

    const response = await fetch(`/api/teams/${team._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify(team)
    },
    
    ).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        
      })
    });


    setTeamupdate(!teamupdate)

    

  }





  return (
    <div className=' text-white h-[600px] 2xl:w-[470px] relative    '>
      <img src="/cardfifa123.png"
        className=' w-[500px] h-[650px] z-50 ' />

      <img src={team.photoUrl || team.URL } alt="" className=' absolute self-center top-24 w-[435px] left-4 h-[300px] rounded-lg shadow-2xl shadow-[#00E1C8] border-[#00E1C8] border-8 ' />


      <div className='absolute w-full top-16 text-center px-2'>
        <div className=' text-3xl font-bold '><h1>{team.teamName}</h1></div>

      </div>

      <div class="absolute  left-4 top-[420px]">
        <div class="widget w-full px-1 rounded-lg bg-transparant border-l-4 border-white">
          <div class="flex items-center">
            <div class="icon w-6 p-1 bg-white text-purple-900 rounded-full mr-3">
            <BsFillTelephoneFill/>
            </div>
            <div class="flex flex-col justify-center">
              <div class="text-sm text-gray-400 font-bold">Phone Number:</div>
              <div class="text-xl text-white font-bold">{team.teamPhone}</div>

            </div>
          </div>
        </div>
      </div>

      {/* <div className='absolute  left-4 top-[420px]'>
        <p>Phone Number:{team.teamPhone}</p>
      </div> */}


      <div class="absolute left-4 top-[490px] h-10">
        <div class="widget w-full px-0.5 rounded-lg bg-transparant border-l-4 border-white">
          <div class="flex items-center">
            <div class="icon w-6 p-1 bg-white text-purple-900 rounded-full mr-3">
              <BsCalendarDateFill/>
            </div>
            <div class="flex flex-col justify-center">
              <div class="text-sm text-gray-400 font-bold">We Want To Play On:</div>
              <div class="text-lg font-bold"><p>{team.date}, <BiTime size={20} className=" inline"/>{team.hour}</p> </div>

            </div>
          </div>
        </div>
      </div>

      {/* <div className='absolute left-4 top-[450px]'>
        <p>wanna Play On:<br />
          date:{team.date}, time: {team.hour}</p>
      </div> */}


      <div class="absolute left-[245px] top-[490px] h-10">
        <div class="widget w-full px-1 rounded-lg bg-transparant border-l-4 border-white">
          <div class="flex items-center">
            <div class="icon w-6 p-1 bg-white text-purple-900 rounded-full mr-3">
              <HiUserGroup/>
            </div>
            <div class="flex flex-col justify-center">
              <div class="text-sm text-gray-400 font-bold">Membres of the team:</div>
              <div class="text-xl font-bold"><p>{team.playersNumber}</p> </div>

            </div>
          </div>
        </div>
      </div>

      {/* <div className='absolute left-4 top-[510px]'>
        <p>Membres of the team:{team.playersNumber}</p>
      </div>

      <div className='absolute left-4 top-[510px]'>
        <p>Membre on the team:  {team.groupAge}</p>
      </div> */}


      <div class="absolute left-[245px] top-[420px] h-10">
        <div class="widget w-full px-1 rounded-lg bg-transparant border-l-4 border-white">
          <div class="flex items-center">
            <div class="icon w-6 p-1 bg-white text-purple-900 rounded-full mr-3">
              <GiTeamDowngrade/>
            </div>
            <div class="flex flex-col justify-center">
              <div class="text-sm text-gray-400 font-bold">The Team Group Age :</div>
              <div class="text-xl font-bold"><p>{team.groupAge}</p> </div>

            </div>
          </div>
        </div>
      </div>


      <button onClick={()=>updateMyTeam()}>update</button>




    </div>
  )
}

export default Team