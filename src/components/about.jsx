import { useState } from "react";
import foto from '../assets/img.png';
import download from "../assets/icons/download.svg";
import view from "../assets/icons/view.svg";
import yayasan from "../assets/icons/course.svg";
import education from "../assets/icons/education-cap-svgrepo-com.svg";
import work from "../assets/icons/work.svg";
import wa from '../assets/image/icons8-whatsapp-48.png';

const Main = () => {

    const [showContact, setShowContact] = useState(false);

    const receiveData = (value) => {
        setShowContact(true)
    }

    return (
        <main className=" w-full min-w-full sm:pt-24 xs:pt-20 pt-16 bg-gradient-to-b grid grid-rows-[auto_auto_auto_auto_30px_auto] gap-y-3 from-blue-950 to-blue-800">
            <h1 className="font-kanit xl:text-6xl lg:text-5xl sm:text-4xl sm:text-left xs:text-[26px] text-lg sm:pl-20 xl:pl-10 text-center text-sky-400 tracking-wider font-bold drop-shadow-[0_0px_15px_#0066ff]">Wellcome To My Portfolio</h1>

            {/* <!-- intro --> */}
            <div className="xl:w-4/5 lg:w-[90%] mx-auto lg:mt-12 sm:mt-5 xs:mt-3 flex lg:flex-row flex-col-reverse justify-between items-center" id="about">
                <div className="lg:w-8/12 w-[90%] ">
                    <p className="font-inter sm:text-xl xs:text-lg xxs:text-base lg:w-full md:w-full font-semibold sm:first-letter:text-6xl xs:first-letter:text-4xl xxs:first-letter:text-2xl text-slate-200 text-justify">
                        Hello, My name is <span className="text-blue-400 font-poppins">Yossi Nordiansah</span>, I am a Junior Front-End Web Developer who works with React.js Library or Vanilla JavaScript.  I am also accustomed to using Git and GitHub for Collaborative teamwork. Currently, I reside in the city of Mojokerto and am an active student at one of the private universities located there. At the moment, I have gained experience working on various projects, ranging from simple to mid-scale websites, with Attractive and Responsive designs.
                    </p>
                    <div className="mt-7 flex gap-3">
                        <div className="border-2 border-dashed flex items-center justify-center gap-2 hover:bg-stone-500 rounded-lg sm:w-[30%] xs:w-[40%] xxs:w-[60%] cursor-pointer bg-white/30 border-yellow-400 sm:py-1 py-2">
                            <img src={download} className='sm:w-6 xxs:w-4' alt="" />
                            <p className="text-white md:text-sm sm:text-[12px] xs:text-[10px] xxs:text-[8px]">DOWNLOAD RESUME</p>
                        </div>
                        <div className="border-2 border-dashed hover:bg-stone-500 flex items-center gap-2 justify-center rounded-lg sm:w-[30%] xs:w-[40%] xxs:w-[60%] cursor-pointer bg-white/30 border-yellow-400 py-1">
                            <img src={view} className='sm:w-6 xxs:w-4 ' alt="" />
                            <p className="text-white md:text-sm sm:text-[12px] xs:text-[10px] xxs:text-[8px] text-center">VIEW RESUME</p>
                        </div>
                    </div>
                </div>
                <div className="border-8 border-blue-300 overflow-hidden rounded-full drop-shadow-[0_0px_15px_#0066ff] sm:h-72 sm:w-72 w-56 h-56 ">
                    <img className="xs:w-66 mx-auto bg-gradient-to-b to-blue-950 to from-blue-600" src={foto} alt="" />
                </div>
            </div>

            {/* <!-- Education --> */}
            <div className="w-4/5 mt-20 m-auto justify-between mobile-sm:flex-col laptop:flex-row items-center" id="education">
                <h1 className=" font-poppins mobile-sm:pl-4 laptop:pl-0 font-bold text-4xl text-blue-300 text-left">Education</h1>
                <div className="lg:pl-6 mt-10">
                    <img src={yayasan} alt="" className="w-6"/>
                    <div className="border-l-2 border-white ml-3 mt-2 lg:h-20 xs:h-20 h-28 leading-5">
                        <div className="ml-10 text-white flex flex-col lg:gap-3 gap-2 relative -top-9">
                            <h1 className="lg:text-2xl sm:text-xl xs:text-base font-bold">Yayasan Adipurna Inovasi Asia &#40;Kampus Merdeka Program&#41;</h1>
                            <p className="sm:text-base text-sm">August 2023 - December 2023</p>
                            <p className="font-bold xs:text-base text-sm">Front End Web Developer</p>
                        </div>
                    </div>
                    <img src={education} alt="" className="w-6 mt-4"/>
                    <div className="border-l-2 border-white ml-3 mt-2 lg:h-20 h-16">
                        <div className="ml-10 text-white flex flex-col lg:gap-3 gap-2 relative -top-9">
                            <h1 className="lg:text-2xl text-xl font-bold leading-6">Universitas Islam Majapahit</h1>
                            <p className="sm:text-base text-sm">2020 - Present</p>
                            <p className="font-bold xs:text-base text-sm">Informatics Engineering</p>
                        </div>
                    </div>
                    <img src={education} alt="" className="w-6 mt-4"/>
                    <div className="border-l-2 border-white ml-3 mt-2 h-16">
                        <div className="ml-10 text-white flex flex-col lg:gap-3 gap-2 relative -top-9">
                            <h1 className="lg:text-2xl text-xl font-bold leading-6">SMAN 1 Kutorejo</h1>
                            <p className="sm:text-base text-sm">2015 - 2018</p>
                            <p className="font-bold xs:text-base text-sm">Majoring Science</p>
                        </div>
                    </div>
                </div>
                <img src="" alt="" />
            </div>

            {/* <!-- Work Experience --> */}
            <div className="w-4/5 mt-20 mx-auto justify-between " id="education">
                <h1 className="font-poppins pl-0 font-bold xs:text-4xl text-3xl text-blue-300 text-left">Work Experience</h1>
                <div className="lg:pl-6 mt-10">
                    <img src={work} alt="" className="w-6"/>
                    <div className="border-l-2 border-white ml-3 mt-2 h-26">
                        <div className="ml-10 text-white flex flex-col gap-4 relative -top-9">
                            <h1 className="lg:text-2xl text-xl font-bold leading-6">PT Wezzo Sukses Mandiri</h1>
                            <p className="font-semibold">Full Time Job</p>
                            <p className="font-semibold">2021</p>
                            <p className="font-bold">Cleaning Service</p>
                        </div>
                    </div>
                    <img src={work} alt="" className="w-6 mt-4"/>
                    <div className="border-l-2 border-white ml-3 mt-2 h-26">
                        <div className="ml-10 text-white flex flex-col gap-3 relative -top-9">
                            <h1 className="lg:text-2xl text-xl font-bold leading-6">PT Prada Karya Perkasa</h1>
                            <p className="font-semibold">Full Time Job</p>
                            <p className="font-semibold">2020</p>
                            <p className="font-bold">Helper Thermo</p>
                        </div>
                    </div>
                    <img src={work} alt="" className="w-6 mt-4"/>
                    <div className="border-l-2 border-white ml-3 mt-2 h-24">
                        <div className="ml-10 text-white flex flex-col gap-3 relative -top-9">
                            <h1 className="lg:text-2xl text-xl font-bold leading-6">Yudi Shoes</h1>
                            <p className="font-semibold">Full Time Job</p>
                            <p className="font-semibold">2018 - 2019</p>
                            <p className="font-bold">Shoemaker</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed md:hidden right-6 bottom-9">
            <a target="_blank" href="https://wa.me/6285655230897"><img src={wa} alt="" /></a>
            </div>
        </main>
    )
}

export default Main;