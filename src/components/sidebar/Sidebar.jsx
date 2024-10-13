import React from "react";
import { BiSolidHome } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { RiAddBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { Avatar } from "@chakra-ui/react";
import { AiFillInstagram } from "react-icons/ai";


const Sidebar = () => {
  return (
    <div className="border-r-2 border-[#232323]  w-20 md:w-52  pr-4 pt-5 py-24 fixed top-0  bottom-0">
      <Link className="w-32 flex">
        <img src="./logo.png" alt="" className="hidden md:block"/>
        <AiFillInstagram className="text-[22px] text-black block md:hidden ml-4" />
      </Link>
      <div className="flex flex-col justify-between h-full pl-4 mt-5">
        <div className="flex flex-col gap-y-10">
          <Link className="flex items-center text-black text-[17px] gap-4">
            <BiSolidHome className="text-[22px]" />
            <h3 className="hidden md:block">Home</h3>
          </Link>
          <Link className="flex items-center text-black text-[17px] gap-4">
            <CiSearch className="text-[22px]" />
            <h3 className="hidden md:block">Search</h3>
          </Link>
          <Link className="flex items-center text-black text-[17px] gap-4">
            <RiAddBoxLine className="text-[22px]" />
            <h3 className="hidden md:block">Create</h3>
          </Link>
          <Link className="flex items-center text-black text-[17px] gap-4">
            <Avatar w={22} />
            <h3 className="hidden md:block">Profile</h3>
          </Link>
          <Link className="flex items-center text-black text-[17px] gap-4">
            <CiLogout className="text-[22px]" />
            <h3 className="hidden md:block">Logout</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
