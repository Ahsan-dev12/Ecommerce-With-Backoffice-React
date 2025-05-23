import { useEffect, useState } from "react";
const baseUrl = "http://localhost:500";

const PostAPIs = {

  // post category function
  catePost: async (categoryData) => {

    try {
      const res = await fetch(`${baseUrl}/categories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categoryData),
      });
      
      // check response status
      if(!res.ok){
        throw new Error("Failed to post category");
      }else{

        const result = await res.json();
        return result;
      }


    } catch (error) {
      console.log("Error = ", error);
      return null;
    }

  },

  // post product function

  productPost : async(productData) =>{
     
    try{    const res = await fetch(`${baseUrl}/products`, {
      method : "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData)
    })
      // check response status
    if(!res.ok){
      throw new Error("Failed to post category");
    }else{
      const result = await res.json();
      return result;
      }
  }

  catch(error){
    console.log('Error = ', error);
  }

}





};

export { PostAPIs };
