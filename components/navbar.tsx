import Link from 'next/link'
import Image from 'next/image'
import {previewData} from 'next/headers'

export default function Navbar() {
  return (
    <div className="container my-3">
        <div className="flex items-center justify-between">
       <div className="flex items-center space-x-1 text-lg uppercase font-medium">
       <Image src="https://pbs.twimg.com/profile_images/1411199317013000197/kfesEZE9_400x400.jpg" alt="profile" width={50} height={50} className=" rounded-full border p-1" /> 
       <h3>Shahjalalk</h3>
       </div>
       <Link href="/" className="bg-black hidden md:flex text-[#faab0a] px-7 py-2 rounded-full">Sign up to University of Code</Link>
    </div>
    </div>
  )
}
