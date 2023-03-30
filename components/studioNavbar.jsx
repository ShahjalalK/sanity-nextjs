import Link from 'next/link'
import React from 'react'
import {AiOutlineRollback} from 'react-icons/ai'

export default function StudioNavbar(props) {
  return (
    <div className="bg-gray-900">
        <div className="flex justify-between items-center p-3">
            <Link href="/" className="flex items-center gap-1 text-[#faab0a]"><AiOutlineRollback /> Go to Website</Link>
            <Link href="/" className="hidden md:flex border border-[#faab0a] text-[#faab0a] rounded px-7 py-1">Check out my gigs on fiverr</Link>
        </div>

        <>{props.renderDefault()}</>
    </div>
  )
}
