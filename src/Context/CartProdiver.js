import React, { createContext } from 'react'

const CartContext = createContext();
function CartProdiver({children}) {
    // products add on cart
    async function addCart() {
        
    }
    
    // increase the quantity of specific product in cart
    async function increaseQuantity() {
        
    }
    
    // decrease the quantity of specific product in cart
    async function decreaseQuantity() {
        
    }
    
    // delete specific product from cart
    async function deleteItem() {
        
    }
    
    // remove all products from cart
    async function removeAll() {
        
    }
    
    // subtotal for specific product through quantity
    async function subTotal() {
        
    }

    // total bill 
    async function total() {
        
    }
    
  return (
    <>
      <CartContext.Provider value={{}}>
          {children}
      </CartContext.Provider>
    </>
  )
}

export {CartProdiver,CartContext}