
import Image from "next/image";

import { signOut, useSession } from "next-auth/react";

function Sidebar() {
    const { data: session } = useSession();

    return (
        <div className="space-y-2 min-w-max max-w-lg p-2">
            {/* Top */}
            <div className=" bg-green-200 w-[90%] mx-[5%] rounded-xl">
                <div className=" flex justify-center">
                    <img src={session?.user?.image} className=" rounded-full" />
                </div>
                <p className=" text-center">Welcome,{session?.user?.name} </p>
            </div>


            {/* Bottom */}
            <div className="hidden md:flex bg-white ] text-black/70 rounded-lg overflow-hidden flex-col space-y-2 pt-2.5 sticky top-20 border border-gray-300 ">
                <p>i am fine thanks</p>
            </div>
        </div>
    );
}

export default Sidebar;