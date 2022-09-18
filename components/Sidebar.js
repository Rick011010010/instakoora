
import Image from "next/image";

import { signOut, useSession } from "next-auth/react";

function Sidebar() {
    const { data: session } = useSession();

    return (
        <div className="space-y-2 min-w-max max-w-2xl p-2 ">
            {/* Top */}
            <div className=" bg-green-200 w-[100%] rounded-xl h-80">
                <div className=" flex justify-center">
                    <img src={session?.user?.image} className=" rounded-full" />
                </div>
                <p className=" text-center text-black">Welcome,{session?.user?.name} </p>
            </div>


            {/* Bottom */}
            <div className="hidden md:flex bg-white ] text-black/70 rounded-lg overflow-hidden flex-col space-y-2 pt-2.5 h-60 sticky top-20 border border-gray-300 ">
                <p className=" text-center text-black"> xx xxx xxx </p>
            </div>
        </div>
    );
}

export default Sidebar;