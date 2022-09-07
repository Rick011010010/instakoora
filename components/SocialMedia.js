import Image from "next/image"

function SocialMedia() {
  return (
    <div className="absolute flex bottom-0 right-0 "> 
        <button className=' px-1 '><Image src='/Instagram_icon.png.webp' width={30} height={30} /></button>
        <button className=' px-1 '><Image src='/facebook.png'  width={30} height={30} /></button>
        <button className=' px-1 '><Image src='/YouTube_full-color_icon_(2017).svg.png' width={30} height={30}/></button>
    </div>
  )
}

export default SocialMedia