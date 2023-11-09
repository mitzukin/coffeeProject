import React from 'react'
import {SiBuymeacoffee} from "react-icons/si"
import { Outlet, Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      
<footer className="mt-20 bg-white shadow" >
    <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-center">
            <SiBuymeacoffee size={20} color="#fca311"/>
            <h1 className="ml-2 text-sm font-semibold text-center text-navtext font-Roboto ">COFT</h1>
          </div>
            <ul  className="flex flex-wrap items-center justify-center gap-4 mt-5 mb-6 text-sm font-medium text-gray-800 font-Roboto sm:mb-0 dark:text-gray-400">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/service">Service</Link>
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
        </div>
        
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"  />
        <span  className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">COFT</a>. All Rights Reserved.</span>
        
    </div>
    <Outlet />
</footer>


    </div>
  )
}

export default Footer
