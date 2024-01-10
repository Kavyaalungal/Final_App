import React, { useState } from 'react';
import signupImage from '../components/assets/login-animation.gif';
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [data, setData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    confirmpassword: "",
    type: ""

  })
  console.log(data);
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve)
  }
 
  const handleChange = (e) => {

    const {name,value} = e.target
    setData((preve)=>{
      return{
        ...preve,
        [name]: value
      }
    })
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    const {email,password} = data
    if(email && password){
      
        alert("Successful")
      
    
    }
    else{
      alert("please enter required fields")
    }
  }

  return (
    <>
      <div className='p-3 md:p-4 flex justify-center items-center h-screen'>
        <div className='w-full max-w-md bg-rose-200 p-4 flex flex-col  rounded'>
          <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto'>
            <img src={signupImage} className='w-full' alt='Signup Animation' />
          </div>
          <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>

            
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className='mb-3 mt-1 w-full bg-slate-200 px-2 py-1 rounded  focus-within:outline-blue-300' value={data.email} onChange={handleChange}/>
            <label htmlFor="password">Password</label>
            <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300'>
              <input type={showPassword ? "text" : "password"} name="password" id="password" className='w-full bg-slate-200 border-none outline-none' value={data.password} onChange={handleChange} />
              <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>{showPassword ? <BiSolidShow /> : <BiSolidHide />}</span>
            </div>
           
            <button className='w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Login</button>
          </form>
          <p className='text-left text-base mt-2'>Don't have an account  ?  <Link to={"/signup"} className='text-red-600 underline'>Sign Up</Link></p>
          {/* Optional: Add text content here */}
          {/* <h1 className='text-center'>Signup</h1> */}
        </div>
      </div>
    </>
  );
};

export default Login;
