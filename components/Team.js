import React from 'react'

function Team({team}) {
  return (
    <div className=' text-white'>
        <p>{team.teamName}</p>
        <p>{team.playersNumber}</p>
        <p>{team.teamPhone}</p>
        <p>{team.date}{team.hour}</p>
        
    </div>
  )
}

export default Team