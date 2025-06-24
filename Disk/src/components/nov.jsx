import React, { useState } from 'react';
import { CgNametag } from 'react-icons/cg';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Nov = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* Navbar container */}
      <div className='flex items-center justify-between p-10 lg:flex-row text-black bg-indigo-900'>
        {/* Logo */}
        <div>
          <a href="#" className='text-white font-mono text-3xl tracking-wider flex items-center'>
            <CgNametag className='mr-2' /> ABUZAR
          </a>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-4'>
          <Link to="" className='text-white text-xl hover:bg-indigo-800 rounded-full px-5 py-2'><a href="/Skill">Skill</a></Link>
          <Link to="" className='text-white text-xl hover:bg-indigo-800 rounded-full px-5 py-2'>Project</Link>
          <a href="#" className='text-white text-xl hover:bg-indigo-800 rounded-full px-5 py-2'><Link to="/Resume">Resume</Link></a>
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
            <li className='text-white text-xl cursor-pointer'><Link to="">Skill</Link></li>
            <li className='text-white text-xl cursor-pointer'><Link>Project</Link></li>
            <li className='text-white text-xl cursor-pointer'><Link to="/Resume">Resume</Link></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Nov;
