import React from 'react'

function ProductForm() {
  return (
    <>
        <div className="flex flex-col justify-center items-center
          rounded-[10px] w-auto h-auto p-8 shadow-lg bg-[#1C1C1C]">

              <div>
                <h1 className='font-bold text-2xl text-[#F24D2B]'>Add Products</h1>
              </div>


              <div>
                  <form className="flex flex-col justify-center items-center">

                      <input
                        
                        type="file"
                        required
                        placeholder="Enter the Product Image"
                        className="block w-full bg-transparent border border-gray-400 rounded-[300px] px-5 py-2 mt-5 text-white placeholder-gray-300 focus:outline-none"
                    />

                     <input
                        
                        type="text"
                        required
                        placeholder="Enter the Product Name"
                        className="block w-full bg-transparent border border-gray-400 rounded-[300px] px-5 py-2 my-1 text-white placeholder-gray-300 focus:outline-none"
                    />
                     <input
                        
                        type="text"
                        required
                        placeholder="Enter the Price"
                        className="block w-full bg-transparent border border-gray-400 rounded-[300px] px-5 py-2 my-1 text-white placeholder-gray-300 focus:outline-none"
                    />
                    
                     <select className="block w-full bg-transparent border border-gray-400 rounded-[300px] px-5 py-2 my-1 text-white placeholder-gray-300 focus:outline-none" name="cars" id="cars">
                       <option value="volvo">Choose Category</option>
                       <option value="saab">Saab</option>
                       <option value="mercedes">Mercedes</option>
                       <option value="audi">Audi</option>
                     </select>

                     <textarea
                        
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