import Link from 'next/link'
import React from 'react'
import {AiOutlineRollback} from 'react-icons/ai'

export default function StudioNavbar(props : any) {
  return (
    <div className=" bg-[#070707]">
        <div className="flex items-center justify-between p-5">
            <Link href="/" className="flex items-center space-x-1 text-[#faab0a] text-xl">
                <AiOutlineRollback />
                Go to website
            </Link>
            <Link href="/" className="px-7 py-1 border border-[#faab0a] rounded-sm text-lg text-[#faab0a]">Checkout my gig on fiverr</Link>
        </div>
    <>{props.renderDefault()}</>
    </div>
  )
}
