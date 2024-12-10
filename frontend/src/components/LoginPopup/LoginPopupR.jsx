import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';

const ModalR = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  const {url} = useContext(StoreContext);

  const [rData, setrData] = useState({
    resturant_name: "",
    email: "",
    phone_no: "",
    password: "",
    resturant_adress: "",
  });
  const [lData, setlData] = useState({
    email:"",
    password: "",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setrData({ ...rData, [name]: value });
  }
  const onChangeHandlerL = (event) => {
    const nameL = event.target.name;
    const value = event.target.value;
    setlData({ ...lData, [nameL]: value });
  }

  const onLogin = (e) => {
    e.preventDefault();
    const res = axios.post("http://localhost:3000/authentication/resturant/signin/", lData).then((res)=>{console.log(res.data)})
    console.log(lData);
  }
  const onRegister = (e) => {
    e.preventDefault();
    const res = axios.post("http://localhost:3000/authentication/resturant/signup/", rData).then((res)=>{console.log(res.data)})
    console.log(rData);
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black backdrop-blur-md bg-opacity-10 flex justify-center items-center">
      <div className="bg-[#000000] w-full mx-8 max-w-md p-6 rounded-xl shadow-lg overflow-hidden relative">
        <button onClick={() => { onClose(); setIsLogin(true); }} className="absolute top-6 right-7 text-gray-500 hover:text-black">
          X
        </button>
        
        {isLogin ? (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">Welcome Again</h2>
            <form onSubmit={onLogin} className="space-y-4">
              <div>
                <label className="block text-sm text-white font-medium  ">Restaurant Email ID</label>
                <input
                  name='email'
                  onChange={onChangeHandlerL}
                  value={lData.email}
                  type="email"
                  className="w-full p-2 rounded-md focus:outline-none focus:ring-[#B9FF66] focus:ring-1 placeholder:opacity-30"
                  placeholder="Enter your Email ID"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-white  font-medium">Password</label>
                <input
                name='password'
                onChange={onChangeHandlerL}
                value={lData.password}
                  type="password"
                  className="w-full p-2 rounded-md focus:outline-none focus:ring-[#B9FF66] focus:ring-1 placeholder:opacity-30"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#B9FF66] text-[#000000] p-2 rounded-md hover:bg-[#8cff00]"
                onClick={onLogin}
              >
                Login
              </button>
            </form>
            <p className="text-sm mt-4 text-white  ">
              Don't have an account?{' '}
              <button
                className="text-[#ffffff] underline"
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </button>
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">Welcome to Edibite</h2>
            <form onSubmit={onRegister}  className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white">Restaurant Name</label>
                <input
                  name='resturant_name'
                  onChange={onChangeHandler}
                  value={rData.resturant_name}
                  type="text"
                  className="w-full p-2 rounded-md focus:outline-none focus:ring-[#B9FF66] focus:ring-1 placeholder:opacity-30"
                  placeholder="Enter Restaurant name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Email</label>
                <input
                  name='email'
                  onChange={onChangeHandler}
                  value={rData.email}
                  type="email"
                  className="w-full p-2 rounded-md focus:outline-none focus:ring-[#B9FF66] focus:ring-1 placeholder:opacity-30"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Mobile No.</label>
                <input
                  name='phone_no'
                  onChange={onChangeHandler}
                  value={rData.phone_no}
                  type="number"
                  className="w-full p-2 rounded-md focus:outline-none focus:ring-[#B9FF66] focus:ring-1 placeholder:opacity-30"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white">Password</label>
                <input
                  name='password'
                  onChange={onChangeHandler}
                  value={rData.password}
                  type="password"
                  className="w-full p-2 rounded-md focus:outline-none focus:ring-[#B9FF66] focus:ring-1 placeholder:opacity-30"
                  placeholder="Create a password"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Address</label>
                <input
                  name='resturant_name'
                  onChange={onChangeHandler}
                  value={rData.resturant_adress}
                  type="text"
                  className="w-full p-2 rounded-md focus:outline-none focus:ring-[#B9FF66] focus:ring-1 placeholder:opacity-30"
                  placeholder="Enter Restaurant address"
                  required
                />
                <button>Current Location</button>
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Verification will be done through email OR call.</label>
              </div>
              <button
                type="submit"
                className="w-full bg-[#B9FF66] text-[#000000] p-2 rounded-md hover:bg-[#B9FF66]"
                onClick={onRegister}
              >
                Sign Up
              </button>
            </form>
            <p className="text-sm mt-4 text-white">
              Already have an account?{' '}
              <button
                className="text-[#ffffff] underline"
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default ModalR;