import React, { useState } from 'react';
import signupImage from '../components/assets/login-animation.gif';
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import { Link,useNavigate } from 'react-router-dom';
import { convertToBase64 } from '../helpers/ImageToBase64';
import axios from "axios"; 


function Signup() {
  const  navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [data, setData] = useState({
    image :"",
    username: "",
    phone: "",
    email: "",
    password: "",
    confirmpassword: "",
    type: "",

  })
  console.log(data);
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve)
  }
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve)

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
  const handleUploadProfileImage =  async (e) =>{
    const data = await convertToBase64(e.target.files[0])
    console.log(data);

    setData((preve)=>{
      return{
        ...preve,
        image:data
      }
    })

  }
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const { username, phone, email, password, confirmpassword, type } = data;
  
  //   if (username && phone && email && password && confirmpassword && type) {
  //     if (password === confirmpassword) {
  //       try {
  //         const response = await axios.post("http://localhost:3000/api/register", data, {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         });
  
  //         const dataRes = response.data;
  
  //         if (dataRes.alert) {
  //           alert("Registration successful");
  //           navigate("/login");
  //         } else {
  //           alert("Registration failed");
  //         }
  //       } catch (error) {
  //         console.error("Error during registration:", error);
  //         alert("Registration failed");
  //       }
  //     } else {
  //       alert("Password and confirm password do not match");
  //     }
  //   } else {
  //     alert("Please enter all required fields");
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post("http://localhost:3000/api/register", { ...data });
  
      if (res.status === 201) {
        alert("Data added");
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
      alert("Registration failed");
    }
  };
  
  return (
    <>
      <div className='p-3 md:p-4 flex justify-center items-center h-screen'>
        <div className='w-full max-w-md bg-rose-200 p-4 flex flex-col  rounded'>
          <div className='w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative'>
            <img src={data.image ? data.image :signupImage} className='w-full h-full' alt='Signup Animation' />

            <label htmlFor="profileImage">
              <div className='absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer'>
                <p className='text-sm p-1 text-white'>Upload</p>
              </div>
              <input type="file" name="profileImage" accept='image/*' id="profileImage" className='hidden' onChange={handleUploadProfileImage}/>
            </label>
          </div>
          <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>

            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" className='mb-3 mt-1 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' value={data.username} onChange={handleChange} />
            <label htmlFor="phone">Phone</label>
            <input type="tel" name="phone" id="phone" className='mb-3 mt-1 w-full bg-slate-200 px-2 py-1 rounded  focus-within:outline-blue-300' value={data.phone} onChange={handleChange} />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className='mb-3 mt-1 w-full bg-slate-200 px-2 py-1 rounded  focus-within:outline-blue-300' value={data.email} onChange={handleChange}/>
            <label htmlFor="password">Password</label>
            <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300'>
              <input type={showPassword ? "text" : "password"} name="password" id="password" className='w-full bg-slate-200 border-none outline-none' value={data.password} onChange={handleChange} />
              <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>{showPassword ? <BiSolidShow /> : <BiSolidHide />}</span>
            </div>
            <label htmlFor="confirmpassword">ConfirmPassword</label>
            <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300' value={data.confirmpassword} onChange={handleChange}>
              <input type={showConfirmPassword ? "text" : "password"} name="confirmpassword" id="confirmpassword" className='w-full bg-slate-200 border-none outline-none' />
              <span className='flex text-xl cursor-pointer' onClick={handleShowConfirmPassword}>{showConfirmPassword ? <BiSolidShow /> : <BiSolidHide />}</span>
            </div>
            <label htmlFor="type">Buyer/Seller</label>
            <input type="text" name="type" id="type" className='mb-3 mt-1 w-full bg-slate-200 px-2 py-1 rounded  focus-within:outline-blue-300'value={data.type} onChange={handleChange} />
            {/* <label htmlFor="type">Type</label>
            <select name="type" id="type" placeholder="type" >
          <option value="buyer">buyer</option>
          <option value="seller">seller</option>
        </select> */}
            <button className='w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Sign Up</button>
          </form>
          <p className='text-left text-base mt-2'>Already have an account  ?  <Link to={"/login"} className='text-red-600 underline'>Login</Link></p>
          {/* Optional: Add text content here */}
          {/* <h1 className='text-center'>Signup</h1> */}
        </div>
      </div>
    </>
  );
};

export default Signup;
