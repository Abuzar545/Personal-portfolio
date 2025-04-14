
import React from 'react';
import Img from '../assets/IMG1.jpg';

export default function Testimonia() {
  return (
    <div className='flex flex-wrap justify-center gap-6 bg-indigo-800  md:p-12 m-10'>
      {[1, 2, 3, 4].map((_, index) => (
        <div
          key={index}
          className='w-full sm:w-3/4 md:w-[45%] lg:w-[30%] xl:w-[22%] bg-white rounded-xl shadow-lg ring-1 ring-black/5 hover:animate-pulse relative overflow-hidden flex items-center gap-4 p-6'
        >
          <img
            src={Img}
            className='absolute -left-4 w-24 h-24 rounded-full shadow-lg'
            alt="testimonial"
          />
          <div className='min-w-0 py-5 pl-28 pr-4'>
            <div className='text-slate-900 font-medium text-sm sm:text-base truncate'>
              Name Goes Here
            </div>
            <div className='text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400'>
              Assistant Manager
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
