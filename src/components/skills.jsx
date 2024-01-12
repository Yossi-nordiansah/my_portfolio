import React from 'react'

const Skills = () => {
  return (
      <div className="laptop:pt-24 min-h-screen w-full mobile-sm:min-w-full mobile-sm:py-28 bg-gradient-to-b from-blue-950 to-blue-800">
          <h1 className="font-poppins font-bold text-4xl text-center text-blue-300">Skills</h1>
          <div className='border-4 border-blue-600 w-[60%] mx-auto flex px-3 py-6 justify-center gap-6 flex-wrap rounded-lg mt-10'>

            {/* Card */}
            <div className='h-44 w-44 hover:scale-125 transition-all delay-100 transition-1 bg-white/20 px-4 py-4 backdrop-blur rounded-md'>
                <img src="icons/html.svg" alt="" className='h-32 w-32 mx-auto'/>
                <p className='text-center text-lg font-poppins font-bold mt-1 text-white'>html 5</p>
            </div>
            <div className='h-44 w-44 hover:scale-125 transition-all delay-100 bg-white/20 px-4 py-4 backdrop-blur rounded-md'>
                <img src="icons/css.svg" alt="" className='h-32 w-32 mx-auto'/>
                <p className='text-center text-lg font-poppins font-bold mt-1 text-white'>CSS 3</p>
            </div>
            <div className='h-44 w-44 hover:scale-125 transition-all delay-100 bg-white/20 px-4 py-4 backdrop-blur rounded-md'>
                <img src="icons/js.svg" alt="" className='h-32 w-32 mx-auto'/>
                <p className='text-center text-lg font-poppins font-bold mt-1 text-white'>Javascript</p>
            </div>
            <div className='h-44 w-44 hover:scale-125 transition-all delay-100 bg-white/20 px-4 py-4 backdrop-blur rounded-md'>
                <img src="icons/tailwind.svg" alt="" className='h-32 w-32 mx-auto'/>
                <p className='text-center text-lg font-poppins font-bold mt-1 text-white'>Tailwind</p>
            </div>
            <div className='h-44 w-44 hover:scale-125 transition-all delay-100 bg-white/20 px-4 py-4 backdrop-blur rounded-md'>
                <img src="icons/bootstrap.svg" alt="" className='h-32 w-32 mx-auto'/>
                <p className='text-center text-lg font-poppins font-bold mt-1 text-white'>Bootstrap</p>
            </div>
            <div className='h-44 w-44 hover:scale-125 transition-all delay-100 bg-white/20 px-4 py-4 backdrop-blur rounded-md'>
                <img src="icons/react.svg" alt="" className='h-32 w-32 mx-auto'/>
                <p className='text-center text-lg font-poppins font-bold mt-1 text-white'>React.js</p>
            </div>
            <div className='h-44 w-44 hover:scale-125 transition-all delay-100 bg-white/20 px-4 py-4 backdrop-blur rounded-md'>
                <img src="image/Git.png" alt="" className='h-32 w-32 mx-auto'/>
                <p className='text-center text-lg font-poppins font-bold mt-1 text-white'>Git & Github</p>
            </div>
            <div className='h-44 w-44 hover:scale-125 transition-all delay-100 bg-white/20 px-4 py-4 backdrop-blur rounded-md'>
                <img src="icons/mysql.svg" alt="" className='h-32 w-32 mx-auto'/>
                <p className='text-center text-lg font-poppins font-bold mt-1 text-white'>MySQL</p>
            </div>
          </div>
      </div>
  )
}

export default Skills;

        {/* <!-- Card --> */}
                {/* <div className="w-64 rounded-lg border-4 pt-3 shrink-0 bg-transparent border-blue-400">
                    <img src='icons/html.svg' className="w-full h-60 m-auto bg-white" alt="" />
                    <div className="w-full bg-gradient-to-b from-blue-800 to-blue-950 rounded-b-md mt-5">
                        <h3 className="text-center font-kanit pt-3 text-xl text-slate-300">HTML 5</h3>
                        <div className="w-full flex gap-3 justify-center py-4">
                            <div className="h-4 w-4 rounded-full drop-shadow-[0_0px_15px_#ffff00] bg-yellow-400"></div>
                            <div className="h-4 w-4 rounded-full drop-shadow-[0_0px_15px_#ffff00] bg-yellow-400"></div>
                            <div className="h-4 w-4 rounded-full drop-shadow-[0_0px_15px_#ffff00] bg-yellow-400"></div>
                            <div className="h-4 w-4 rounded-full drop-shadow-[0_0px_15px_#ffff00] bg-yellow-400"></div>
                            <div className="h-4 w-4 rounded-full bg-slate-400"></div>
                        </div>
                    </div>
                </div>           */}