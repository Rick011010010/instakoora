import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/router'

function Login() {

    const [register, setRegister] = useState(false)

    const registerHandler = () => {
        setRegister(!register)
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState(null)


    const signInUser = async (e) => {
        const router = useRouter()
        e.preventDefault()
        let options = { redirect: false, email, password }
        const res = await signIn("credentials", options)
        setMessage(null)
        if (res?.error) {
            setMessage(res.error)
        }
        return router.push("/home")
        

    }

    const signUpUser = async (e) => {

        e.preventDefault()
        setMessage(null)

        const res = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        let data = await res.json()
        if (data.message) {
            setMessage(data.message)
        }
        if (data.message == 'Registered successfully'){
            let options = { redirect: false, email, password}
            const res = await signIn("credentials", options)
            return router.push("/")
        }


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
                    <button className='bg-[#9CBA5C] border rounded-full text-white px-10 md:py-2 py-1 shadow-ms hover:shadow-xl active:scale-90 transition duration-150 md:w-56 ' onClick={(e)=>signInUser(e)}>Sigin</button>
                    <div className='flex justify-between mt-1 '>
                        <button className="md:pr-16 text-gray-200 md:text-zinc-700 lg:text-zinc-700 xl:text-gray-200   underline-offset-1 font-semibold">Recover password!</button>
                        <button className='text-gray-200 md:text-zinc-700 lg:text-zinc-700 xl:text-gray-200  font-semibold ' onClick={registerHandler}>Signup!</button>
                    </div>
                </div>




            </div>



            <div className={register ? " top-64 md:top-96 absolute 2xl:top-64  h-56 h-70  flex flex-col justify-around py-1 w-[100%] bg-gradient-to-r from-gray-300" : " hidden"}>

                <div className=" flex flex-row justify-around">
                    <label htmlFor="" className=" hidden xl:flex">Enter a Valid Email</label>
                    <input type="text" className=" rounded-2xl py-2 xl:hidden  " placeholder='Enter a Valid Email' value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="text" className=" rounded-2xl py-2 hidden xl:flex  " value={email} onChange={e => setEmail(e.target.value)} />

                </div>

                <div className=" flex flex-row justify-around">
                    <label htmlFor="" className=" pr-8 hidden xl:flex">Enter Password</label>
                    <input type="text" className=" rounded-2xl py-2 xl:hidden " placeholder='Enter Password' value={password} onChange={e => setPassword(e.target.value)} />
                    <input type="text" className=" rounded-2xl py-2 hidden xl:flex  " value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div className=" flex flex-row justify-around">
                    <label htmlFor="" className=" pr-6 xl:flex hidden">Repeat Password</label>
                    <input type="text" className=" rounded-2xl py-2 xl:hidden " placeholder='Repeat Password' value={password} onChange={e => setPassword(e.target.value)} />
                    <input type="text" className=" rounded-2xl py-2 hidden xl:flex  " value={password} onChange={e => setPassword(e.target.value)} />
                </div>

                <p className='text-red-400' >{message}</p>

                <button onClick={(e) => signUpUser(e)}> Register </button>
                


            </div>


        </div>


    )
}

export default Login

