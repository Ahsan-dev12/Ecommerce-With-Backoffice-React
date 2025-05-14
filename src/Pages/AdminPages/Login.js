import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email : '',
    password: ""
  });

  function setValues(e){
    
    const {name, value} = e.target;
    setLoginData(prev => ({
      ...prev,
      [name] : value
    }))
  }

  function handleSubmit(e){
      
    e.preventDefault();

    if(loginData.email === "admin@gmail.com" && loginData.password === "admin123"){
           
       navigate("/dashboard")
    }
    else{
        
      alert("invaild email or password");
    }

    console.log(loginData);
    setLoginData({
      email : '',
      password : ''
    });

  }

  return (
    <>
       <div className="flex justify-center items-center h-screen">
         <div className="flex flex-col justify-center items-center
          rounded-[10px] w-auto h-auto p-8 shadow-lg bg-[#1C1C1C]">

              <div>
                <h1>Only for <span className='font-bold text-2xl text-[#F24D2B]'>Admin</span></h1>
              </div>


              <div>
                  <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                     <input
                        
                        onChange={setValues}
                        value={loginData.email}
                        name='email'
                        type="text"
                        required
                        placeholder="Enter your email"
                        className="block w-full bg-transparent border border-gray-400 rounded-[300px] px-5 py-2 my-5 text-xs text-white placeholder-gray-300 focus:outline-none"
                    />
                     <input
                        
                        onChange={setValues}
                        value={loginData.password}
                        name='password'
                        type="password"
                        required
                        placeholder="Enter your password"
                        className="block w-full bg-transparent border border-gray-400 rounded-[300px] px-5 py-2 my-1 text-xs text-white placeholder-gray-300 focus:outline-none"
                    />
                    
                    <button type="submit"
                     className="bg-[#F24D2B] text-white text-xs py-2 px-5 my-5 rounded-full w-full">
                      Login
                    </button>
                  </form>
              </div>
         </div>
      </div>
        
    </>
  )
}

export default Login