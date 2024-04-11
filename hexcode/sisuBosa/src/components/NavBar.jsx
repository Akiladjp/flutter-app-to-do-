import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="relative">
      <div
        className={`bg-white text-black font-semibold h-screen absolute top-[-45px] left-0 right-0 ${
          click ? "block" : "hidden"
        }`}
      >
        <ul className="pt-20 md:pt-0 md:hidden">
          <li className="mb-12 ml-6">HOME</li>
          <li className="mb-12 ml-6">SERVICES</li>
          <li className="mb-12 ml-6">ABOUT US</li>
          <li className="mb-12 ml-6">CONTACT US</li>
          <li className="mb-12 ml-6">CAREERS</li>
        </ul>
      </div>

      <div className="bg-[#6B3CC9] flex justify-between px-4 py-4 text-white">
        <div>
          <img className="w-64" src={logo} alt="logo" />
        </div>

        <div className="my-auto">
          <ul className="font-semibold hidden md:flex">
            <li className="mx-2">SERVICES</li>
            <li className="mx-2">ABOUT US</li>
            <li className="mx-2">CONTACT US</li>
            <li className="mx-2">CAREERS</li>
          </ul>
        </div>

        <div className="md:hidden mt-5 relative" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#000000" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
