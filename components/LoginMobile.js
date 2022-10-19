import React from 'react'
import { getProviders, signIn, useSession, signOut } from "next-auth/react";

function LoginMobile() {
    return (
        <div className="  absolute flex flex-col top-[200px] gap-2 mt-6 text-bold  py-4">
            <button className=' bg-transparent border-2 rounded-full text-white px-14 md:py-0 py-2 shadow-ms hover:shadow-xl active:scale-90 transition duration-150 md:w-60 border-white '
                onClick={() => signIn()}>Create an Account</button>

            <button className=' bg-[#11D142] border-2 rounded-full text-white px-14 md:py-2 py-2  shadow-ms hover:shadow-xl active:scale-90 transition duration-150 md:w-60 border-white '
                onClick={() => signIn()}>Connexion</button>


        </div>
    )
}

export default LoginMobile



export async function getServerSideProps(context) {
    const providers = await getProviders();
  
    return {
      props: {
        providers,
      },
    };
  }