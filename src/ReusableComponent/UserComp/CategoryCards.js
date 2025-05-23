import React, { useContext } from 'react'
import { APIsDataContext } from '../../Context/ProviderAPIsData';
import { BiCategory } from "react-icons/bi";

function CategoryCards() {
const {APIcategories} = useContext(APIsDataContext)
  return (
    <div className='h-[280px] flex flex-col justify-center gap-10'>
    
     <div className="font-black text-2xl text-[#F24D2B] text-center">Top Categories</div>
      <div className='flex justify-between mx-20 items-center'>
            {APIcategories.slice(0, 4).map((cate)=>(
                <div className='flex flex-col justify-center items-center bg-[#2E2929] border-r-[3px] border-[#F24D2B] rounded-xl p-4 cursor-pointer shadow-lg shadow-[#202020]'>
                <BiCategory className='text-2xl' />
                <p className='py-2 '>{cate.category}</p>
                <p className='text-xs'>Lorem Ipsum is simple dummy text ...</p>
                </div>
            ))}
      </div>
    </div>
  )
}

export default CategoryCards