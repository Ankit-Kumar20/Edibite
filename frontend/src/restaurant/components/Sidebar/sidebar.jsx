import React from 'react';
import { IoMdAdd } from "react-icons/io";
import { MdChecklist } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";



const Sidebar = () => {
  return (
    <ul className="menu bg-black md:text-xl text-white rounded-box w-full">
  <li>
    <details >
      <summary><IoMdAdd />Add Items</summary>
      <ul>
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </details>
  </li>
  <li>
    <details >
      <summary><MdChecklist />List Items</summary>
      <ul>
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        
      </ul>
    </details>
  </li>
  <li>
    <details >
      <summary><HiShoppingCart />
      Orders</summary>
      <ul>
        <li><a>Order 1</a></li>
        <li><a>Order 2</a></li>
        <li>
          <details >
            <summary>Order 3</summary>
            <ul>
              <li><a>SubOrder 1</a></li>
              <li><a>SubOrder 2</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </li>
</ul>
  );
};

export default Sidebar;
