import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () =>{
    setShowMenu((preve) => !preve)
  }
  return (
    <div className="fixed shadow-md w-full h-16 px-2 md:px-4 bg-rose-50 z-50">
      {/* desktop */}
      <div className="flex items-center h-full justify-between">
        <Link to={"/"}>
          <div className="flex items-center text-2xl">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
          </div>
        </Link>
        <div className="flex items-center gap-4 md:gap-7">
          <nav className="flex gap-4 md:gap-6 text-base md:text-lg">
            <Link to={""}>Home</Link>
            <Link to={"/category"}>Category</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
          </nav>
          <div className="text-2xl text-slate-600 relative">
            <IoCart />
            <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">0</div>
          </div>
          <div className="text-slate-600" onClick={handleShowMenu}>
            <div className="text-3xl cursor-pointer">
            <FaRegUserCircle />
            </div>
         
          </div>
          {showMenu && (

              <div className="absolute right-3 top-12 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col">
              <Link to={"newproduct"} className="whitespace-nowrap cursor-pointer">New Product</Link>
              <Link to={"login"} className="whitespace-nowrap cursor-pointer">Login</Link>
            </div>
            )
          }
         
        </div>
      </div>
      {/* mobile */}
    </div>
  );
}

export default Navbar;
