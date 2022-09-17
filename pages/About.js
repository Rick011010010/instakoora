import { getProviders, signIn, useSession, signOut } from "next-auth/react";

function About() {

 
  return (
    <div className=" hidden md:absolute md:w-[40%] md:px-10 md:top-72 md:flex md:flex-col md:justify-around md:h-60 md:py-10'">
      <h1 className=" lg:text-4xl md:text-2xl font-Merriweather tracking-wide py-7">Are you ready to take your football experience to another level.</h1>
      <p className=" tracking-wide text-xl font-opensans ">join Us and you would be able to create your own team and challenge the other teams near to you, By creating an accound you would be able to send or receiving requests from other players or teams to join them base on your location and your schedule.</p>
      <div className="flex justify-center mt-6 text-bold  py-4"><button className='bg-[#6997C6] border-2 rounded-full text-white px-10 md:py-2 py-1 shadow-ms hover:shadow-xl active:scale-90 transition duration-150 md:w-60 border-white '
        onClick={() => signIn()}>Signup!</button></div>

      </div>
  )
}

export default About


export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}