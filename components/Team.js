import React from 'react'
import Image from 'next/image'

function Team({ team }) {

  const updateMyTeam = async () => {

    const response = await fetch(`/api/teams/${team._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    });


    setHandlePlayer(true)

    console.log(handlePlayer)
    
  }





  return (
    <div className=' text-white h-[600px] relative    '>
      <img src="/cardfifa123.png" 
         className=' w-[500px] h-[620px]'   />


      <div className='absolute top-16 text-center left-48 '>
        <div className=' '><p>{team.teamName}</p></div>
        
      </div>

      <div className='absolute  left-4 top-[400px]'>
        <p>Phone Number:{team.teamPhone}</p>
      </div>

      <div className='absolute left-4 top-[430px]'>
        <p>wanna Play On:<br/>
          date:{team.date}, time: {team.hour}</p>
      </div>

      <div className='absolute left-4 top-[490px]'>
        <p>Membre on the team:{team.playersNumber}</p>
      </div>




    </div>
  )
}

export default Team