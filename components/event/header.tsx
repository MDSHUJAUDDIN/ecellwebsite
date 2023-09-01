/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import elnwt from "../../public/assets/ewnlt.png";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-row md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src={elnwt} alt=""  className='h-[64px] w-[64px] lg:w-full ' height={200} width={500}/>
            <span className="ml-3 text-xl text-white hover:text-purple-900">ECELL</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 text-white hover:text-purple-900">Home</a>
            <a className="mr-5 text-white hover:text-purple-900">Team</a>
            <a className="mr-5 text-white hover:text-purple-900">Gallery</a>
            <a className="mr-5 text-white hover:text-purple-900">Membership</a>
          </nav>
         
        </div>
      </header>
    </>
  );
};

export default Header;

// bg-clip-text text-transparent bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4]
