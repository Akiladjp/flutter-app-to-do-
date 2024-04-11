// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#6B3CC9] flex-col px-4 text-white py-4">
      <div className="lg:flex">
        <div className="lg:mr-[30%] xl:mr-[400px]">
          <img className="w-64" src={logo} alt="logo" />
          <div className="w-[90%] md:w-[400px] mt-2">
            <p>
              Your goal is our target. not anything in between. We use online
              marketig platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>
        </div>
        <div className="md:flex md:mt-16 lg:mt-0">
          <div className="mt-16 md:mt-0 md:mr-24">
            <h1 className="text-2xl font-semibold">Our Technologies</h1>
            <p className="mt-2">ReactJS</p>
            <p className="mt-2">Gatsby</p>
            <p className="mt-2">NextJS</p>
            <p className="mt-2">NodeJS</p>
          </div>
          <div className="mt-12 md:mt-0">
            <h2 className="text-2xl font-semibold">Our Services</h2>
            <p className="mt-2">Social Media Marketing</p>
            <p className="mt-2 xl:w-36">Web & Mobile App Development</p>
            <p className="mt-2">Data & Analytics</p>
          </div>
        </div>
      </div>
      <div className="mt-12 w-[100%] md:w-[700px] border-t-2">
        <div className="flex mt-3 justify-center">
          Privacy Policy <div className="border-r-2 mx-4 my-1" /> Terms &
          Conditions
        </div>
      </div>
    </div>
  );
};

export default Footer;
