import React, { useContext, useEffect, useState } from "react";
import QuantityCards from '../../ReusableComponent/AdminComp/QuantityCards'
import { BiSolidCategoryAlt } from "react-icons/bi";
import MainCards from '../../ReusableComponent/AdminComp/MainCards';
import { TbCategory } from "react-icons/tb";
import { BsCart4 } from "react-icons/bs";
import { BsBorderStyle } from "react-icons/bs";
import { GoListUnordered } from "react-icons/go";
import { RiHome4Line } from "react-icons/ri";
import { MdOutlineDonutSmall } from "react-icons/md";
import { Link } from 'react-router-dom';
import { APIsDataContext } from '../../Context/ProviderAPIsData';

function Dashboard() {
  const {APIcategories, APIproducts} = useContext(APIsDataContext);
  return (
    <div className='flex flex-col px-10 py-5 gap-8 '>
       <div className=''>
          <p className='font-light text-sm'>Hi, Welcome 👋</p>
          <h1 className='text-4xl font-black text-[#F24D2B]'>Main Dashboard</h1>
       </div>

       <div className='flex justify-between' >
         <QuantityCards icon={TbCategory} title='Categories' total="Total" value={APIcategories.length}/>
         <QuantityCards icon={BsCart4} title='Products' total="Total" value={APIproducts.length}/>
         <QuantityCards icon={MdOutlineDonutSmall} title='Orders' total="Total" value="012"/>

         <QuantityCards icon={BsBorderStyle} title='Producr-list' total="click and view" value="" link="inputForm"/>
         <QuantityCards icon={GoListUnordered} title='Order-list' total="click and view" value=""/>
         <QuantityCards icon={RiHome4Line} title='Website' total="click and view" value="" link="home"/>
       </div>
       
       <div className='flex justify-between'>
        <MainCards title='Add Category' pic='https://images.unsplash.com/photo-1637780852590-8ab27248ec41?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' link='inputForm'/>

         <MainCards title='Add Product' pic='https://images.unsplash.com/photo-1637868796503-9191d8ae78be?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' link="inputForm"/>
           
         <MainCards title='View Item List' pic='https://images.unsplash.com/photo-1634544333207-7c5e5fc748d9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' link='inputForm'/>
         
          <MainCards title='View Order List' pic='https://images.unsplash.com/photo-1728404050703-42fe0cc01ff5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

       </div>

       <div className='rounded-[10px] py-5 text-xl text-center shadow-lg shadow-[#202020] bg-[#2E2929] font-bold text-[#F24D2B] cursor-pointer'>
        <Link to='/home'>
         <p>Click and see the User Website </p>
         </Link>
       </div>
    </div>
  )
}

export default Dashboard