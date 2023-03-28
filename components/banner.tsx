import React from 'react'

export default function Banner() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 py-2 gap-5">
        <div className="flex flex-col space-y-3">
            <h1 className="text-5xl font-bold">Shahjalalk Daily Blogs</h1>
            <p className="text-lg font-medium">Welcome to Every Developer Features Blog in the Developer</p>
        </div>
        <p className="text-lg line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum modi, explicabo necessitatibus deserunt blanditiis perferendis ut dolorem delectus a. Ipsum!</p>
    </div>
  )
}
