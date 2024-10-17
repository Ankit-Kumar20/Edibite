import React, { useState } from 'react';

const ModalR = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black backdrop-blur-md bg-opacity-50 flex justify-center items-center">
      <div className="border border-[#B9FF66] border-opacity-50 w-full mx-8 max-w-md p-6 rounded-md shadow-lg overflow-hidden relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-black">
          X
        </button>
        
        {isLogin ? (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">Welcome Again ! </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-white font-medium  ">Work Email</label>
                <input
                  
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#B9FF66] focus:ring-1"
                  placeholder="Enter work email"
                />
              </div>
              <div>
                <label className="block text-sm text-white  font-medium">Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#B9FF66] focus:ring-1"
                  placeholder="Enter your password"
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
              New to Edibite?{' '}
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
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white">Restaurant Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#B9FF66] focus:ring-1"
                  placeholder="Enter restaurant name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Work Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#B9FF66] focus:ring-1"
                  placeholder="Enter work email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#B9FF66] focus:ring-1"
                  placeholder="Create a password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#B9FF66] text-[#000000] p-2 rounded-md hover:bg-[#B9FF66]"
              >
                Sign Up
              </button>
            </form>
            <p className="text-sm mt-4 text-white">
              Already registered?{' '}
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