import { useState } from 'react';

function Login() {

    const [register, setRegister] = useState(false)

    const registerHandler = () => {
        setRegister(!register)
    }


    return (
        <div className=' md:mr-16 md:top-20 absolute w-[70%] h-64 top-1/4 md:right-0   md:w-[30%]   md:rounded-2xl   md:block'>
            <div className='flex flex-col justify-around  h-56 md:h-96 2xl:h-56  md:py-20 w-[100%] '>

                <div className='flex flex-col 2xl:flex-row justify-between h-32 md:h-56 w-auto  '>
                    <label htmlFor=""></label>
                    <input type="text" placeholder="Username" className=' rounded-2xl shadow-md md:py-2 md:px-3 py-2 px-2 md:hover:shadow-2xl' />

                    <label htmlFor=""></label>
                    <input type="password" placeholder="Password" className=' rounded-2xl  md:py-2 md:px-3 py-2 md:hover:shadow-2xl shadow-xl' />

                </div>

                <div className='flex flex-col md:items-center md:mt-5 mt-7'>
                    <button className='bg-[#9CBA5C] border rounded-full text-white px-10 md:py-2 py-1 shadow-ms hover:shadow-xl active:scale-90 transition duration-150 md:w-56 '>Sigin</button>
                    <div className='flex justify-between mt-1 '>
                        <button className="md:pr-16 text-gray-200 md:text-zinc-700 lg:text-zinc-700 xl:text-gray-200   underline-offset-1 font-semibold">Recover password!</button>
                        <button className='text-gray-200 md:text-zinc-700 lg:text-zinc-700 xl:text-gray-200  font-semibold ' onClick={registerHandler}>Signup!</button>
                    </div>
                </div>

<<<<<<< HEAD
                <div className={register? " top-72 md:top-96 absolute 2xl:top-64 2xl:h-56 lg:h-70   md:flex md:flex-col md:justify-around py-1 w-[100%] bg-gradient-to-r from-gray-300": " hidden"}>
=======
                <div className={register? "  2xl:absolute 2xl:top-64 2xl:h-56  2xl:flex 2xl:flex-col 2xl:justify-around py-1 w-[100%] bg-gradient-to-r from-gray-300": " hidden"}>
>>>>>>> a3d1dcd5b4e5c36aade7748fa34d981d083ba47e
                    <div className=" flex flex-row justify-around">
                        <label htmlFor="" className="">Enter a Valid Email</label>
                        <input type="text" className=" rounded-2xl py-2 " />

                    </div>

                    <div className=" flex flex-row justify-around">
                        <label htmlFor="" className=" pr-8">Enter Password</label>
                        <input type="password" className=" rounded-2xl py-2" />
                    </div>
                    <div className=" flex flex-row justify-around">
                        <label htmlFor="" className=" pr-6">Repeat Password</label>
                        <input type="password" className=" rounded-2xl py-2" />
                    </div>


                </div>


            </div>


        </div>


    )
}

export default Login

