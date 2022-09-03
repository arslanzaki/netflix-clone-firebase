import React from 'react'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
        <h1 className="text-4xl font-bold text-red-500 cursor-pointer">NETFLIX</h1>
        <div>
            <button className="text-white mr-4">Sign In</button>
            <button className="bg-red-500 px-6 py-2 rounded text-white">Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar