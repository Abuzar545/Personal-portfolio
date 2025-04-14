

// import React from 'react';
// import { BsFacebook, BsLinkedin, BsTwitter, BsInstagram, BsGithub} from 'react-icons/bs';
// import Heropic from '../assets/download.jpg'; // Ensure the path is correct

// export default function Hero() {
//   return (
//     <section className="">
//        <div className='flex flex-col lg:flex-row justify-around text-white p-10 space-y-10 lg:space-y-0 lg:space-x-10 items-center'>
//           {/* Left Section */}
//       <div className="w-full lg:w-1/3 text-center lg:text-left">
//         <p className="text-slate-300 text-3xl md:text-4xl mb-3">I'm</p>
//         <h1 className="text-5xl md:text-6xl font-bold">Abuzar Ghaffari</h1>
//         <hr className="my-4 border-slate-500" />
//         <p className="mt-6 text-slate-300 font-sans text-base md:text-lg">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maxime consequatur beatae.
//           Fugit veniam ducimus iure maiores minus corporis quibusdam.
//         </p>
//       </div>

//       {/* Middle Section (Image) */}
//       <div className="w-2/3 sm:w-1/2 md:w-1/3 flex justify-center">
//         <img
//           src={Heropic}
//           alt="Hero"
//           className="rounded-full border-8 border-white w-60 h-60 object-cover"
//         />
//       </div>
//        </div>
//        <div className='flex flex-col lg:flex-row justify-around text-white p-10 space-y-10 lg:space-y-0 lg:space-x-10 items-center'>
//          {/* Right Section (About + Socials) */}
//         <div className="w-full lg:w-1/3 text-center lg:text-left">
//         <p className="text-3xl md:text-4xl mb-4">About Me</p>
//         <p className="text-slate-300 mb-4">
//           Let's build quality in programming and design with our services.
//         </p>
//         <button className="bg-white text-indigo-600 px-10 py-2 rounded-full hover:bg-indigo-800 hover:text-white transition">
//           See more...
//         </button>
//         <div className="flex justify-center lg:justify-start  space-x-5 text-3xl mt-5 cursor-pointer">
//           <BsFacebook size={40} className="border-4  hover:border-indigo-800 rounded-full" />
//           <BsLinkedin size={40} className="border-4 hover:border-indigo-800 rounded-full" />
//           <BsTwitter size={40} className="border-4 hover:border-indigo-800 rounded-full" />
//           <BsInstagram size={40} className="border-4 hover:border-indigo-800 rounded-full" />
//           <BsGithub size={40} className="border-4 hover:border-indigo-800 rounded-full" />
//         </div>
//        </div>
//        <div className='w-full lg:w-1/3 text-center lg:text-left'>
//        <p className="text-3xl md:text-4xl mb-4">Education</p>
//        <p className="text-slate-300 mb-4">
          
//         </p>
//        </div>

//       </div>
      
      

     
//     </section>
//   );
// }


import React from 'react';
import { BsFacebook, BsLinkedin, BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';
import Heropic from '../assets/personal.jpg'; // Ensure the path is correct


export default function Hero() {
  return (
    <section className="">
      <div className='flex flex-col lg:flex-row justify-around text-white p-10 space-y-10 lg:space-y-0 lg:space-x-10 items-center'>
        {/* Left Section */}
        <div className="w-full lg:w-1/3 text-center lg:text-left ">
          <p className="text-slate-300 text-2xl md:text-4xl mb-3">I'm</p>
          <h1 className="text-5xl md:text-6xl font-bold">Abuzar Ghaffari</h1>
          <hr className="my-4 border-slate-500" />
          <p className="mt-6 text-slate-300 font-sans text-base md:text-lg">
          {/* Passionate ReatJs Developer and strong background in web Development. With a deep understanding of ReactJS, I specialize in building dynamic and responsive user interfaces. I am skilled in front-end technologies, including HTML, CSS, JS and REACTJS. I am always eager to learn and stay up-to-date with the latest industry and best practice. My strong analytical skills and attention to detail allow me to write clean and efficient code that enhance the user experience. */}
          I'm a passionate ReactJS developer with a strong background in web development. I focus on creating dynamic and responsive user interfaces using HTML, CSS, JavaScript, and ReactJS. I'm always eager to learn new things and keep up with the latest trends. I write clean, efficient code and pay close attention to detail to improve the user experience.
          </p>
        </div>

        {/* Middle Section (Image) */}
        <div className="w-2/3 sm:w-1/2 md:w-1/3 flex justify-center">
          <img
            src={Heropic}
            alt="Hero"
            className="rounded-full border-4 border-white w-100 h-100 object-cover"
          />
        </div>
      </div>

      <div className='flex flex-col lg:flex-row justify-around text-white p-10 space-y-10 lg:space-y-0 lg:space-x-10 items-center'>
        {/* Right Section (About + Socials) */}
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <p className="text-3xl md:text-4xl mb-4">About Me</p>
          <p className="text-slate-300 mb-4">
            Let's build quality in programming and design with our services.
          </p>
          <button className="bg-white text-indigo-600 px-10 py-2 rounded-full hover:bg-indigo-800 hover:text-white transition">
            See more...
          </button>
          <div className="flex justify-center lg:justify-start space-x-5 text-3xl mt-5 cursor-pointer">
            <BsFacebook size={40} className="border-4 hover:border-indigo-800 rounded-full" />
            <BsLinkedin size={40} className="border-4 hover:border-indigo-800 rounded-full" />
            <BsTwitter size={40} className="border-4 hover:border-indigo-800 rounded-full" />
            <BsInstagram size={40} className="border-4 hover:border-indigo-800 rounded-full" />
            <BsGithub size={40} className="border-4 hover:border-indigo-800 rounded-full" />
          </div>
        </div>

        {/* Education Section */}
        <div className='w-full lg:w-1/3 text-center lg:text-left'>
          <p className="text-3xl md:text-4xl mb-4">Education</p>
          <p className="text-slate-300 mb-2">
            <strong>FSc Pre-Engineering</strong> <br />
            The Pearl College, Nowshera <br />
            2018 - 2020
          </p>
          <p className="text-slate-300">
            <strong>Bachelor's in Information Technology</strong> <br />
            University of Agriculture, Peshawar <br />
            2021 - 2025
          </p>
        </div>
      </div>
    </section>
  );
}
