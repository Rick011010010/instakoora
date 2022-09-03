
import Image from 'next/image'

function Header() {
    return (
        <header className=' w-[100%] h-20 bg-gradient-to-r from-white sticky top-0 z-50 drop-shadow-2xl px-2 '>


            <div className=''>

                <Image src="/LOGO INSTA KOORA.png " width={90} height={90} className=" cursor-pointer py-2"/>

            </div>

           



        </header>
    )
}

export default Header