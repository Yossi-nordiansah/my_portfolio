import { useState, useEffect } from "react";
import foto from '../assets/img.png';
import view from "../assets/icons/view.svg";
import yayasan from "../assets/icons/course.svg";
import education from "../assets/icons/education-cap-svgrepo-com.svg";
import work from "../assets/icons/work.svg";
import wa from '../assets/image/icons8-whatsapp-48.png';
import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Main = () => {

    useEffect(() => {
        AOS.init();
      }, []);

    const pdfURL = 'https://drive.google.com/file/d/14qRNj7FRRGf4uO_BumBolqf8tzw0SXxM/view?usp=sharing';
    const [showContact, setShowContact] = useState(false);
    return (
        <main className=" w-full min-w-full sm:pt-24 xs:pt-20 pt-16 bg-gradient-to-b grid grid-rows-[auto_auto_auto_auto_30px_auto] gap-y-3 from-blue-950 to-blue-800">
            <div className="relative">
            <TypeAnimation
                sequence={[
                    'Hallo...',
                    1000, 
                    'Wellcome To My Portfolio',
                    1000,
                    'My Name is Yossi Nordiansah',
                    1000,
                    'I am a Junior Front-End Web Developer',
                    1000
                ]}
                wrapper="h1"
                speed={50}
                cursor={false}
                repeat={0}
                className="absolute font-kanit lg:text-4xl sm:text-4xl sm:text-left xs:text-[22px] xs:leading-[28px] text-[18px] xl:pl-32 lg:pl-14 md:pl-10 sm:pl-8 xs:pl-5 pl-5  text-sky-400 tracking-wider font-bold drop-shadow-[0_0px_15px_#0066ff]"
            />
            </div>

            {/* <!-- intro --> */}
            <div className="xl:w-4/5 lg:w-[90%] mx-auto lg:mt-16 sm:mt-14  xs:mt-14 mt-10 flex lg:flex-row flex-col-reverse justify-between items-center " id="about">
                <div className="lg:w-8/12 w-[90%] overflow-x-hidden">
                    <p className="font-inter sm:text-xl xs:text-lg text-sm lg:w-full md:w-full xs:font-semibold sm:first-letter:text-6xl xs:first-letter:text-4xl xxs:first-letter:text-2xl text-slate-200 text-justify overflow-x-hidden" data-aos="fade-right" data-aos-delay="300" data-aos-once='true'>
                        Hello, My name is <span className="text-blue-400 font-poppins">Yossi Nordiansah</span>, I am a Junior Front-End Web Developer who works with React.js Library or Vanilla JavaScript.  I am also accustomed to using Git and GitHub for Collaborative teamwork. Currently, I reside in the city of Mojokerto and am an active student at one of the private universities located there. At the moment, I have gained experience working on various projects, ranging from simple to mid-scale websites, with Attractive and Responsive designs.
                    </p>
                    <div className="mt-7 flex gap-3">
                        <a href={pdfURL} target="_blank" download="Yossi Nordiansah Resume" className="border-2 border-dashed hover:bg-stone-500 flex items-center gap-2 justify-center rounded-lg w-fit cursor-pointer bg-white/30 border-yellow-400 py-1 px-3">
                            <img src={view} className='sm:w-6 w-4 ' alt="" />
                            <p className="text-white md:text-sm sm:text-[12px] xs:text-[10px] text-[8px] text-center">VIEW RESUME</p>
                        </a>
                    </div>
                </div>
                <div className="border-8 border-blue-300 overflow-hidden overflow-x-hidden rounded-full drop-shadow-[0_0px_15px_#0066ff] sm:h-72 sm:w-72 w-56 h-56" data-aos="fade-left" data-aos-delay="300" data-aos-once='true'>
                    <img className="xs:w-66 mx-auto bg-gradient-to-b to-blue-950 to from-blue-600" src={foto} alt="" />
                </div>
            </div>

            {/* <!-- Education --> */}
            <div className="xl:w-4/5 w-[90%] xl:mt-24 mt-20 m-auto justify-between mobile-sm:flex-col laptop:flex-row items-center" id="education">
                <h1 className=" font-poppins font-bold text-4xl text-blue-300 text-left">Education</h1>
                <div className="lg:pl-6 mt-10" data-aos="fade-up" data-aos-delay="200" data-aos-once='true'>
                    <img src={yayasan} alt="" className="w-6" />
                    <div className="border-l-2 border-white ml-3 mt-2 xs:h-20 h-28 leading-5">
                        <div className="ml-10 text-white flex flex-col lg:gap-3 gap-2 relative -top-9">
                            <h1 className="lg:text-2xl sm:text-xl xs:text-base font-bold">Yayasan Adipurna Inovasi Asia &#40;Kampus Merdeka Program&#41;</h1>
                            <p className="sm:text-base text-sm">August 2023 - December 2023</p>
                            <p className="font-bold xs:text-base text-sm">Front End Web Developer</p>
                        </div>
                    </div>
                    <img src={education} alt="" className="w-6 mt-4" />
                    <div className="border-l-2 border-white ml-3 mt-2 xs:h-16 h-20">
                        <div className="ml-10 text-white flex flex-col lg:gap-3 gap-2 relative -top-9">
                            <h1 className="lg:text-2xl text-xl font-bold leading-6">Universitas Islam Majapahit</h1>
                            <p className="sm:text-base text-sm">2020 - Present</p>
                            <p className="font-bold xs:text-base text-sm">Informatics Engineering</p>
                        </div>
                    </div>
                    <img src={education} alt="" className="w-6 mt-4" />
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
            <div className="xl:w-4/5 w-[90%] mt-20 mx-auto justify-between relative overflow-y-hidden pb-1" id="education">
                <h1 className="font-poppins pl-0 font-bold xs:text-4xl text-3xl text-blue-300 text-left">Work Experience</h1>
                <div className="lg:pl-6 mt-10"  data-aos="fade-up" data-aos-delay="200" data-aos-once='true'>
                    <img src={work} alt="" className="w-6" />
                    <div className="border-l-2 border-white ml-3 mt-2 h-26">
                        <div className="ml-10 text-white flex flex-col gap-4 relative -top-9">
                            <h1 className="lg:text-2xl text-xl font-bold leading-6">PT Wezzo Sukses Mandiri</h1>
                            <p className="font-semibold">Full Time Job</p>
                            <p className="font-semibold">2021</p>
                            <p className="font-bold">Cleaning Service</p>
                        </div>
                    </div>
                    <img src={work} alt="" className="w-6 mt-4" />
                    <div className="border-l-2 border-white ml-3 mt-2 h-26">
                        <div className="ml-10 text-white flex flex-col gap-3 relative -top-9">
                            <h1 className="lg:text-2xl text-xl font-bold leading-6">PT Prada Karya Perkasa</h1>
                            <p className="font-semibold">Full Time Job</p>
                            <p className="font-semibold">2020</p>
                            <p className="font-bold">Helper Thermo</p>
                        </div>
                    </div>
                    <img src={work} alt="" className="w-6 mt-4" />
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
            <div className="fixed right-6 bottom-9 animate-bounce" title="click to contact me" data-aos="fade-down" data-aos-delay="200" data-aos-once='true'>
                <a target="_blank" href="https://wa.me/6285655230897"><img src={wa} alt="" /></a>
            </div>
        </main>
    )
}

export default Main;