

function Login() {


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
                        <button className='text-gray-200 md:text-zinc-700 lg:text-zinc-700 xl:text-gray-200  font-semibold '>Signup!</button>
                    </div>
                </div>


            </div>

            
        </div>


    )
}

export default Login

