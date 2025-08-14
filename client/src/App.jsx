import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import AddBlog from './pages/admin/AddBlog'
import ListBlog from './pages/admin/ListBlog'
import Comment from './pages/admin/Comment'
import Login from './components/admin/Login'
import 'quill/dist/quill.snow.css'
import {Toaster} from "react-hot-toast";
import { useAppContext } from './context/AppContext'
import UserLogin from './pages/UserLogin'
import { useUser } from "@clerk/clerk-react";
import Profile from './pages/Profile'
import AdminRoute from './components/admin/AdminRoute'
import RedirectAfterLogin from './components/RedirectAfterLogin'
import UserAddBlog from './pages/UserAddBlog'


const App = () => {
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:id' element={<Blog/>}/>
        <Route path='/userlogin' element={<UserLogin/>}/>
        <Route path="/login-redirect" element={<RedirectAfterLogin />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="addBlog" element={<UserAddBlog/>} /> 
        </Route>
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Layout />
            </AdminRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="addBlog" element={<AddBlog />} />
          <Route path="listBlog" element={<ListBlog />} />
          <Route path="comments" element={<Comment />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
