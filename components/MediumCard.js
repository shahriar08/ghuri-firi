import Image from "next/image"

export default function MediumCard({img,title}) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
        <div className="relative h-80 w-80">
            <Image className="rounded-xl" alt="" src={img} layout="fill"/>
        </div>
        <h2>{title}</h2>
    </div>
  )
}
