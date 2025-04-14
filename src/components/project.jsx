// import React from 'react';
import Projectpic from '../assets/download0.jpg';
import Projectpic1 from '../assets/download1.jpg';
import Projectpic2 from '../assets/inventory.jpeg';
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
                Hospital Management System
              </h2>
              <a href="#" className='text-base font-medium'>Subheading</a>
              <p className='mt-2 text-slate-500'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, enim est accusantium soluta modi a, consequuntur repellat eos numquam.
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
              <a href="#" className='text-base font-medium'>Subheading</a>
              <p className='mt-2 text-slate-500'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, enim est accusantium soluta modi a, consequuntur repellat eos numquam.
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
                Inventory Management System
              </h2>
              <a href="#" className='text-base font-medium'>Subheading</a>
              <p className='mt-2 text-slate-500'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, enim est accusantium soluta modi a, consequuntur repellat eos numquam.
              </p>
            </div>
            <div className='p-4'>
              <img
                className='rounded-full w-40 h-40 object-cover'
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
                POS Management System
              </h2>
              <a href="#" className='text-base font-medium'>Subheading</a>
              <p className='mt-2 text-slate-500'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, enim est accusantium soluta modi a, consequuntur repellat eos numquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
