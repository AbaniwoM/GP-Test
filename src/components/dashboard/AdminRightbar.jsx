import React from 'react'
import profileSix from '../../assets/profile.png'
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { TbChartDonut4 } from "react-icons/tb";
import { FaFileAlt } from "react-icons/fa";

const AdminRightbar = () => {
  return (
    <div className='flex flex-col items-center space-y-2 sm:hidden'>
        <img src={profileSix} className='w-14 pt-12'/>
        <div className='text-md'>Harrison Philips</div>
        <div className='text-[0.7rem] text-gray-500 pb-6'>Business analyst</div>
        <div className='col-span-6 border pt-5 pl-4 pb-5 rounded-md flex gap-[6rem] xl:gap-[2.5rem] lg:gap-[0.7rem]'>
            <div>
                <div className='text-sm'>Get - 10% sell price</div>
                <div className='text-[0.7rem] text-gray-500'>for "spanish A2" course</div>
            </div>
            <div className='text-sm mt-3 mr-3 text-blue-700 cursor-pointer'><IoIosArrowForward /></div>
        </div>
        <div className='self-start pt-7 pb-2 xl:ml-4 lg:ml-7'>Course Progress</div>
        <div className='col-span-6 border pt-5 pl-4 pb-5 rounded-md flex gap-[0.3rem] xl:w-[85%] lg:w-[76%] pr-[4.5rem]'>
            <div className='text-blue-700 text-sm self-center'>63%</div>
            <div className='flex gap-3'>
              <div className='border rounded-md bg-blue-700 w-10 h-10 shadow-md'>
                <div className='text-xl pt-[0.54rem] ml-[0.55rem] text-white'>
                    <MdOutlineEdit />
                </div>
              </div>
              <div>
                <div className='text-sm'>Grammar</div>
                <div className='text-[0.7rem] text-gray-500'>Learn new rules</div>
              </div>
            </div>
        </div>
        <div className='col-span-6 border pt-5  pl-5 pb-5 rounded-md flex gap-[0.3rem] pr-[3.3rem] xl:w-[85%] lg:w-[76%]'>
            <div className='text-orange-500 text-sm self-center'>78%</div>
            <div className='flex gap-3'>
              <div className='border rounded-md bg-orange-500 w-10 h-10 shadow-md'>
                <div className='text-xl pt-[0.54rem] ml-[0.55rem] text-white'>
                    <FaFileAlt />
                </div>
              </div>
              <div>
                <div className='text-sm'>Dictionary</div>
                <div className='text-[0.7rem] text-gray-500'>Learn 4 new words</div>
              </div>
            </div>
        </div>
        <div className='col-span-6 border pt-5  pl-5 pb-5 rounded-md flex gap-[0.3rem] pr-[4.8rem] xl:w-[85%] lg:w-[76%]'>
            <div className='text-pink-700 text-sm self-center'>34%</div>
            <div className='flex gap-3'>
              <div className='border rounded-md bg-pink-700 w-10 h-10 shadow-md'>
                <div className='text-xl pt-[0.54rem] ml-[0.55rem] text-white'>
                    <TbChartDonut4 />
                </div>
              </div>
              <div>
                <div className='text-sm'>Reading</div>
                <div className='text-[0.7rem] text-gray-500'>Train your skill</div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default AdminRightbar