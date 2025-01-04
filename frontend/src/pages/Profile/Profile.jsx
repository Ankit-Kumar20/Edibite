import React from "react";
import { useContext } from "react";
import { user_icon } from "../../assets/images/assets";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { logout } = useContext(StoreContext);
   const navigate = useNavigate(); 

  return (
    <div className="min-h-screen p-6">
      <button onClick={() => navigate('/')}  className='px-4 pb-4 ml-1.5 text-4xl text-[#FFFFFF]'>Back</button>
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 text-white flex items-center">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white">
            <img
              src={user_icon}
              alt="User Avatar"
              className="w-full h-full"
            />
          </div>
          <div className="ml-4">
            <h1 className="text-xl font-bold">John Doe</h1>
            <p className="text-sm text-gray-300">Joined since 2024-12-01</p>
          </div>
        </div>
        <div className="p-6">
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-white">Full Name</label>
                <p className="text-gray-300">John Doe</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Email</label>
                <p className="text-gray-300">john.doe@example.com</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Phone Number</label>
                <p className="text-gray-300">+1 234 567 890</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Address</label>
                <p className="text-gray-300">1234 Street, City, Country</p>
              </div>
            </div>
          </div>

          {/* Order History */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Order History</h2>
            <ul className="divide-y divide-gray-200">
              <li className="py-4 flex justify-between items-center">
                <div>
                  <p className="font-medium text-white">Pizza Hut</p>
                  <p className="text-sm text-gray-300">Ordered on: 2024-12-25</p>
                </div>
                <span className="text-sm font-medium text-[#B9FF66]">Delivered</span>
              </li>
              <li className="py-4 flex justify-between items-center">
                <div>
                  <p className="font-medium text-white">KFC</p>
                  <p className="text-sm text-gray-300">Ordered on: 2024-12-20</p>
                </div>
                <span className="text-sm font-medium text-yellow-600">In Progress</span>
              </li>
              <li className="py-4 flex justify-between items-center">
                <div>
                  <p className="font-medium text-white">KFC</p>
                  <p className="text-sm text-gray-300">Ordered on: 2024-12-20</p>
                </div>
                <span className="text-sm font-medium text-yellow-600">In Progress</span>
              </li>
            </ul>
          </div>

          <div className="fixed bottom-0 left-0 right-0 px-12 py-10 bg-gray-800">
            <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-gray-600 text-white py-2 px-4 rounded-lg ">
                Edit Profile
              </button>
              <button  onClick={() => { logout(); navigate("/"); }} className="bg-red-700 text-white py-2 px-4 rounded-lg ">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
