import React from 'react';
// import Projectpic from '../assets/download0.jpg';
import Projectpic from '../assets/download0.png';
import Projectpic1 from '../assets/download1.jpg';
import Projectpic2 from '../assets/inventory.png';
import Projectpic3 from '../assets/pos.jpeg';

export default function Project() {
  return (
    <div className='bg-indigo-800 max-w-full px-4 py-10 m-10'>
      <div className='text-center mb-10'>
        <h1 className='text-white text-3xl'>Project</h1>
      </div>

      {/* First row */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* Card 1 */}
        <div className='bg-white rounded-xl shadow-md hover:animate-pulse w-full'>
          <div className='flex flex-col md:flex-row items-center'>
            <div className='p-6'>
              <h2 className='uppercase font-semibold tracking-wide text-sm text-indigo-500'>
                Real state Project
              </h2>
              <a href="#" className='text-base font-medium'>SUBHEADING</a>
              <p className='mt-2 text-slate-500'>
                the project is a real estate management system that allows users to manage properties, clients, and transactions efficiently.
              </p>
            </div>
            <div className='p-4'>
              <img
                className='rounded-full w-40 h-40 object-cover'
                src={Projectpic}
                alt="Hospital"
              />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className='bg-white rounded-xl shadow-md hover:animate-pulse w-full'>
          <div className='flex flex-col md:flex-row items-center'>
            <div className='p-4'>
              <img
                className='rounded-full w-40 h-40 object-cover'
                src={Projectpic1}
                alt="School"
              />
            </div>
            <div className='p-6'>
              <h2 className='uppercase font-semibold tracking-wide text-sm text-indigo-500'>
                School Management System
              </h2>
              <a href="#" className='text-base font-medium'>SUBHEADING</a>
              <p className='mt-2 text-slate-500'>
                the school management system is a comprehensive software solution designed to streamline administrative tasks, enhance communication, and improve overall efficiency in educational institutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className='my-10 border-gray-300' />

      {/* Second row */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* Card 3 */}
        <div className='bg-white rounded-xl shadow-md hover:animate-pulse w-full'>
          <div className='flex flex-col md:flex-row items-center'>
            <div className='p-6'>
              <h2 className='uppercase font-semibold tracking-wide text-sm text-indigo-500'>
                smart city dashboard
              </h2>
              <a href="#" className='text-base font-medium'>SUBHEADING  </a>
              <p className='mt-2 text-slate-500'>
                the smart city dashboard is a web-based application that provides real-time data on various aspects of a city, including traffic, weather, and local events. 
              </p>
            </div>
            <div className='p-4'>
              <img
                className='rounded-full w-50 h-40 object-cover'
                src={Projectpic2}
                alt="Inventory"
              />
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className='bg-white rounded-xl shadow-md hover:animate-pulse w-full'>
          <div className='flex flex-col md:flex-row items-center'>
            <div className='p-4'>
              <img
                className='rounded-full w-40 h-40 object-cover'
                src={Projectpic3}
                alt="POS"
              />
            </div>
            <div className='p-6'>
              <h2 className='uppercase font-semibold tracking-wide text-sm text-indigo-500'>
                Brt price table
              </h2>
              <a href="#" className='text-base font-medium'>SUBHEADING</a>
              <p className='mt-2 text-slate-500'>
                the project is a web-based application that provides real-time information on bus prices, routes, and schedules
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
