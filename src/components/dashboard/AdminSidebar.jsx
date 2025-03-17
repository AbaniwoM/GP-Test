import React from 'react'
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
import profileFour from "../../assets/female.png"
import { CgLogOut } from "react-icons/cg";

const AdminSidebar = () => {
  return (
    <div className='bg-gradient-to-r from-violet-950 to-violet-950 text-white h-full space-y-2 md:hidden sm:hidden'>
        <div className='h-8 flex items-center justify-start gap-1 ml-[0.4rem] pt-2'>
            <div><BiSolidCircleHalf /></div>
            <h3 className='text-lg font-normal text-center font-serif'>Dlex</h3>
        </div>
        <div className='border  border-gray-400 w-[84%] lg:w-[78%] ml-[0.8rem] mt-5'></div>
        <div>
            <div className='flex gap-2 lg:gap-1 justify-center bg-gradient-to-r from-violet-800 to-violet-800 rounded-md py-3 xl:py-2 xl:px-2 lg:px-1 mx-3'>
                <div className='rounded-full mt-1 bg-yellow-400 w-[16%] xl:w-[30%] h-[1.5rem] xl:h-[1.4rem] text-black text-xs xl:text-[0.6rem] lg:text-[0.5rem] text-center pt-1'>DW</div>
                <div className=''>
                    <div className='font-light text-xs xl:text-[0.7rem] lg:text-[0.6rem]'>Dlex Designs</div>
                    <div className="text-xs lg:text-[0.6rem] text-gray-400 font-light">general team</div>
                </div>
                <div className='flex flex-col justify-center '><p><TiArrowSortedUp /></p><p><TiArrowSortedDown /></p></div>
            </div>
            <NavLink to="/admin-dashboard" className="flex items-center space-x-4 pt-[1rem] px-4 lg:px-1 rounded">
                <TbChartPieFilled />
                <span className='text-sm lg:text-[0.8rem]'>Dashboard</span>
            </NavLink>
            <NavLink to="/admin-dashboard" className='flex items-center space-x-4 py-2.5 pt-[1rem] lg:px-1 px-4 rounded text-gray-400'>
                <MdInsertChart />
                <span className='text-sm font-light'>Overview</span>
            </NavLink>
            <NavLink to="/admin-dashboard/departments" className="flex items-center space-x-4 py-2.5 px-4 lg:px-1 rounded text-gray-400">
                <IoChatbubbleEllipsesSharp />
                <span className="text-sm font-light">Chat</span>
                <span className='pl-8 xl:pl-1 text-yellow-400'><PiNumberCircleFiveFill /></span>
            </NavLink>
            <NavLink to="/admin-dashboard" className='flex items-center space-x-4 py-2.5 px-4 lg:px-1 rounded text-gray-400'>
                <FaUsers />
                <span className="text-sm font-light">Team</span>
            </NavLink>

            <div className="px-4 lg:px-1 text-xs font-light text-gray-400 mt-6 mb-2">SHORTCUT</div>

            <NavLink to="/admin-dashboard" className="flex items-center space-x-4 py-2.5 px-4 lg:px-1 rounded text-gray-400">
                <TbNotes />
                <span className='text-sm font-light'>Tasks</span>
            </NavLink>
            <NavLink to="/admin-dashboard" className="flex items-center space-x-4 py-2.5 px-4 lg:px-1 rounded text-gray-400">
                <FaTriangleExclamation />
                <span className='text-sm font-light'>Reports</span>
            </NavLink>
            <NavLink to="/admin-dashboard" className="flex items-center space-x-4 py-2.5 px-4 lg:px-1 rounded text-gray-400">
                <IoMdSettings />
                <span className='text-sm font-light'>Settings</span>
            </NavLink>
            <NavLink to="/" className="flex items-center space-x-4 py-2.5 px-4 lg:px-1 rounded text-gray-400">
                <CgLogOut />
                <span className='text-sm font-light'>Logout</span>
            </NavLink>
            <div className='bg-gradient-to-r from-violet-800 to-violet-800 rounded-md py-3 xl:py-5 mx-3 sm:gap-0  xl:mx-1 lg:w-[90%] mt-[10rem]'>
                <div className="flex gap-1 justify-center">
                <div className='flex flex-col'>
                    <div className='font-light text-sm xl:text-[0.7rem] lg:text-[0.5rem]'>Storage</div>
                    <div className='flex gap-1 text-[0.6rem] xl:text-[0.6rem] lg:text-[0.5rem]'>3.4GB<div className="text-[0.6rem] lg:text-[0.5rem] text-gray-400 font-light">of 15GB</div></div>
                </div>
                <div className='justify-start text-xs xl:text-[0.7rem] lg:text-[0.5rem] font-light mt-[0.2rem]'>Upgrade</div>
                </div>
                <div className='border border-gray-400 w-[90%] lg:w-[91%] ml-[0.4rem] lg:ml-[0.3rem] mt-2'></div>
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
  )
}

export default AdminSidebar