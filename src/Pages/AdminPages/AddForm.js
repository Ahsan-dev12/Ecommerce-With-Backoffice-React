import React from 'react'
import CategoryForm from '../../ReusableComponent/AdminComp/CategoryForm'
import ProductForm from '../../ReusableComponent/AdminComp/ProductForm'
import AddedProductList from '../../ReusableComponent/AdminComp/AddedProductList'

function AddForm() {
  return (
    <>
    <div className='flex justify-center gap-40 p-8'>
      <div>
        <CategoryForm />
      </div>

      <div>
        <ProductForm />
      </div>
    </div>

    
     <div className='m-8'>
              

    <AddedProductList />










      </div>
  </>      
  )
}

export default AddForm