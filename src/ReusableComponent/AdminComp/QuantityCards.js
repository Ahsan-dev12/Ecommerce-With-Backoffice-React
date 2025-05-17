import React from 'react'
import { Link } from 'react-router-dom';

function QuantityCards(props) {
    const {icon:Icon, title, total, value, link } = props;
  return (
    <>
      <Link to={`/${link}`}>
         <div className='w-[200px] p-3 rounded-[10px] shadow-lg shadow-[#202020] bg-[#1C1C1C]'>
            <div className='flex gap-2'>
                <Icon className='text-[#F24D2B]'/>
                <p className='-mt-1 font-bold text-[#F24D2B]'>{title}</p>
            </div>

            <div className='flex justify-between pt-1'>
                <p className='text-sm text-[#5d5d5d]'>{total}</p>
                <h2>{value}</h2>
            </div>
         </div> 
    </Link>
    </>
  )
}

export default QuantityCards