import React, { useContext, useEffect, useState } from "react";
import { APIsDataContext } from "../../Context/ProviderAPIsData";
import { PostAPIs } from '../../Services/PostAPI';

function ProductForm() {

  // variables
  const {APIcategories, APIproducts} = useContext(APIsDataContext);
  const [productList, setProductList] = useState({});
  const[addProduct, setAddProduct] = useState({
    name : "",
    price : "",
    cateOption : [],
    des : "",
  });


  // on change for all inputs
  
  function onChng(e){
    const {name,value} = e.target;

    setAddProduct(prev =>({
      ...prev,
      [name] : value
    }))

  }

  //Form Submit Function
  async function handlePrdtForm(e){
    e.preventDefault();

    const productData = {
      id: Date.now(),
      name: addProduct.name,
      price: addProduct.price,
      categoryName: addProduct.cateOption,
      des: addProduct.des,
    };

    const result = await PostAPIs.productPost(productData);
    console.log(result);
    console.log("addProduct", addProduct);
    window.location.reload();

    setAddProduct({
      name: "",
      price: "",
      cateOption: [],
      des: "",
      image: null
   });

  }

  
  return (
    <>
        <div className="flex flex-col justify-center items-center
          rounded-[10px] w-auto h-auto p-8 shadow-lg bg-[#2E2929]">

              <div>
                <h1 className='font-bold text-2xl text-[#F24D2B]'>Add Products</h1>
              </div>

              {/* Add Product Form */}
              <div>
                  <form onSubmit={handlePrdtForm} className="flex flex-col justify-center items-center">

                     <input   // Product name Input
                        
                        name='name'
                        value={addProduct.name}
                        onChange={onChng}
                        type="text"
                        required
                        placeholder="Enter the Product Name"
                        className="block w-full bg-transparent border border-gray-400 rounded-[300px] px-5 py-2 my-1  mt-5  text-white placeholder-gray-300 focus:outline-none"
                    />
                     <input  // Price  input
                        
                        name='price'
                        value={addProduct.price}
                        onChange={onChng}
                        type="text"
                        required
                        placeholder="Enter the Price"
                        className="block w-full bg-transparent border border-gray-400 rounded-[300px] px-5 py-2 mt-1 text-white placeholder-gray-300 focus:outline-none"
                    />
                    
                     {/* Select Categories Option */}
                     <select className="block w-full 
                      bg-transparent border border-gray-400
                      rounded-[300px] px-5 py-2 my-1
                    text-white
                    placeholder-gray-300
                      focus:outline-none"

                      name='cateOption'
                      onChange={onChng}
                      >

                      <option className='options'>Choose Category</option> 
                        {APIcategories && APIcategories.map((cate) => (
                          <option  className='options' key={cate.id} value={cate.category}>
                              {cate.category}
                          </option>
                         ))}
                     </select>

                     <textarea  // Description Input
                        
                        name='des'
                        value={addProduct.des}
                        onChange={onChng}
                        type="text"
                        required
                        placeholder="Write the Description"
                        className="block w-full bg-transparent border border-gray-400 h-32 rounded-[10px] px-5 py-2 my-1 text-white placeholder-gray-300 focus:outline-none"
                    />

                    <button type="submit"
                     className="bg-[#F24D2B] text-white py-2 px-5 my-5 rounded-full w-full">
                      Add Product
                    </button>
                  </form>
              </div>
         </div>


    </>
  )
}

export default ProductForm