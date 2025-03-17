import React from 'react'
import AdminSidebar from '../components/dashboard/AdminSidebar'
import AdminSummary from '../components/dashboard/AdminSummary'
import AdminRightbar from '../components/dashboard/AdminRightbar'
// import Navbar from '../components/dashboard/Navbar'

const AdminDashboard = () => {
  return (
    <div className='grid grid-cols-8 md:grid-cols-1'>
      <div className=''>
        <AdminSidebar />
      </div>
      <div className='h-full col-span-5'>
        <AdminSummary />
      </div>
      <div className='bg-gray-100 h-full mt-4 mr-4 mb-4 flex justify-center col-span-2 md:ml-6 sm:hidden'>
        <AdminRightbar />
      </div>
    </div>   
  )
}

export default AdminDashboard