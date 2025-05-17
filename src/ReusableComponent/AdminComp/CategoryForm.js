import React from 'react'

function CategoryForm() {
  return (
    <>
       <div className="flex flex-col justify-center items-center
          rounded-[10px] w-auto h-auto p-8 shadow-lg bg-[#1C1C1C]">

              <div>
                <h1 className='font-bold text-2xl text-[#F24D2B]'>Add Categories</h1>
              </div>


              <div>
                  <form className="flex flex-col justify-center items-center">
                     <input
                        
                       
                        name='email'
                        type="text"
                        required
                        placeholder="Enter the Category"
                        className="block w-full bg-transparent border border-gray-400 rounded-[300px] px-5 py-2 mt-5 text-white placeholder-gray-300 focus:outline-none"
                    />
                  
                    <button type="submit"
                     className="bg-[#F24D2B] text-white py-2 px-5 my-5 rounded-full w-full">
                      Add Category
                    </button>

                  </form>
              </div>
        </div>
    </>
  )
}

export default CategoryForm