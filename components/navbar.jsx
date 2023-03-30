import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import '../styles/globals.css'

export default function Navbar() {
  return (
    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 items-start md:items-center justify-between container">
        <Link href="/" className="flex items-center gap-x-1">
            <Image src="https://pbs.twimg.com/profile_images/1411199317013000197/kfesEZE9_400x400.jpg" width={50} height={50} alt='photo' className="rounded-full border p-1" />
            <p className="font-bold">ShahjalalK</p>
        </Link>
        <Link href="/" className="border font-bold border-[#faab0a] mt-2 px-7 py-1 text-[#faab0a] rounded capitalize">Checkout my gig on fiverr</Link>
    </div>
  )
}
