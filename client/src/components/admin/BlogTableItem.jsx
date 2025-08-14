import React from 'react'
import { assets } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';
import { useAuth } from "@clerk/clerk-react";
import toast from 'react-hot-toast';

const BlogTableItem = ({ blog, fetchBlogs, index }) => {
  const { axios } = useAppContext();
  const { getToken } = useAuth(); // Clerk JWT

  const deleteBlog = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (!confirmDelete) return;

    try {
      const token = await getToken();
      const { data } = await axios.post('/api/blog/delete', { id: blog._id }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (data.success) {
        toast.success(data.message);
        await fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const togglePublish = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.post('/api/blog/toggle-publish', { id: blog._id }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (data.success) {
        toast.success(data.message);
        await fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const BlogDate = new Date(blog.createdAt);

  return (
    <tr className='border-y border-gray-300'>
      <td className='px-2 py-4'>{index}</td>
      <td className='px-2 py-4'>{blog.title}</td>
      <td className='px-2 py-4 max-sm:hidden'>{BlogDate.toDateString()}</td>
      <td className='px-2 py-4 max-sm:hidden'>
        <p className={`${blog.isPublished ? "text-green-600" : "text-orange-700"}`}>
          {blog.isPublished ? 'Published' : 'Unpublished'}
        </p>
      </td>
      <td className='px-2 py-4 flex text-xs gap-3'>
        <button onClick={togglePublish} className='border px-2 py-0.5 mt-1 rounded cursor-pointer'>
          {blog.isPublished ? 'Unpublish' : 'Publish'}
        </button>
        <img src={assets.cross_icon} alt="" className='w-8 hover:scale-110 transition-all cursor-pointer' onClick={deleteBlog} />
      </td>
    </tr>
  );
};

export default BlogTableItem;
