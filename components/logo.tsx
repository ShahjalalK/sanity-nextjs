import Image from 'next/image'
import React from 'react'

export default function Logo(props : any) {
  return (
 
    <div className="flex items-center rounded-full overly-hidden mr-2"><Image src="https://pbs.twimg.com/profile_images/1411199317013000197/kfesEZE9_400x400.jpg" alt="profile" width={30} height={30} className="rounded-full" />    
    
    </div>
    
    
  )
}
