import React, { useState } from 'react';
import { CgNametag } from 'react-icons/cg';
import { AiOutlineMenu } from 'react-icons/ai';

const Nov = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* Navbar container */}
      <div className='flex items-center justify-between p-10 lg:flex-row'>
        {/* Logo */}
        <div>
          <a href="#" className='text-white font-mono text-3xl tracking-wider flex items-center'>
            <CgNametag className='mr-2' /> ABUZAR
          </a>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-4'>
          <a href="#" className='text-white text-xl hover:bg-indigo-800 rounded-full px-5 py-2'>Skill</a>
          <a href="#" className='text-white text-xl hover:bg-indigo-800 rounded-full px-5 py-2'>Project</a>
          <a href="#" className='text-white text-xl hover:bg-indigo-800 rounded-full px-5 py-2'>Testimonials</a>
        </div>

        {/* Mobile Menu Icon */}
        <div className='md:hidden'>
          <AiOutlineMenu
            size={30}
            onClick={() => setToggle(!toggle)}
            className='text-white cursor-pointer'
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {toggle && (
        <div className='md:hidden bg-gray-900 p-5'>
          <ul className='space-y-4'>
            <li className='text-white text-xl cursor-pointer'>Skill</li>
            <li className='text-white text-xl cursor-pointer'>Project</li>
            <li className='text-white text-xl cursor-pointer'>Testimonials</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Nov;
