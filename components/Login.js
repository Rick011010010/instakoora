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
        if (data.message == 'Registered successfully') {
            let options = { redirect: false, email, password }
            const res = await signIn("credentials", options)
            return router.push("/")
        }


    }


    return (


        <div className='hidden md:flex md:mr-16 md:top-50 md:absolute w-[100px] h-64 top-56 md:right-0    md:w-[30%]    md:rounded-2xl    '>
            {/* <!-- component --> */}
            <div class="bg-no-repeat bg-cover bg-center  " >
                <div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center">

                    <div class="flex justify-center self-center absolute top-10 h-[500px] md:w-[400px]   z-0 bg-gradient-to-b   inset-0">
                        <div class="p-12 bg-white mx-auto opacity-40 rounded-2xl  ">
                            <div class="mb-4">
                                <h3 class="font-semibold text-2xl text-gray-800">Sign In </h3>
                                <p class="text-gray-500">Please sign in to your account.</p>
                            </div>
                            <div class="space-y-5">
                                <div class="space-y-2">
                                    <label class="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                                    <input class=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="" placeholder="mail@gmail.com" />
                                </div>
                                <div class="space-y-2">
                                    <label class="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                        Password
                                    </label>
                                    <input class="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="" placeholder="Enter your password" />
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center">
                                        <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                                        <label for="remember_me" class="ml-2 block text-sm text-gray-800">
                                            Remember me
                                        </label>
                                    </div>
                                    <div class="text-sm">
                                        <a href="#" class="text-green-400 hover:text-green-500">
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" class="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                        Sign in
                                    </button>
                                    <button className='text-gray-900 absolute    font-semibold right-14 ' onClick={registerHandler}>Signup!</button>
                                </div>
                            </div>
                            <div class="pt-5 text-center text-gray-400 text-xs">
                                <span>
                                    Copyright © 2021-2022
                                    <a href="https://codepen.io/uidesignhub" rel="" target="_blank" title="Ajimon" class="text-green hover:text-green-500 ">AJI</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className={register ? " top-64 md:top-96 absolute 2xl:top-64  h-56 h-70  flex flex-col justify-around py-1 w-[100%] bg-gradient-to-r from-gray-300 rounded-2xl" : " hidden"}>

                <div class={"py-12 px-12 bg-white rounded-2xl shadow-xl z-20 relative"}>
                    <div>
                        <button onClick={() => registerHandler()}><p className=' absolute right-1 top-0 text-2xl '>X</p></button>
                        <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Create An Account</h1>
                        <p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Create an
                            account to enjoy all the services without any ads for free!</p>
                    </div>
                    <div class="space-y-4">
                        <input type="text" placeholder="Email Addres" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                        <input type="text" placeholder="Password" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                    </div>
                    <div class="text-center mt-6">
                        <button class="py-3 w-64 text-xl text-white bg-green-400 rounded-2xl">Create Account</button>
                        <p class="mt-4 text-sm">Already Have An Account? <span class="underline cursor-pointer"> Sign In</span>
                        </p>
                    </div>
                </div>












                {/* <div className=" flex flex-row justify-around">
                    <label htmlFor="" className=" hidden xl:flex">Enter a Valid Email</label>
                    <input type="email" className=" rounded-2xl py-2 xl:hidden  " placeholder='Enter a Valid Email' value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="email" className=" rounded-2xl py-2 hidden xl:flex  " value={email} onChange={e => setEmail(e.target.value)} />
                    
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

            <button onClick={(e) => signUpUser(e)}> Register </button> */}



            </div>


        </div>









    )
}

export default Login

