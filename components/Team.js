import React from 'react'
import Image from 'next/image'

function Team({ team }) {
  return (
    <div className=' text-white h-[600px]    '>
      <Image src="/cardfifa123.png" width={500}
        height={650} object-fit='countain' objectPosition='center' />


      <div className='absolute top-0 '>
        <p>{team.teamName}</p>
        <p>{team.playersNumber}</p>
        <p>{team.teamPhone}</p>
        <p>{team.date}{team.hour}</p>
      </div>




    </div>
  )
}

export default Team