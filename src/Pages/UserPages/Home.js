import React from 'react'
import Header from '../../ReusableComponent/UserComp/Header'
import FooterComp from '../../ReusableComponent/UserComp/FooterComp'
import HeroSection from '../../ReusableComponent/UserComp/HeroSection'
import CategoryCards from '../../ReusableComponent/UserComp/CategoryCards'
import ProductCards from '../../ReusableComponent/UserComp/ProductCards'


function Home() {
  return (
    <>
       <Header/>
       <HeroSection />
       <CategoryCards />
       <ProductCards />
       <FooterComp/>
    </>
  )
}

export default Home