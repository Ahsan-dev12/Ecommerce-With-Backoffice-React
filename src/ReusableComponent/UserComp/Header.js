import React from 'react'
import { Link } from 'react-router-dom'
import { BsCart4 } from "react-icons/bs";

function Header() {
  return (
    <>
      <div className='flex justify-between items-center border-b border-[#F24D2B] p-5'>
        <div>
          <Link to="/home">
          <h1 className='text-2xl font-bold text-[#F24D2B]'>Logo</h1>
          </Link>
        </div>
  
        <div className='flex gap-10'>
          <Link to="/allCategories">
            <p>Categories</p>
          </Link>
          <Link to="/allProduct">
            <p>Products</p>
          </Link>
          <Link>
            <p>About</p>
          </Link>
          <Link>
            <p>Contact</p>
          </Link>
        </div>

        <div className='flex '>
          <BsCart4 className='text-2xl'/> <span className='text-[#F24D2B] text-sm'>( 0 )</span> 
        </div>
      </div>
    </>
  )
}

export default Header