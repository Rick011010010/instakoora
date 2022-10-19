import { getProviders, signIn, useSession, signOut, getSession } from "next-auth/react";
import { useState } from "react";
import Router from 'next/router'
import Image from "next/image";




export default function SignIn({ providers }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState(null)


    // const signInUser = async (e) => {

    //     e.preventDefault()

    //     let options = { redirect: false, email, password }
    //     const res = await signIn("credentials", options)

    //     setMessage(null)
    //     if (res?.error) {
    //         setMessage(res.error)
    //     }

       




    // }

    // const signUpUser = async (e) => {

    //     e.preventDefault()
    //     setMessage(null)

    //     const res = await fetch('/api/register', {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json',
    //         },
    //         body: JSON.stringify({ email, password }),
    //     })
    //     let data = await res.json()
    //     if (data.message) {
    //         setMessage(data.message)
    //     }
    //     if (data.message == 'Registered successfully') {
    //         let options = { redirect: false, email, password }
    //         const res = await signIn("credentials", options)
    //         return Router.push("/home")

    //     }


    // }
    






    return (
        
        <div className=" relative h-screen bg-[#000300]">

            




            {/* <div className=" top-64 md:top-96 absolute 2xl:top-0  h-56 h-70  flex flex-col justify-around py-1 w-[40%] mx-[20%] bg-gradient-to-r from-gray-300" >

                <div className=" flex flex-row justify-around">
                    <label htmlFor="" className=" hidden xl:flex">Enter a Valid Email</label>
                    <input type="text" className=" rounded-2xl py-2 xl:hidden  " placeholder='Enter a Valid Email' name='email'  value={email} required  onChange={e => setEmail(e.target.value)} />
                    <input type="text" className=" rounded-2xl py-2 hidden xl:flex  " value={email} name='email' required  onChange={e => setEmail(e.target.value)} />

                </div>

                <div className=" flex flex-row justify-around">
                    <label htmlFor="" className=" pr-8 hidden xl:flex">Enter Password</label>
                    <input type="text" className=" rounded-2xl py-2 xl:hidden " placeholder='Enter Password' id="password" required  value={password} name="password" onChange={e => setPassword(e.target.value)} />
                    <input type="text" className=" rounded-2xl py-2 hidden xl:flex  " name="password" id="password" value={password} required onChange={e => setPassword(e.target.value)} />
                </div>
                <div className=" flex flex-row justify-around">
                    <label htmlFor="" className=" pr-6 xl:flex hidden">Repeat Password</label>
                    <input type="text" className=" rounded-2xl py-2 xl:hidden " placeholder='Repeat Password' id="password" required  name="password" onChange={e => setPassword(e.target.value)} />
                    <input type="text" className=" rounded-2xl py-2 hidden xl:flex  "  name="password" id="password" required onChange={e => setPassword(e.target.value)} />
                </div>

                <p className='text-red-400' >{message}</p>

                <button onClick={(e) => signUpUser(e)}> Register </button>

                <button onClick={(e) => signInUser(e)}> sign in </button>



            </div> */}


            <div className="min-h-screen bg-[#000300] flex justify-center items-center">
                <div className="absolute w-60 h-60 rounded-xl bg-[#07dd47] -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
                </div>
                <div class="absolute w-48 h-48 rounded-xl bg-[#07dd47] -bottom-6 -right-10 transform rotate-12 hidden md:block">
                </div>
                <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                    <div>
                        <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Create An Account</h1>
                        <p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Create an
                            account to enjoy all the services without any ads for free!</p>
                    </div>

                     {/* providers */}
                    <div class="space-y-4">

                        <div className="  ">
                            {Object.values(providers).map((provider) => {
                                if (provider.name === "Credentials") {
                                    return
                                }
                                return (
                                    <div>

                                        <div key={provider.name} className=''>
                                            <button onClick={() => signIn(provider.id)} className=" border-2 w-[80%] mx-[10%] my-1 border-black rounded-full text-black px-5 md:py-2 py-1  shadow-ms hover:shadow-xl active:scale-90 transition duration-150  ">
                                                Sign in with {provider.name}
                                            </button>
                                        </div>
                                    </div>
                                )

                            })}

                        </div>



                    </div>

                </div>
                <div class="w-40 h-40 absolute bg-[#07dd47] rounded-full top-0 right-12 hidden md:block"></div>
                <div
                    class="w-20 h-40 absolute bg-[#07dd47] rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
                </div>
            </div>



        </div>
    )
}

export async function getServerSideProps(context) {

    
    const providers = await getProviders()
    return {
        props: { providers },
    }
} 