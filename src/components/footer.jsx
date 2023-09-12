import React from "react";
import whatsapp from '../assets/icons8-whatsapp-48.png';
import instagram from '../assets/icons8-instagram-48.png';
import facebook from '../assets/icons8-facebook-48.png';
import github from '../assets/icons8-github-30.png';
import telegram from '../assets/icons8-telegram-48.png';
import tiktok from '../assets/icons8-tiktok-48.png'

const Footer = () => {
    return(
        <footer className='bg-slate-700 w-full py-10' id="contact" >
        <div className="flex justify-center py-3 items-center">
            <div className="w-3/5 laptop:flex-row mobile-sm:flex-col flex flex-row justify-between">
                <div>
                    <ul>
                        <li className="font-bold text-white text-[15px]"><a href="https://wa.me/6285655230897" title="klik untuk kirim pesan" target="_blank"><img src={whatsapp} className="inline w-7 " alt="" /> 0856-5523-0897</a></li>
                        <li className="font-bold text-white text-[15px]"><a href="https://www.instagram.com/yossi_nordiansah" title="klik untuk lihat instagram" target="_blank"><img src={instagram} className="inline w-7 " alt="" /> @yossi_n</a></li>
                        <li className="font-bold text-white text-[15px]"><a href="https://web.facebook.com/yossi.nordiansah" title="klik untuk lihat facebook" target="_blank"><img src={facebook} className="inline w-7 " alt="" /> Yossi Nordiansah</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="font-bold text-white text-[15px]"><a href="https://github.com/Yossi-nordiansah" title="klik untuk lihat Github" target="_blank"><img src={github} className="inline w-7 " alt="" /> Yossi-nordiansah</a></li>
                        <li className="font-bold text-white text-[15px]"><a href="https://t.me/Yossi_nordiansah" title="klik untuk lihat Telegram" target="_blank"><img src={telegram} className="inline w-7 " alt="" /> Yossi_nordiansah</a></li>
                        <li className="font-bold text-white text-[15px]"><a href="https://www.tiktok.com/@yossinordiansah?_t=8fFHjEiOil0&_r=1" title="klik untuk lihat Tiktok" target="_blank"><img src={tiktok} className="inline w-7 " alt="" /> yossinordiansah</a></li>
                    </ul>
                </div>
                <div className="flex items-start">
                    <form action="" >
                        <label className="text-white text-[10px] block">beri kritik dan saran :</label><br/>
                        <textarea name="" id="" cols="20" rows="2" className="text-[10px] px-2 py-1 block -mt-6"></textarea>
                        <button className="bg-blue-400 text-[10px] w-9 hover:bg-blue-500 rounded-md text-white font-semibold ">kirim</button>
                    </form>
                </div>
            </div>
        </div>
        <h5 className="text-center text-white font-poppins font-bold">Yossi Nordiansah | 08-09-2023</h5>
    </footer>
    )
}

export default Footer;