import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <>
    <div className="relative h-[600px] flex items-center justify-center rounded-full">
  
        {/* Background Image with Opacity */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 z-0"
           style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1701056035604-6a7dd0efa0d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
            }}>
        </div>

         {/* Content on top */}
        <div className="relative z-10 flex flex-col items-center text-white text-center">
          <h1 className="text-6xl font-black">Welcome To <span className="text-[#f24d2b]">Store</span></h1>
          <p className="pt-6 w-[800px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s.
          </p>
          <Link to="/allProduct">
           <button className="bg-[#f24d2b] text-white py-2 px-5 mx-5 my-5 rounded-full">Shop All</button>
          </Link>
        </div>
    </div>

    </>
  )
}

export default HeroSection