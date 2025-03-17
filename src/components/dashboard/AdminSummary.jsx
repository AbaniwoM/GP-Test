import React from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'
import profileOne from "../../assets/female.png"
import profileTwo from "../../assets/man.png"
import profileThree from "../../assets/businessman.png"
import profileFive from "../../assets/germany.png"
import profileSeven from "../../assets/world.png"
import profileEight from "../../assets/girl.png"
import { IoMdNotificationsOutline, IoIosArrowForward } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { TbChartDonut4 } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import Hamburger from "./Hamburger";


const AdminSummary = () => {
  return (
    <div className='pt-6 pl-6 md:pt-0 md:pl-0 sm:pt-0 sm:pl-0'>
        <div className='hidden sm:flex sm:justify-around md:flex md:justify-around sm:bg-white sm:w-full sm:items-center sm:h-[12vh] sm:gap-[6rem] md:bg-white md:w-full md:items-center md:h-[12vh] md:gap-[30rem] sm:fixed sm:top-0 sm:z-10 md:fixed md:top-0 md:z-10'>
          <div className='flex gap-7'>
            {/* <div className='text-xl'><RxHamburgerMenu /></div> */}
            <div><Hamburger /></div>
            <div className='text-xl pt-1 relative'><CiSearch /></div>
          </div>
          <div className='flex gap-4'>
            <div><img src={profileSeven} className='w-7'/></div>
            <div><img src={profileEight} className='w-7'/></div>
          </div>
        </div>
        <h3 className='text-lg font-medium sm:text-2xl md:text-2xl md:pt-[5.5rem] sm:pt-[5.5rem] md:pl-6'>Progress Dashboard</h3>
        <div className='grid grid-cols-12 mt-6 sm:mt-3 md:mt-3 gap-4 mr-[4rem] sm:mr-5 md:mr-5 md:pl-6 md:grid-cols-1 sm:grid-cols-1'>
            <div className='col-span-6 bg-blue-800 text-white pt-5 pl-4 rounded-md shadow-lg'>
              <div className='flex gap-1 text-[0.6rem]'><div className='text-gray-400'>DEADLINE</div> 12:00</div>
              <div className='text-xl pt-1 pb-1'>Exam - Unit 5</div>
              <div className='text-[0.6rem] text-gray-400 font-light'>Spanish for beginners</div>
              <div className='flex mt-4 mb-5 relative'>
                <img src={profileOne} className='w-6'/>
                <img src={profileTwo} className='w-6 absolute top-0 left-5'/>
                <img src={profileThree} className='w-6 absolute top-0 left-9'/>
                <div className='rounded-full bg-white text-black text-[0.6rem] px-[0.2rem] py-[0.33rem] absolute top-0 left-[3.4rem]'>+99</div>
              </div>
            </div>
            <div className='hidden sm:grid sm:grid-cols-6 sm:text-gray-400 sm:gap-[3.4rem] md:grid md:grid-cols-6 md:text-gray-400 md:gap-[6rem]'>
              <div className='col-span-3'>Custom</div>
              <div className='col-span-3'>Custom</div>
            </div>
            <div className='col-span-6 grid grid-cols-6 gap-4'>
            <div className='col-span-3 bg-yellow-100 pt-5 pl-4 sm:pb-5 md:pb-5 rounded-md'>
              <div className='text-orange-600'><FaRegCheckCircle /></div>
              <div className='text-sm font-medium pt-2'>Homework</div>
              <div className='text-[0.65rem] text-gray-500'>For today's lesson</div>
              <div className='pt-8 lg:pt-4 text-xs'>35 MIN AGO</div>
            </div>
            <div className='col-span-3 bg-blue-100 pt-5 pl-4 rounded-md'>
              <div className='text-blue-600'><FaRegCheckCircle /></div>
              <div className='text-sm font-medium pt-2'>Reading</div>
              <div className='text-[0.65rem] text-gray-500'>24 words per week</div>
              <div className='pt-8 lg:pt-4 text-xs'>2H AGO</div>
            </div>
            </div>
        </div>
        <div className='grid grid-cols-12 mt-8 gap-4 mr-[4rem] sm:mr-5 md:mr-5 md:pl-6 sm:grid-cols-1'>
          <div className='col-span-6 border pt-5 pl-4 pb-5 rounded-md'>
            <div className='flex gap-[16.9rem] xl:gap-[9.5rem] lg:gap-[6.2rem] md:gap-[13.5rem] sm:gap-[11.5rem]'>
              <div className='text-sm'>Group info</div>
              <div className='pt-[0.1rem] text-lg'><IoMdNotificationsOutline /></div>
            </div>
            <div className='text-[0.65rem] text-gray-400'>13 students in the group</div>
            <div className='flex gap-[10.2rem] xl:gap-[3.7rem] lg:gap-[0.7rem] md:gap-[7.5rem] sm:gap-[5.7rem] bg-orange-400 text-white pt-5 pl-4 pb-5 mr-4 mt-4 mb-4 rounded-md'>
              <div>
                <div className='text-sm'>Group homework</div>
                <div className='text-[0.65rem] text-gray-200 font-light pt-2'>4 students from your group <br /> online now</div>
              </div>
              <div className='mt-5 cursor-pointer'><IoIosArrowForward /></div>
            </div>
            <div className='text-sm'>Today's lesson</div>
            <div className='text-[0.65rem] text-gray-500'>unit 6 - Article</div>
          </div>
          <div className='col-span-6 border pt-5 pb-5 rounded-md'>
            <div className='text-sm pl-4'>Overall progress</div>
            <div className='flex gap-[14.2rem] pl-4 pt-7 xl:gap-[7rem] lg:gap-[3.5rem] md:gap-[10rem] sm:gap-[8.8rem]'>
              <div>Germany for <br/> beginners</div>
              <div className='border rounded-full w-10 h-10 shadow-md'>
                <img src={profileFive} className='w-6 pt-[0.4rem] ml-[0.4rem]'/>
              </div>
            </div>
            <div className='border border-solid border-gray-400 w-[90%] lg:w-[86%] sm:w-[93%] ml-4 mt-5'></div>
            <div className='pl-4 text-sm pt-3'>75%</div>
            <div className='border mt-5'></div>
            <div className='flex text-blue-600 justify-end mr-4 mt-5 gap-1 cursor-pointer'>
              <div className='text-sm'>Explore more</div>
              <div className='text-sm mt-1'><IoIosArrowForward /></div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 mt-8 gap-4 mr-[4rem] sm:mr-5 md:mr-5 md:pl-6 sm:grid-cols-1'>
          <div className='col-span-6 border pt-5 pl-4 pb-5 sm:pt-7 sm:pl-6 sm:pb-7 rounded-md flex gap-[11.5rem] xl:gap-[4.5rem] lg:gap-[1.4rem] md:gap-[8.4rem] sm:gap-[6rem]'>
              <div className='flex gap-3'>
              <div className='border rounded-full w-10 h-10 shadow-md'>
                <div className='text-xl pt-[0.5rem] ml-[0.6rem] text-blue-700'>
                  <MdOutlineEdit />
                </div>
              </div>
              <div>
                <div className='text-sm'>Grammar</div>
                <div className='text-[0.7rem] text-gray-500'>+30 grammar rules</div>
              </div>
              </div>
              <div className='text-sm mt-3 text-blue-700 cursor-pointer'><IoIosArrowForward /></div>
          </div>
          <div className='col-span-6 border pt-5 pl-4 pb-5 sm:pt-7 sm:pl-6 sm:pb-7 rounded-md flex gap-[13rem] lg:gap-[2.7rem] xl:gap-[6rem] md:gap-[9.8rem] sm:gap-[7.3rem]'>
            <div className='flex gap-3'>
              <div className='border rounded-full w-10 h-10 shadow-md'>
                <div className='text-xl pt-[0.54rem] ml-[0.55rem] text-blue-700'>
                  <TbChartDonut4 />
                </div>
              </div>
              <div>
                <div className='text-sm'>Dictionary</div>
                <div className='text-[0.7rem] text-gray-500'>+10 new words</div>
              </div>
              </div>
              <div className='text-sm mt-3 text-blue-700 cursor-pointer'><IoIosArrowForward /></div>
          </div>
        </div>
    </div>
  )
}

export default AdminSummary