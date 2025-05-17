import { Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './Pages/WelcomePage.js'
import Home from './Pages/UserPages/Home.js'
import Dashboard from './Pages/AdminPages/Dashboard.js';
import Login from './Pages/AdminPages/Login.js';
import QuantityCards from './ReusableComponent/AdminComp/QuantityCards.js';
import AddForm from './Pages/AdminPages/AddForm.js';


import MainCards from './ReusableComponent/AdminComp/MainCards.js';
function App() {
  return (
    <>
      {/* <AddForm/> */}
      {/* <MainCards /> */}
      {<Routes>
        <Route path="/" element={<Welcome />} />
        <Route path='/home' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inputForm" element={<AddForm />} />
   
      </Routes>}
    </>
  );
}

export default App;
