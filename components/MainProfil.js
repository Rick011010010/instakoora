import Card from "./card"
import { GiSoccerKick } from 'react-icons/gi'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { RiDeleteBin6Line, RiTeamFill } from 'react-icons/ri'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from "uuid"
import { getProviders, signIn, useSession, signOut, getSession } from "next-auth/react";
import { useSSRPlayerState, handlePlayerState } from '../atoms/playerAtom'
import { useRecoilState } from "recoil";
import Player from "./Player"



export default function MainProfil({ players }) {

  console.log(players,"hhhhhhhhhhhhhhhhhhhhhhh")
  const { data: session, status } = useSession();

  const [modal, setModal] = useState(false)
  const modalHandler = () => {
    setModal(!modal)
  }

  const [inputName, setInputName] = useState('')

  const inputNameHandler = (e) => {
    console.log(e.target.value)
    setInputName(e.target.value)
  }


  const [inputAge, setInputAge] = useState('')

  const inputAgeHandler = (e) => {
    console.log(e.target.value)
    setInputAge(e.target.value)
  }

  const [inputPhone, setInputPhone] = useState('')

  const inputPhoneHandler = (e) => {
    console.log(e.target.value)
    setInputPhone(e.target.value)
  }




  const [realplayers, setRealPlayers] = useState([])
  const [handlePlayer, setHandlePlayer] = useRecoilState(handlePlayerState);

  ////////////  save players ////////////

  const playersHandler = (e) => {


    if (inputName && inputAge) {
      e.preventDefault();
      setPlayers([
        ...players, { Name: inputName, Age: inputAge, phone: inputPhone, complete: false, id: uuidv4(), edit: false }
      ])
      modalHandler(false)
      setInputName("");
      setInputAge("");
      setInputPhone("");

    }

    if (!inputName) {

      alert('please enter player Name')
    } else if (!inputAge) {

      alert('please enter Age')
    }





  }

  ///////////// Remove player  //////////

  const remeveHandler = (id) => {

    realplayers.map(() =>
      setRealPlayers(realplayers.filter((el) => el.id !== id.id))

    )




  }

  ///////////// back end : add player //////////

  const addPlayerDb = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/players", {
      method: "Post",
      body: JSON.stringify({
        inputName: inputName,
        inputAge: inputAge,
        inputPhone: inputPhone,
        username: session.user.name,
        email: session.user.email,
        userImg: session.user.image,
        userId: session.user.id,
        createdAt: new Date().toString(),

      }),
      headers: {
        "Content-Type": "application/json",
      },


    })
    const responseData = await response.json();


    console.log(responseData);
    setModal(false)
    setInputName("");
    setInputAge("");
    setInputPhone("");
    setUseSSRPlayerState(true);






  }


  ///////// use effect handleplayer ssr /////////

  const [useSSRPlayers, setUseSSRPlayerState] = useState(false);

  useEffect(() => {
    const fetchPLayers = async () => {
      const response = await fetch("/api/players?user="+session.user.email, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const responseData = await response.json();
      setRealPlayers(responseData);

      setUseSSRPlayerState(true);
    };

    fetchPLayers();
  }, [modal, handlePlayer]);

  

  

  //////////// remove player DB /////////





  return (
    <div className=" flex flex-col justify-between bg-[#000300] text-white   ">
      <div className=" w-[100%]  xl:h-[700px] bg-[#000300] rounded-2xl  p-3 h-[1300px] pt-5 hover:shadow-xl    ">

        <h3 className="text-center my-5">Create a Team</h3>
        <div className=" w-full h-96 grid sm:grid-cols-1 xl:grid-cols-3 gap-4">
          <div className='flex flex-col border text-left rounded-2xl py-2 '>
            <div className=" h-96 flex flex-col gap-3 px-2 overflow-auto   ">
              <div className='bg-[#00d8ff] inline-flex p-2  rounded-full w-12 '>
                <RiTeamFill size={30} />
              </div>
              <button className='flex border px-20 py-0 border-dashed justify-center w-[80%] mx-[10%]  ' onClick={modalHandler}><IoIosAddCircleOutline size={30} className='md:' />Add Player</button>

              <div className="text-center">
                <ul className=" flex flex-col gap-3">
                  {useSSRPlayers ?
                    realplayers.map((player) => (

                      <Player player={player} key={player._id}   />

                    ))
                    : players.map((player) => (

                      <Player player={player} key={player._id}   />

                    ))
                  }







                </ul>

              </div>


            </div>
          </div>


          {/* ////////////////////////// agenda ///////////////////////////////////////// */}




          <div className='lex flex-col border text-left rounded-2xl justify-around py-2 bg-white hover:shadow-xl  shadow-ms shadow-white'>
            <div>



              <div className="flex items-center justify-center p-12 ">

                <div className="mx-auto w-full max-w-[550px]">
                  <form method="POST">
                    <div className="-mx-3 flex ">

                      <div className="mb-5">
                        <label
                          for="team Name"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          The Name of the Team
                        </label>
                        <input
                          type="text"
                          name="team Name"
                          id="fName"
                          placeholder="enter a Name"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>


                    </div>
                    <div className="mb-5">
                      <label
                        for="guest"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        How many player your team have?
                      </label>
                      <input
                        type="number"
                        name="guest"
                        id="guest"
                        placeholder="5"
                        min="0"
                        className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>

                    <div className="-mx-3 flex flex-wrap">
                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <label
                            for="date"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            Date
                          </label>
                          <input
                            type="date"
                            name="date"
                            id="date"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div>
                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <label
                            for="time"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            Time
                          </label>
                          <input
                            type="time"
                            name="time"
                            id="time"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-5">
                      <label className="mb-3 block text-base font-medium text-[#07074D]">
                        Team Group Age
                      </label>
                      <div >
                        <select name="" id="" className="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
                          <option selected>Choose a Group Age</option>
                          <option value="SE">Senior (21 years old and +)</option>
                          <option value="JU">Junior (18, 19, 20 years old)</option>
                          <option value="CA">Cadet (16,17 years old)</option>
                          <option value="MI">Minime (14 years old and -)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <button
                        className="hover:shadow-form rounded-md bg-[#00d8ff] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='lex flex-col border-2 text-left rounded-2xl justify-around py-2  '>
            <div>
              <div className='bg-[#00d8ff] inline-flex p-2 rounded-full'>
                icon
              </div>
              <h3 className='text-xl font-bold py-4'>headling</h3>
              <p>
                text
              </p>
            </div>
          </div>
        </div>

      </div>


      <div className=" w-[100%] h-80  border text-left rounded-2xl py-5 px-8 my-5">
        <h3 className="text-center">Map Position</h3>
      </div>


      <div className=" w-[100%] h-80 bg-[#07dd47]  rounded-2xl my-2">
        <h3 className="text-center ">Find a team</h3>
      </div>


      {/* ////////////////// modal Player ////////////////////*/}

      <div className={modal ? " absolute mx-[23%] md:my-[15%] md:mx-[1%] py-8 text-black  " : "hidden"}>
        <div className="w-96 mx-auto bg-white  rounded-2xl shadow h-[450px] my-3 relative ">
          <button onClick={() => setModal(!modal)} className='top-0 right-2 absolute text-3xl text-black'>x</button>

          <div className="mx-16 py-4 px-8 text-black text-xl font-bold border-b border-grey-500">Player Information
          </div>

          <form name="Player Information" id="Player Information" action="">
            <div className="py-10 px-8">

              <div className="mb-4">

                <label className="block text-grey-darker text-sm font-bold mb-2">Player Name:</label>
                <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                  name="Player Name" value={inputName} id="Player Name" placeholder="Enter Player Name" onChange={inputNameHandler} required />

              </div>


              <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">Player Age</label>
                <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="number" maxLength="2"
                  name="Player Age" id="Player Age" value={inputAge} placeholder="Enter Player Age" onChange={inputAgeHandler} required />

              </div>

              <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">Phone Number</label>
                <input className=" border rounded w-full py-2 px-3 text-grey-darker" type="number"
                  name="Phone Number" id="Player Age" value={inputPhone} placeholder="Enter Phone Number" required onChange={inputPhoneHandler} />

              </div>


              <div className="">
                <button
                  className="mb-2 mx-10 rounded-full py-1 px-24 bg-gradient-to-r from-green-400 to-blue-500 " onClick={addPlayerDb}>
                  Save
                </button>
              </div>
            </div>
          </form>

        </div>

      </div>


      {/* <div>
        <div class="max-w-xs bg-gray-800 text-sm text-white rounded-md shadow-lg dark:bg-gray-900 mb-3 ml-3 " role="alert">
          <div class="flex p-4">
          Are sure you want to delete this Player!

            <div class="ml-auto">
              <button type="button" class="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-md text-white/[.5] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-600 transition-all text-sm dark:focus:ring-offset-gray-900 dark:focus:ring-gray-800">
                <span class="sr-only">Close</span>
                <svg class="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div> */}





    </div>
  )
}





  // // Get posts on SSR
  // const { db } = await connectToDatabase();
  // const posts = await db
  //   .collection("posts")
  //   .find()
  //   .sort({ timestamp: -1 })
  //   .toArray();

