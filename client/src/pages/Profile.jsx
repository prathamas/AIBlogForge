import React from 'react'
import { useClerk } from "@clerk/clerk-react";
import Sidebar from '../components/admin/Sidebar';
import { Outlet } from 'react-router-dom';
import logo from '../assets/logonn.png';
import UserAddBlog from './UserAddBlog';
import { useNavigate } from "react-router-dom";
const Profile = () => {
    const navigate = useNavigate();
    const { signOut } = useClerk();
    
    const handleLogout = async () => {
        await signOut();
    };
  return (
    <>
        <div className='flex items-center justify-between py-2 h-[70px] px-4 sm:px-12
        border-b border-gray-200'>
            <img src={logo} alt="" className='w-32 sm:w-40 cursor-pointer'
             onClick={()=> navigate('/')}/>
             <button onClick={handleLogout} className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer'>Logout</button>
        </div>
        <div >
            <UserAddBlog/>
            <Outlet/>
        </div>
    </>
  )
}

export default Profile
