import { getProviders, signIn, useSession, signOut, getSession } from "next-auth/react";
import { useState } from "react";
import Router from 'next/router'




export default function SignIn({ providers }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState(null)


    const signInUser = async (e) => {
        
        e.preventDefault()
       
        let options = { redirect: false, email, password }
        const res = await signIn("credentials", options)
       
        setMessage(null)
        if (res?.error) {
            setMessage(res.error)
        }
        
        



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
            return Router.push("/home")
            
        }


    }






    return (
        <>


            <div className=" top-64 md:top-96 absolute 2xl:top-64  h-56 h-70  flex flex-col justify-around py-1 w-[100%] bg-gradient-to-r from-gray-300" >

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
                    <input type="text" className=" rounded-2xl py-2 xl:hidden " placeholder='Repeat Password' id="password" required  value={password} name="password" onChange={e => setPassword(e.target.value)} />
                    <input type="text" className=" rounded-2xl py-2 hidden xl:flex  " value={password} name="password" id="password" required onChange={e => setPassword(e.target.value)} />
                </div>

                <p className='text-red-400' >{message}</p>

                <button onClick={(e) => signUpUser(e)}> Register </button>

                <button onClick={(e) => signInUser(e)}> sign in </button>



            </div>


            {Object.values(providers).map((provider) => {
                if (provider.name === "Credentials") {
                    return
                }
                return (
                    <div key={provider.name}>
                        <button onClick={() => signIn(provider.id)} className=" p-5 bg-green-200">
                            Sign in with {provider.name}
                        </button>
                    </div>
                )

            })}
        </>
    )
}

export async function getServerSideProps(context) {

    const { req } = context;
    const session = await getSession({ req })
    if (session) {

        return {
            redirect: {
                destination: '/home'
            }

        }



    }



    const providers = await getProviders()
    return {
        props: { providers },
    }
} 