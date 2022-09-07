

function Login() {


    return (
        <div className=' absolute w-[70%]   h-60 mi top-1/4 md:right-0 md:top-72  md:w-[30%] md:px-10  md:rounded-2xl md:bg-gradient-to-r md:from-white md:to-transparent md:hover:shadow-2xl md:block'>
            <div className='flex flex-col justify-around  h-60 py-5 '>

                <div className='flex flex-col justify-center '>
                    <label htmlFor="">Username</label>
                    <input type="text" className=' rounded-lg shadow-md md:py-3 py-2' />

                    <label htmlFor="">Password</label>
                    <input type="password" className=' rounded-lg shadow-md md:py-3 py-2' />

                </div>

                <div className='flex flex-col md:items-center md:mt-5 mt-7'>
                    <button className='bg-green-400 border rounded-full text-white px-10 md:py-2 py-1 shadow-ms hover:shadow-xl active:scale-90 transition duration-150 md:w-72 '>Sigin</button>
                    <div className='flex justify-between mt-1 '>
                        <button className="md:pr-16">Recover password!</button>
                        <button className=''>Signup!</button>
                    </div>
                </div>


            </div>

            
        </div>


    )
}

export default Login