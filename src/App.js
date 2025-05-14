import { Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './Pages/WelcomePage.js'
import Home from './Pages/UserPages/Home.js'
import Dashboard from './Pages/AdminPages/Dashboard.js';
import Login from './Pages/AdminPages/Login.js';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path='/home' element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
    </>
  );
}

export default App;
