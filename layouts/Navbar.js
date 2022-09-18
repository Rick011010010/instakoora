import {useState} from 'react';
import Image from 'next/image'





function Navbar() {
    return (
        <header className='absolute w-[80%] md:w-[100%] h-4   top-0   px-2 z-10'>


            <div className=' w-screen flex justify-center md:justify-start '>

                <Image src="/LOGO INSSSSS.png" width={295} height={190} className=" cursor-pointer "/>
                

            </div>

            

           



        </header>
    )
}

export default Navbar