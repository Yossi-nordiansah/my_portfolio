import foto from '../assets/img.png';
import logo_vocasia from '../assets/logo-dark.png';
import foto_sd from '../assets/SD.jpg';
import foto_smp from '../assets/smp.jpg';
import foto_sma from '../assets/sma.jpg';
import foto_univ from '../assets/univ.jpg';
import sew from '../assets/sewing-machine_4035640.png';
import thermo from '../assets/cogwheel_1275570.png';
import cleaning from '../assets/cleaning-staff_2316062.png';
import html from '../assets/HTML5.png';
import css3 from '../assets/CSS3_logo.svg.png';
import javascript from '../assets/javascript.png';
import tailwind from '../assets/tailwinss.png';
import react from '../assets/React-icon.png';
import sql from '../assets/sql-transformed.png';
import git from '../assets/Git.png';
import bootstrap from '../assets/bootstrap-logo.png';

const Main = () => {
    return(
        <main className="laptop:py-20 w-full mobile-sm:min-w-full mobile-sm:py-28 bg-gradient-to-b grid grid-rows-[100px_auto_auto_auto_30px_auto] laptop:gap-y-20 mobile-sm:gap-y-12 from-blue-950 to-blue-800">
        <h1 className="font-kanit laptop:text-6xl mobile-sm:text-4xl laptop:pl-10 mobile-sm:pl-5 pt-5 text-sky-400 tracking-wider font-bold drop-shadow-[0_0px_15px_#0066ff]">Wellcome To My Portfolio</h1>

        {/* <!-- About --> */}
        <div className="laptop:w-4/5 m-auto flex laptop:flex-row mobile-sm:flex-col-reverse mobile-sm:w-full justify-between items-center " id="about">
            <div className="laptop:w-8/12 mobile-sm:w-11/12">
                <p className="font-inter laptop:text-xl font-semibold laptop:first-letter:text-6xl mobile-sm:first-letter:text-4xl text-slate-200 text-justify">
                    Hallo nama saya <span className="text-blue-400 font-poppins">Yossi Nordiansah</span> saya berasal dari Kabupaten Mojokerto Jawa Timur. Saya adalah seorang mahasiswa yang sedang menempuh pendidikan di salah satu perguruan tinggi
                    swasta yaitu Universitas Islam Majapahit, di perguruan tinggi tersebut saya mengambil program pendidikan Teknik Informatika dan
                    sekarang saya berada di Semester 5. Untuk saat ini saya sedang mengikuti program dari Kampus Merdeka yaitu Study Independen mempelajari tentang Front
                    End Web Developer pada salah satu Course yaitu <a target="_blank" href="https://vocasia.id/"><img className="w-14 inline -mt-1" src={logo_vocasia} alt=""/></a>
                </p>
            </div>
            <div className="border-8 border-blue-300 overflow-hidden rounded-full drop-shadow-[0_0px_15px_#0066ff] h-60 w-60 ">
                <img className="w-56 mx-auto bg-gradient-to-b to-blue-950 to from-blue-600" src={foto} alt=""/>
            </div>
        </div>

        {/* <!-- Education --> */}
        <div className="laptop:w-4/5 mobile:w-11/12 m-auto flex justify-between mobile-sm:flex-col laptop:flex-row items-center" id="education">
            <h1 className=" font-poppins mobile-sm:pl-4 laptop:pl-0 font-bold text-4xl text-blue-300 text-left">Riwayat Pendidikan</h1>
            <div id="riwayatPendidikan" className="laptop:w-4/5 mobile-sm:w-11/12 mx-auto mb-10 mt-6 bg-blue-700 drop-shadow-[0_0px_15px_#0000ff] text-white rounded-xl p-4">
                <div className="flex justify-between items-center mobile-sm:flex-col laptop:flex-row my-3">
                    <img src={foto_sd} alt="" className="w-32 block float-left rounded-md"/>
                    <p className="text-inter mobile-sm:text-center laptop:text-right font-semibold">Lulus Pendidikan Dasar dari SDN Segunung 1 pada tahun 2012</p>
                </div>
                <div className="flex justify-between items-center my-3 mobile-sm:flex-col laptop:flex-row">
                    <img src={foto_smp} alt="" className="w-32 block float-left rounded-md"/>
                    <p className="text-inter mobile-sm:text-center laptop:text-right font-semibold">Lulus dari SMPN Negeri 1 pada tahun 2015</p>
                </div>
                <div className="flex justify-between items-center my-3 mobile-sm:flex-col laptop:flex-row">
                    <img src={foto_sma} alt="" className="w-32 block float-left rounded-md"/>
                    <p className="text-inter mobile-sm:text-center laptop:text-right font-semibold">Lulus dari SMAN 1 Kutorejo pada tahun 2018</p>
                </div>
                <div className="flex justify-between items-center my-3 mobile-sm:flex-col laptop:flex-row">
                    <img src={foto_univ} alt="" className="w-32 block float-left rounded-md"/>
                    <p className="text-inter mobile-sm:text-center laptop:text-right font-semibold">Mahasiswa Aktif di Universitas Islam Majapahit</p>
                </div>  
            </div>
        </div>

        {/* <!-- Work Experience --> */}
        <div id="workExperience" className="laptop:w-4/5 mobile-sm:w-11/12 mx-auto">
            <h1 className="mb-10 font-poppins font-bold text-4xl text-blue-300">Pengalaman Kerja</h1>
            <div className="flex justify-between items-center my-3 py-2 laptop:flex-row mobile-sm:flex-col bg-blue-400 px-4 rounded-md text-white">
                <h1 className="text-3xl font-bold">Yudi Shoes</h1>
                <div>
                    <img className="w-20 m-auto" src={sew} alt=""/>
                    <p className="text-inter font-semibold">Posisi Penjahit dari tahun 2018 - 2019</p>
                </div>
            </div>
            <div className="flex justify-between items-center my-3 py-2 laptop:flex-row mobile-sm:flex-col bg-blue-400 px-4 rounded-md text-white">
                <h1 className="text-2xl font-bold">PT Top Karya Perkasa</h1>
                <div>
                    <img className="w-20 m-auto" src={thermo} alt=""/>
                    <p className="text-inter font-semibold">Posisi Helper Thermo pada tahun 2020</p>
                </div>
            </div>
            <div className="flex justify-between items-center my-3 py-2 laptop:flex-row mobile-sm:flex-col bg-blue-400 px-4 rounded-md text-white">
                <h1 className="text-2xl font-bold">PT Wezzo Sukses Mandiri</h1>
                <div>
                    <img className="w-20 m-auto" src={cleaning} alt=""/>
                    <p className="text-inter font-semibold">Posisi Cleaning Service pada tahun 2021</p>
                </div>
            </div>
        </div>

        {/* <!-- Skill --> */}
        <h1 className="font-poppins font-bold text-4xl text-center text-blue-300">Kemampuan</h1>
        <div className="w-4/5 mx-auto flex justify-between border-4 bg-gradient-to-b from-blue-800 to-blue-950 overflow-x-auto gap-x-20 py-5 px-5 rounded-lg border-blue-400 drop-shadow-[0_0px_15px_#0000ff]" id="skill">
            {/* <!-- Card --> */}
                <div className="w-64 rounded-lg border-4 pt-3 shrink-0 bg-white border-blue-400">
                    <img src={html} className="w-full h-60 m-auto bg-white" alt=""/>
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
                </div>        
                <div className="w-64 rounded-lg border-4 pt-3 shrink-0 bg-white border-blue-400">
                    <img src={css3} className="w-full h-60 m-auto bg-white" alt=""/>
                    <div className="w-full bg-gradient-to-b from-blue-800 to-blue-950 rounded-b-md mt-5">
                        <h3 className="text-center font-kanit pt-3 text-xl text-slate-300">CSS 3</h3>
                        <div className="w-full flex gap-3 justify-center py-4">
                            <div className="h-4 w-4 rounded-full drop-shadow-[0_0px_15px_#ffff00] bg-yellow-400"></div>
                            <div className="h-4 w-4 rounded-full drop-shadow-[0_0px_15px_#ffff00] bg-yellow-400"></div>
                            <div className="h-4 w-4 rounded-full drop-shadow-[0_0px_15px_#ffff00] bg-yellow-400"></div>
                            <div className="h-4 w-4 rounded-full drop-shadow-[0_0px_15px_#ffff00] bg-yellow-400"></div>
                            <div className="h-4 w-4 rounded-full bg-slate-400"></div>
                        </div>
                    </div>
                </div>        
                <div className="w-64 rounded-lg border-4 pt-3 shrink-0 bg-white border-blue-400">
                    <img src={javascript} className="w-full h-60 m-auto bg-white" alt=""/>
                    <div className="w-full bg-gradient-to-b from-blue-800 to-blue-950 rounded-b-md mt-5">
                        <h3 className="text-center font-kanit pt-3 text-xl text-slate-300">Javascript</h3>
                        <div className="w-full flex gap-3 justify-center py-4">
                            <div className="h-4 w-4 rounded-full drop-shadow-[0_0px_15px_#ffff00] bg-yellow-400"></div>
                            <div className="h-4 w-4 rounded-full drop-shadow-[0_0px_15px_#ffff00] bg-yellow-400"></div>
                            <div className="h-4 w-4 rounded-full drop-shadow-[0_0px_15px_#ffff00] bg-yellow-400"></div>
                            <div className="h-4 w-4 rounded-full bg-slate-400"></div>
                            <div className="h-4 w-4 rounded-full bg-slate-400"></div>
                        </div>
                    </div>
                </div>        
                <div className="w-64 rounded-lg border-4 pt-3 shrink-0 bg-white border-blue-400">
                    <img src={tailwind} className="w-full h-60 m-auto bg-white" alt=""/>
                    <div className="w-full bg-gradient-to-b from-blue-800 to-blue-950 rounded-b-md mt-5">
                        <h3 className="text-center font-kanit pt-3 text-xl text-slate-300">Tailwind</h3>
                        <div className="w-full flex gap-3 justify-center py-4">
                            <div className="h-4 w-4 rounded-full drop-shadow-[0_0px_15px_#ffff00] bg-yellow-400"></div>
                            <div className="h-4 w-4 rounded-full drop-shadow-[0_0px_15px_#ffff00] bg-yellow-400"></div>
                            <div className="h-4 w-4 rounded-full drop-shadow-[0_0px_15px_#ffff00] bg-yellow-400"></div>
                            <div className="h-4 w-4 rounded-full drop-shadow-[0_0px_15px_#ffff00] bg-yellow-400"></div>
                            <div className="h-4 w-4 rounded-full bg-slate-400"></div>
                        </div>
                    </div>
                </div>        
                <div className="w-64 rounded-lg border-4 pt-3 shrink-0 bg-white border-blue-400">
                    <img src={react} className="w-full h-60 m-auto px-2 bg-white" alt=""/>
                    <div className="w-full bg-gradient-to-b from-blue-800 to-blue-950 rounded-b-md mt-5">
                        <h3 className="text-center font-kanit pt-3 text-xl text-slate-300">React JS</h3>
                        <div className="w-full flex gap-3 justify-center py-4">
                            <div className="h-4 w-4 rounded-full drop-shadow-[0_0px_15px_#ffff00] bg-yellow-400"></div>
                            <div className="h-4 w-4 rounded-full drop-shadow-[0_0px_15px_#ffff00] bg-yellow-400"></div>
                            <div className="h-4 w-4 rounded-full drop-shadow-[0_0px_15px_#ffff00] bg-yellow-400"></div>
                            <div className="h-4 w-4 rounded-full bg-slate-400"></div>
                            <div className="h-4 w-4 rounded-full bg-slate-400"></div>
                        </div>
                    </div>
                </div>        
                <div className="w-64 rounded-lg border-4 pt-3 shrink-0 bg-white border-blue-400">
                    <img src={sql} className="w-full h-60 m-auto px-2 bg-white" alt=""/>
                    <div className="w-full bg-gradient-to-b from-blue-800 to-blue-950 rounded-b-md mt-5">
                        <h3 className="text-center font-kanit pt-3 text-xl text-slate-300">My Sql</h3>
                        <div className="w-full flex gap-3 justify-center py-4">
                            <div className="h-4 w-4 rounded-full drop-shadow-[0_0px_15px_#ffff00] bg-yellow-400"></div>
                            <div className="h-4 w-4 rounded-full drop-shadow-[0_0px_15px_#ffff00] bg-yellow-400"></div>
                            <div className="h-4 w-4 rounded-full drop-shadow-[0_0px_15px_#ffff00] bg-yellow-400"></div>
                            <div className="h-4 w-4 rounded-full bg-slate-400"></div>
                            <div className="h-4 w-4 rounded-full bg-slate-400"></div>
                        </div>
                    </div>
                </div>        
                <div className="w-64 rounded-lg border-4 pt-3 shrink-0 bg-white border-blue-400">
                    <img src={git} className="w-full h-60 m-auto px-2 bg-white" alt=""/>
                    <div className="w-full bg-gradient-to-b from-blue-800 to-blue-950 rounded-b-md mt-5">
                        <h3 className="text-center font-kanit pt-3 text-xl text-slate-300">Git</h3>
                        <div className="w-full flex gap-3 justify-center py-4">
                            <div className="h-4 w-4 rounded-full drop-shadow-[0_0px_15px_#ffff00] bg-yellow-400"></div>
                            <div className="h-4 w-4 rounded-full drop-shadow-[0_0px_15px_#ffff00] bg-yellow-400"></div>
                            <div className="h-4 w-4 rounded-full drop-shadow-[0_0px_15px_#ffff00] bg-yellow-400"></div>
                            <div className="h-4 w-4 rounded-full bg-slate-400"></div>
                            <div className="h-4 w-4 rounded-full bg-slate-400"></div>
                        </div>
                    </div>
                </div>        
                <div className="w-64 rounded-lg border-4 pt-3 shrink-0 bg-white border-blue-400">
                    <img src={bootstrap} className="w-full h-60 m-auto px-2 bg-white" alt=""/>
                    <div className="w-full bg-gradient-to-b from-blue-800 to-blue-950 rounded-b-md mt-5">
                        <h3 className="text-center font-kanit pt-3 text-xl text-slate-300">Bootstrap</h3>
                        <div className="w-full flex gap-3 justify-center py-4">
                            <div className="h-4 w-4 rounded-full drop-shadow-[0_0px_15px_#ffff00] bg-yellow-400"></div>
                            <div className="h-4 w-4 rounded-full drop-shadow-[0_0px_15px_#ffff00] bg-yellow-400"></div>
                            <div className="h-4 w-4 rounded-full drop-shadow-[0_0px_15px_#ffff00] bg-yellow-400"></div>
                            <div className="h-4 w-4 rounded-full bg-slate-400"></div>
                            <div className="h-4 w-4 rounded-full bg-slate-400"></div>
                        </div>
                    </div>
                </div>        
         </div>
    </main>
    )
}

export default Main;