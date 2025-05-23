// npx json-server --watch db.json --port 500

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './Pages/WelcomePage.js'
import Home from './Pages/UserPages/Home.js'
import Categories from './Pages/UserPages/Categories.js'
import Product from './Pages/UserPages/Product.js'
import Cart from './Pages/UserPages/Cart.js'
import Dashboard from './Pages/AdminPages/Dashboard.js';
import Login from './Pages/AdminPages/Login.js';
import QuantityCards from './ReusableComponent/AdminComp/QuantityCards.js';
import AddForm from './Pages/AdminPages/AddForm.js';
import MainCards from './ReusableComponent/AdminComp/MainCards.js';
import { ProviderAPIsData } from './Context/ProviderAPIsData.js';

function App() {
  return (
    <>
      
      {/* <AddForm/> */}
      {/* <MainCards /> */}
      <ProviderAPIsData>
       <Routes>
         <Route path="/" element={<Welcome />} />
         <Route path='/home' element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/inputForm" element={<AddForm />} />
         <Route path="/allCategories" element={<Categories />} />
         <Route path="/allProduct" element={<Product />} />
         <Route path="/cart" element={<Cart />} />
         
       </Routes>
      </ProviderAPIsData>
    </>
  );
}

export default App;
