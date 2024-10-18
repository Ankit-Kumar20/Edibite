import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-1/5 min-h-screen border border-gray-400 border-t-0">
      <div className="pt-12 pl-10 flex flex-col gap-5">
        <NavLink to="/add" className="flex items-center gap-3 border border-gray-400 border-r-0 py-2 px-3 rounded-l cursor-pointer hover:bg-gray-200 active:bg-white">
          <img src="/path-to-your-assets/add_icon.png" alt="Add" className="w-5" />
          <p className="hidden lg:block">Add Items</p>
        </NavLink>
        <NavLink to="/list" className="flex items-center gap-3 border border-gray-400 border-r-0 py-2 px-3 rounded-l cursor-pointer hover:bg-gray-200 active:bg-white">
          <img src="/path-to-your-assets/order_icon.png" alt="List" className="w-5" />
          <p className="hidden lg:block">List Items</p>
        </NavLink>
        <NavLink to="/orders" className="flex items-center gap-3 border border-gray-400 border-r-0 py-2 px-3 rounded-l cursor-pointer hover:bg-gray-200 active:bg-white">
          <img src="/path-to-your-assets/order_icon.png" alt="Orders" className="w-5" />
          <p className="hidden lg:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;