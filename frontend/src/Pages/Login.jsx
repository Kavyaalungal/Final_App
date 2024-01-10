import React, { useState } from 'react';
import signupImage from '../components/assets/login-animation.gif';
import { BiSolidShow } from 'react-icons/bi';
import { BiSolidHide } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const ress = await axios.post('http://localhost:3000/api/login', {
        ...data,
      });

      if (ress.status === 200) {
        let usertoken = ress.data.usertoken;
        localStorage.setItem('usertoken', JSON.stringify({ usertoken }));
        toast.success('Successfully logged in');
        navigate('/');
      }
    } catch (error) {
      console.log(error);
      toast.error('Login failed. Invalid credentials.');
    }
  };

  return (
    <>
     <ToastContainer />
      <div className='p-3 md:p-4 flex justify-center items-center h-screen'>
        <div className='w-full max-w-md bg-rose-200 p-4 flex flex-col rounded'>
          <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto'>
            <img src={signupImage} className='w-full' alt='Signup Animation' />
          </div>
          <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
            <label htmlFor='username'>Username</label>
            <input
              type='username'
              name='username'
              id='username'
              className='mb-3 mt-1 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300'
              value={data.username}
              onChange={handleChange}
            />
            <label htmlFor='password'>Password</label>
            <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300'>
              <input
                type={showPassword ? 'text' : 'password'}
                name='password'
                id='password'
                className='w-full bg-slate-200 border-none outline-none'
                value={data.password}
                onChange={handleChange}
              />
              <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>
                {showPassword ? <BiSolidShow /> : <BiSolidHide />}
              </span>
            </div>
            <button className='w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>
              Login
            </button>
          </form>
          <p className='text-left text-base mt-2'>
            Don't have an account ? <Link to={'/signup'} className='text-red-600 underline'>Sign Up</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
