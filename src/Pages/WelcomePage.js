import React from 'react'
import { Link } from 'react-router-dom'

function WelcomePage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
       <div className='flex flex-col items-center justify-center h-screen'>

        <div>
          <h1 className='text-6xl font-black'>Welcome To Our <span className=' text-[#f24d2b]'>E-commerce</span> Hub</h1>
        </div>

        <div>
          <Link to="/home">
          <button className="bg-[#f24d2b] text-white py-2 px-5  mx-5 my-5 rounded-full">User View</button>
          </Link>

          <Link to="/login">
          <button className="bg-[#F24D2B] text-white py-2 px-5  mx-5 my-5 rounded-full">Admin View</button>
          </Link>
        </div>
       </div>
    </div>
  )
}

export default WelcomePage