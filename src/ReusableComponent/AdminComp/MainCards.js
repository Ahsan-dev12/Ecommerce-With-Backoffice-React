import React from 'react'
import { Link } from 'react-router-dom';

function MainCards(props) {

  const { title, pic, link } = props; 
  return (
    <>
    <Link to={`/${link}`}>
      <div  className=' flex flex-col w-[300px] p-5  rounded-[10px] shadow-lg shadow-[#202020] bg-[#1C1C1C] cursor-pointer'>
        <div>
            <div className='flex gap-2'>
              <h1 className=' -mt-1 text-2xl font-bold'>{title}</h1>
            </div>
           
            <p className='text-sm py-2'>Click on the card to {title} quicly.........</p>
            <img src={pic} 
            
            className='w-[250px] h-[250px] border border-[#353535] rounded-md'
            
            />
            {/* <button className="bg-[#F24D2B] text-white py-2 px-5 w-full mt-5 rounded-full">{title}</button> */}
        </div>
      </div>
    </Link>
    </>
  )
}

export default MainCards 