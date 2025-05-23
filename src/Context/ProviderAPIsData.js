import React, { createContext, useEffect, useState } from "react";
import { GetAPIs } from "../Services/GetAPI";

const APIsDataContext = createContext();

function ProviderAPIsData({children}) {

 const [APIcategories, setAPICategories] = useState([]);
 const [APIproducts, setAPIProducts] = useState([]);
 const [oders, Orders] = useState();
 
 // Function to Store Categories Gobally 
 useEffect(() => {
      async function fetchCategories(){

        const result = await GetAPIs.getCate();
        if(result){
            setAPICategories(result);
        }

      }
       
    fetchCategories() 
    }, [])
    
 
 // Function to Store Products Gobally
 useEffect(() => {
  async function fetchProducts(){

    const result = await GetAPIs.getProduct();
    if(result){
      setAPIProducts(result);
    }
  }
 
  fetchProducts()
 }, [])
 
 



 // Function to Store User's Orders Gobally
 async function fetchOrders (){}
  return(

    <APIsDataContext.Provider value={{APIcategories, APIproducts}}>
      {children}
    </APIsDataContext.Provider>
  ) 
}

export { ProviderAPIsData, APIsDataContext };
