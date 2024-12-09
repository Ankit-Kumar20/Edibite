import React, { useState, useEffect } from 'react';

const ModalR = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  const [rData, setrData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
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
    console.log(lData);
  }
  const onRegister = (e) => {
    e.preventDefault();
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
                  name='name'
                  onChange={onChangeHandler}
                  value={rData.name}
                  type="text"
                  className="w-full p-2 rounded-md focus:outline-none focus:ring-[#B9FF66] focus:ring-1 placeholder:opacity-30"
                  placeholder="Enter Restaurant name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Mobile No.</label>
                <input
                  name='mobile'
                  onChange={onChangeHandler}
                  value={rData.mobile}
                  type="number"
                  className="w-full p-2 rounded-md focus:outline-none focus:ring-[#B9FF66] focus:ring-1 placeholder:opacity-30"
                  placeholder="Enter your mobile number"
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
                <label className="block text-sm font-medium text-white">Verification will be done through email OR call.</label>
              </div>
              <button
                type="submit"
                className="w-full bg-[#B9FF66] text-[#000000] p-2 rounded-md hover:bg-[#B9FF66]"
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