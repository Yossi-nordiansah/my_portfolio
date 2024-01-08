import { useState } from "react";
import foto from '/image/img.png'

const Main = () => {

    const [showContact, setShowContact] = useState(false)

    const receiveData = (value) => {
        setShowContact(true)
    }

    return (
        <main className=" w-full mobile-sm:min-w-full mobile-sm:pt-28 bg-gradient-to-b grid grid-rows-[100px_auto_auto_auto_30px_auto] mobile-sm:gap-y-8 from-blue-950 to-blue-800">
            <h1 className="font-kanit laptop:text-6xl mobile-sm:text-4xl laptop:pl-10 mobile-sm:pl-5 pt-5 text-sky-400 tracking-wider font-bold drop-shadow-[0_0px_15px_#0066ff]">Wellcome To My Portfolio</h1>

            {/* <!-- intro --> */}
            <div className="laptop:w-4/5 m-auto flex laptop:flex-row mobile-sm:flex-col-reverse mobile-sm:w-full justify-between items-center " id="about">
                <div className="laptop:w-8/12 mobile-sm:w-11/12">
                    <p className="font-inter laptop:text-xl font-semibold laptop:first-letter:text-6xl mobile-sm:first-letter:text-4xl text-slate-200 text-justify">
                        Hello, My name is <span className="text-blue-400 font-poppins">Yossi Nordiansah</span>, I am a Junior Front-End Web Developer who works with React.js Library or Vanilla JavaScript.  I am also accustomed to using Git and GitHub for Collaborative teamwork. Currently, I reside in the city of Mojokerto and am an active student at one of the private universities located there. At the moment, I have gained experience working on various projects, ranging from simple to mid-scale websites, with Attractive and Responsive designs.
                    </p>
                    <div className="mt-7 flex gap-3">
                        <div className="border-2 border-dashed flex items-center justify-center gap-2 hover:bg-stone-500 rounded-lg w-[30%] cursor-pointer bg-white/30 border-yellow-400 py-1">
                            <img src="icons/download.svg" className='w-6' alt="" />
                            <p className="text-white font-semibold font-poppins">DOWNLOAD RESUME</p>
                        </div>
                        <div className="border-2 border-dashed hover:bg-stone-500 flex items-center gap-2 justify-center rounded-lg w-[30%] cursor-pointer bg-white/30 border-yellow-400 py-1">
                            <img src="icons/view.svg" className='w-6' alt="" />
                            <p className="text-white font-semibold font-poppins text-center">VIEW RESUME</p>
                        </div>
                    </div>
                </div>
                <div className="border-8 border-blue-300 overflow-hidden rounded-full drop-shadow-[0_0px_15px_#0066ff] h-72 w-72 ">
                    <img className="w-66 mx-auto bg-gradient-to-b to-blue-950 to from-blue-600" src={foto} alt="" />
                </div>
            </div>

            {/* <!-- Education --> */}
            <div className="laptop:w-4/5 mobile:w-11/12 mt-40 m-auto justify-between mobile-sm:flex-col laptop:flex-row items-center" id="education">
                <h1 className=" font-poppins mobile-sm:pl-4 laptop:pl-0 font-bold text-4xl text-blue-300 text-left">Education</h1>
                <div className="pl-6 mt-10">
                    <img src="icons/course.svg" alt="" className="w-6"/>
                    <div className="border-l-2 border-white ml-3 mt-2 h-20">
                        <div className="ml-10 text-white flex flex-col gap-3 relative -top-9">
                            <h1 className="text-2xl font-bold">Yayasan Adipurna Inovasi Asia &#40;Kampus Merdeka Program&#41;</h1>
                            <p className="font-semibold">August 2023 - December 2023</p>
                            <p className="font-bold">Front End Web Developer</p>
                        </div>
                    </div>
                    <img src="icons/education-cap-svgrepo-com.svg" alt="" className="w-6 mt-4"/>
                    <div className="border-l-2 border-white ml-3 mt-2 h-20">
                        <div className="ml-10 text-white flex flex-col gap-3 relative -top-9">
                            <h1 className="text-2xl font-bold">Universitas Islam Majapahit</h1>
                            <p className="font-semibold">2020 - Present</p>
                            <p className="font-bold">Informatics Engineering</p>
                        </div>
                    </div>
                    <img src="icons/education-cap-svgrepo-com.svg" alt="" className="w-6 mt-4"/>
                    <div className="border-l-2 border-white ml-3 mt-2 h-16">
                        <div className="ml-10 text-white flex flex-col gap-3 relative -top-9">
                            <h1 className="text-2xl font-bold">SMAN 1 Kutorejo</h1>
                            <p className="font-semibold">2015 - 2018</p>
                            <p className="font-bold">Majoring Science</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Work Experience --> */}
            <div className="laptop:w-4/5 mobile:w-11/12 mt-32 m-auto justify-between mobile-sm:flex-col laptop:flex-row items-center" id="education">
                <h1 className=" font-poppins mobile-sm:pl-4 laptop:pl-0 font-bold text-4xl text-blue-300 text-left">Work Experience</h1>
                <div className="pl-6 mt-10">
                    <img src="icons/work.svg" alt="" className="w-6"/>
                    <div className="border-l-2 border-white ml-3 mt-2 h-26">
                        <div className="ml-10 text-white flex flex-col gap-4 relative -top-9">
                            <h1 className="text-2xl font-bold">PT Wezzo Sukses Mandiri</h1>
                            <p className="font-semibold">Full Time Job</p>
                            <p className="font-semibold">2021</p>
                            <p className="font-bold">Cleaning Service</p>
                        </div>
                    </div>
                    <img src="icons/work.svg" alt="" className="w-6 mt-4"/>
                    <div className="border-l-2 border-white ml-3 mt-2 h-26">
                        <div className="ml-10 text-white flex flex-col gap-3 relative -top-9">
                            <h1 className="text-2xl font-bold">PT Prada Karya Perkasa</h1>
                            <p className="font-semibold">Full Time Job</p>
                            <p className="font-semibold">2020</p>
                            <p className="font-bold">Helper Thermo</p>
                        </div>
                    </div>
                    <img src="icons/work.svg" alt="" className="w-6 mt-4"/>
                    <div className="border-l-2 border-white ml-3 mt-2 h-24">
                        <div className="ml-10 text-white flex flex-col gap-3 relative -top-9">
                            <h1 className="text-2xl font-bold">Yudi Shoes</h1>
                            <p className="font-semibold">Full Time Job</p>
                            <p className="font-semibold">2018 - 2019</p>
                            <p className="font-bold">Shoemaker</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;