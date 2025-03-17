// app.js

import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
import { NavLink } from 'react-router-dom'
import { FaUsers,} from 'react-icons/fa'
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { PiNumberCircleFiveFill } from "react-icons/pi";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { MdInsertChart } from "react-icons/md";
import { TbChartPieFilled } from "react-icons/tb";
import { TbNotes } from "react-icons/tb";
import { FaTriangleExclamation } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { BiSolidCircleHalf } from "react-icons/bi";
import profileFour from "../../assets/female.png";
import { CgLogOut } from "react-icons/cg";

const Hamburger = () => {
  const [nav, setNav] = useState(false);

  const showNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <header className="">
        {/* desktop nav */}
        {/* <nav className="hidden md:flex gap-5 ">
          <a href="#" className="underline">
            Home
          </a>
          <a href="#" className="underline">
            About
          </a>
          <a href="#" className="underline">
            Contact
          </a>
          <a href="#" className="underline">
            Address
          </a>
          <a href="#" className="underline">
            Policy
          </a>
        </nav> */}

        {/* hamburger */}
        {nav ? (
          // close button
          <i
            className="fixed left-[20px] text-3xl text-white z-50 sm:block md:block cursor-pointer"
            aria-hidden="true"
            onClick={showNav}
          ><LiaTimesSolid /></i>
        ) : (
          <i
            className="text-3xl md:block sm:block cursor-pointer"
            aria-hidden="true"
            onClick={showNav}
          ><RxHamburgerMenu /></i>
        )}

        {/* mobile nav */}
        <nav
          className={`h-full fixed overflow-y-auto top-[0px] w-[50%] sm:block md:block bg-white z-10 duration-1000 ${
            nav ? "left-[0px]" : "left-[-100vw]"
          } `}
        >
        <div className='bg-gradient-to-r from-violet-950 to-violet-950 text-white space-y-2 md:block sm:block pt-16'>
        <div className='h-8 flex items-center justify-start gap-1 ml-[0.4rem] pt-2'>
            <div><BiSolidCircleHalf /></div>
            <h3 className='text-lg font-normal text-center font-serif'>Dlex</h3>
        </div>
        <div className='border border-gray-400 w-[82%] ml-[0.8rem] mt-5'></div>
        <div>
            <div className='flex gap-3 justify-center bg-gradient-to-r from-violet-800 to-violet-800 rounded-md mt-5 py-8 mx-3 w-[83%]'>
                <div className='rounded-full mt-1 bg-yellow-400 w-[14%] h-[1.5rem] text-black text-xs text-center pt-1'>DW</div>
                <div className=''>
                    <div className='font-light text-xs'>Dlex Designs</div>
                    <div className="text-xs text-gray-400 font-light">general team</div>
                </div>
                <div className='flex flex-col justify-center '><p><TiArrowSortedUp /></p><p><TiArrowSortedDown /></p></div>
            </div>
            <NavLink to="/admin-dashboard" className="flex items-center space-x-4 pt-[1rem] px-4 rounded">
                <TbChartPieFilled />
                <span className='text-sm'>Dashboard</span>
            </NavLink>
            <NavLink to="/admin-dashboard" className='flex items-center space-x-4 py-2.5 pt-[1rem] px-4 rounded text-gray-400'>
                <MdInsertChart />
                <span className='text-sm font-light'>Overview</span>
            </NavLink>
            <NavLink to="/admin-dashboard/departments" className="flex items-center space-x-4 py-2.5 px-4 rounded text-gray-400">
                <IoChatbubbleEllipsesSharp />
                <span className="text-sm font-light">Chat</span>
                <span className='pl-8 text-yellow-400'><PiNumberCircleFiveFill /></span>
            </NavLink>
            <NavLink to="/admin-dashboard" className='flex items-center space-x-4 py-2.5 px-4 rounded text-gray-400'>
                <FaUsers />
                <span className="text-sm font-light">Team</span>
            </NavLink>

            <div className="px-4 text-xs font-light text-gray-400 mt-6 mb-2">SHORTCUT</div>

            <NavLink to="/admin-dashboard" className="flex items-center space-x-4 py-2.5 px-4 rounded text-gray-400">
                <TbNotes />
                <span className='text-sm font-light'>Tasks</span>
            </NavLink>
            <NavLink to="/admin-dashboard" className="flex items-center space-x-4 py-2.5 px-4 rounded text-gray-400">
                <FaTriangleExclamation />
                <span className='text-sm font-light'>Reports</span>
            </NavLink>
            <NavLink to="/admin-dashboard" className="flex items-center space-x-4 py-2.5 px-4 rounded text-gray-400">
                <IoMdSettings />
                <span className='text-sm font-light'>Settings</span>
            </NavLink>
            <NavLink to="/" className="flex items-center space-x-4 py-2.5 px-4 rounded text-gray-400">
                <CgLogOut />
                <span className='text-sm font-light'>Logout</span>
            </NavLink>
            <div className='bg-gradient-to-r from-violet-800 to-violet-800 rounded-md py-8 w-[83%] mx-3 mt-[17rem]'>
                <div className="flex justify-center">
                <div className=''>
                    <div className='font-light text-sm'>Storage</div>
                    <div className='flex gap-1 text-[0.6rem]'>3.4GB<div className="text-[0.6rem] text-gray-400 font-light">of 15GB</div></div>
                </div>
                <div className='justify-start text-xs font-light mt-[0.2rem]'>Upgrade</div>
                </div>
                <div className='border border-gray-400 w-[90%] ml-[0.8rem] mt-2'></div>
            </div>
            <div className='border  border-gray-400 w-[84%] ml-[0.8rem] mt-5'></div>
            <div className='flex gap-1 justify-center rounded-md py-3 mx-3'>
                <div className='text-center pt-1'>
                    <img src={profileFour} className='w-6'/>
                </div>
                <div className='mt-1'>
                    <div className='font-light text-sm'>Jane Smith</div>
                </div>
                <div className='flex flex-col justify-center'><p><TiArrowSortedUp /></p><p><TiArrowSortedDown /></p></div>
            </div>
        </div>
    </div>
        </nav>
      </header>
    </>
  );
};

export default Hamburger;
