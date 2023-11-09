import { Outlet, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose,AiOutlineShoppingCart } from "react-icons/ai";
import {SiBuymeacoffee} from "react-icons/si"
import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="fixed top-0 z-50 w-full ">
      <div className="p-5 bg-black font-Roboto bg-opacity-60">
        <nav className="flex flex-col items-center justify-between mx-0 md:mx-12 md:flex-row text-md">
        <Link to="/" className="duration-300 hover:scale-110">
          <div className="flex items-center " data-aos="zoom-in-up" data-aos-duration="500">
            <SiBuymeacoffee size={20} color="#fca311"/>
            <h1 className="ml-2 text-sm font-semibold text-navtext font-Roboto ">COFT</h1>
          </div>
          </Link>

          <div
            className="fixed flex items-center justify-center p-3 rounded-md top-2 right-2 align-center text-custom-blue md:hidden"
            onClick={() => {
              setTimeout(navToggle, 300);
            }}
          >
            {isNavOpen ? (
              <div>
                <AiOutlineClose size={20} color="#fca311" />
              </div>
            ) : (
              <div>
                <RxHamburgerMenu size={20} color="#fca311" />
              </div>
            )}
          </div>
          {isNavOpen && (
            <div
              className="absolute flex justify-center w-screen h-20 p-3 mt-6 md:hidden font-Roboto "
              data-aos="fade-in"
              data-aos-duration="500"
            >
              <ul className="flex items-center gap-4 py-5 text-sm rounded bg-navtext bg-opacity-90 px-96 text-title font-Roboto md:mt-0 " data-aos="zoom-in" data-aos-duration="500">
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
          )}
          <div className="hidden md:block">
            <ul className="flex items-center gap-4 mt-2 text-sm text-navtext md:mt-0 font-Roboto " data-aos="zoom-in" data-aos-duration="1000">
              <li className="duration-500 hover:scale-110 ">
                <Link to="/" >HOME</Link>
              </li>
              <li className="duration-500 hover:scale-110">
                <Link to="/about">ABOUT</Link>
              </li>
              <li className="duration-500 hover:scale-110">
                <Link to="/service">SERVICE</Link>
              </li>
              <li className="duration-500 hover:scale-110">
                <Link to="/menu">MENU</Link>
              </li>
              <li className="duration-500 hover:scale-110">
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
          <div className="duration-300 hover:scale-110">
          <Link className="hidden px-3 py-2 rounded bg-navtext md:block " data-aos="zoom-in-right" data-aos-duration="2000">
            <div className="flex gap-2 ">
          <button className="text-xs">Cafe Order</button> 
          <AiOutlineShoppingCart />
          </div>
          </Link>
          </div>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
