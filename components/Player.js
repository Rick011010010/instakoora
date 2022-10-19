import React from 'react'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { RiDeleteBin6Line, RiTeamFill } from 'react-icons/ri'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { useSSRPlayerState, handlePlayerState } from '../atoms/playerAtom'
import { useRecoilState } from "recoil";

function player({player,setPlayerDelete, playerDelete}) {

  const [handlePlayer, setHandlePlayer] = useRecoilState(handlePlayerState);

  const deletePlayer = async () => {

    const response = await fetch(`/api/players/${player._id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });


    setHandlePlayer(true)

    console.log(handlePlayer)
    setPlayerDelete=(!playerDelete)
    
  }


  





  return (
    <div>
       <div className="relative">
                        {/* <!-- box-1 --> */}
                        <div className="px-2">
                          <div className="flex h-8 w-full rounded-t-lg border-b-2 border-slate-300 bg-slate-100 pl-[90px] shadow-lg">
                            <small className="my-auto flex  items-center text-xs font-light tracking-tight text-slate-700"><BsFillTelephoneFill className=" mx-1" />{player.inputPhone}</small>
                          </div>
                        </div>
                        {/* <!-- box-2 --> */}
                        <div className="flex justify-between pr-2 h-12 w-full rounded-lg bg-white pl-[98px] shadow-xl">
                          <small className="my-auto  font-medium text-slate-700 text-xl">{player.inputName}</small>
                          <p className=" text-black pt-2 text-xl ">Age:{player.inputAge}</p>
                          <button className='ml-[10%] hover:bg-gray-400 rounded-2xl ' onClick={deletePlayer}><RiDeleteBin6Line color='black' size={20} /></button>
                        </div>
                        {/* <!-- circle --> */}
                        <div className="absolute top-2 left-6 h-16 w-16 rounded-full border-2 border-white shadow-md">
                          <img className="rounded-full  w-full h-full " src="player2.webp" alt="" />
                        </div>
                      </div>
    </div>
  )
}

export default player