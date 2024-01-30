import React from 'react';
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import js from "../assets/icons/js.svg";
import tailwind from "../assets/icons/tailwind.svg";
import bootstrap from "../assets/icons/bootstrap.svg";
import react from "../assets/icons/react.svg";
import git from "../assets/image/Git.png";
import mysql from "../assets/icons/mysql.svg";


const Skills = () => {
  return (
      <div className="laptop:pt-24 min-h-screen w-full mobile-sm:min-w-full mobile-sm:py-28 bg-gradient-to-b from-blue-950 to-blue-800">
          <h1 className="font-poppins font-bold text-4xl text-center text-blue-300">Skills</h1>
          <div className='border-4 border-blue-600 w-[65%] mx-auto flex px-3 py-6 justify-center gap-6 flex-wrap rounded-lg mt-10'>

            {/* Card */}
            <div className='h-44 w-44 hover:scale-125 transition-all delay-100 transition-1 bg-white/20 px-4 py-4 backdrop-blur rounded-md'>
                <img src={html} alt="" className='h-32 w-32 mx-auto'/>
                <p className='text-center text-lg font-poppins font-bold mt-1 text-white'>html 5</p>
            </div>
            <div className='h-44 w-44 hover:scale-125 transition-all delay-100 bg-white/20 px-4 py-4 backdrop-blur rounded-md'>
                <img src={css} alt="" className='h-32 w-32 mx-auto'/>
                <p className='text-center text-lg font-poppins font-bold mt-1 text-white'>CSS 3</p>
            </div>
            <div className='h-44 w-44 hover:scale-125 transition-all delay-100 bg-white/20 px-4 py-4 backdrop-blur rounded-md'>
                <img src={js} alt="" className='h-32 w-32 mx-auto'/>
                <p className='text-center text-lg font-poppins font-bold mt-1 text-white'>Javascript</p>
            </div>
            <div className='h-44 w-44 hover:scale-125 transition-all delay-100 bg-white/20 px-4 py-4 backdrop-blur rounded-md'>
                <img src={tailwind} alt="" className='h-32 w-32 mx-auto'/>
                <p className='text-center text-lg font-poppins font-bold mt-1 text-white'>Tailwind</p>
            </div>
            <div className='h-44 w-44 hover:scale-125 transition-all delay-100 bg-white/20 px-4 py-4 backdrop-blur rounded-md'>
                <img src={bootstrap} alt="" className='h-32 w-32 mx-auto'/>
                <p className='text-center text-lg font-poppins font-bold mt-1 text-white'>Bootstrap</p>
            </div>
            <div className='h-44 w-44 hover:scale-125 transition-all delay-100 bg-white/20 px-4 py-4 backdrop-blur rounded-md'>
                <img src={react} alt="" className='h-32 w-32 mx-auto'/>
                <p className='text-center text-lg font-poppins font-bold mt-1 text-white'>React.js</p>
            </div>
            <div className='h-44 w-44 hover:scale-125 transition-all delay-100 bg-white/20 px-4 py-4 backdrop-blur rounded-md'>
                <img src={git} alt="" className='h-32 w-32 mx-auto'/>
                <p className='text-center text-lg font-poppins font-bold mt-1 text-white'>Git & Github</p>
            </div>
            <div className='h-44 w-44 hover:scale-125 transition-all delay-100 bg-white/20 px-4 py-4 backdrop-blur rounded-md'>
                <img src={mysql} alt="" className='h-32 w-32 mx-auto'/>
                <p className='text-center text-lg font-poppins font-bold mt-1 text-white'>MySQL</p>
            </div>
          </div>
      </div>
  )
}

export default Skills;
