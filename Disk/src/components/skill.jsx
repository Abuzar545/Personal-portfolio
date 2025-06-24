// import React from 'react';

// export default function Skills() {
//   const skills = [
//     'ReactJs',
//     'Tailwind',
//     'HTML & CSS',
//     'JavaScript & Bootstrap 5',
//     'Git & GitHub',
//     'PHP',
//     'NodeJs',
//     'SQL',
//     'MongoDB',
    
//   ];

//   return (
//     <div className='bg-indigo-800 text-white py-12 px-6 md:px-12 m-10 rounded-xl'>
//       <h2 className="text-4xl font-bold text-center mb-10">My Skills</h2>
//       <div className='flex flex-wrap justify-center gap-6'>
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className='bg-white text-indigo-800 w-64 p-6 rounded-xl shadow-lg ring-1 ring-black/5 hover:scale-105 transform transition duration-300 text-center font-semibold text-lg'
//           >
//             {skill}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React from 'react';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaPhp,
  FaNodeJs,
  FaDatabase
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

const skills = [
  { name: 'ReactJs', icon: <FaReact size={28} className="text-cyan-400" />, level: 90 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={28} className="text-blue-300" />, level: 85 },
  { name: 'HTML & CSS', icon: <FaHtml5 size={28} className="text-orange-500" />, level: 95 },
  { name: 'JavaScript', icon: <FaJsSquare size={28} className="text-yellow-400" />, level: 80 },
//   { name: 'Bootstrap 5', icon: <FaBootstrap size={28} className="text-purple-500" />, level: 80 },
  { name: 'Git & GitHub', icon: <FaGitAlt size={28} className="text-red-500" />, level: 85 },
  { name: 'PHP', icon: <FaPhp size={28} className="text-indigo-600" />, level: 60 },
  { name: 'NodeJs', icon: <FaNodeJs size={28} className="text-green-500" />, level: 65},
  { name: 'SQL', icon: <FaDatabase size={28} className="text-gray-400" />, level: 70 },
  { name: 'MongoDB', icon: <SiMongodb size={28} className="text-green-600" />, level: 65 },
];

export default function Skills() {
  return (
    <div className='bg-indigo-800 text-white py-12 px-6 md:px-12 m-10 rounded-xl'>
      <h2 className="text-4xl font-bold text-center mb-10">My Skills</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='bg-white text-indigo-900 p-6 rounded-xl hover:animate-pulse shadow-md hover:shadow-xl transition duration-300 group'
          >
            <div className='flex items-center gap-4 mb-4 '>
              <div className="transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>
            <div className="w-full bg-indigo-100 rounded-full h-3">
              <div
                className="bg-indigo-600 h-3 rounded-full transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              />
            </div>
            <p className="mt-2 text-sm text-right text-slate-500">{skill.level}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
