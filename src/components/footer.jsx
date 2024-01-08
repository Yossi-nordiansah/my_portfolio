
const Footer = () => {
    return(
        <footer className='bg-slate-700 w-full py-6' id="contact" >
        <div className="flex justify-center items-center">
            <div className="w-3/5 laptop:flex-row mobile-sm:flex-col flex flex-row justify-center gap-48 mb-3">
                <div>
                    <ul>
                        <li className="font-bold text-white text-[15px] mb-3"><a href="https://wa.me/6285655230897" title="klik untuk kirim pesan" target="_blank"><img src='image/icons8-whatsapp-48.png' className="inline w-9 " alt="" /> 0856-5523-0897</a></li>
                        <li className="font-bold text-white text-[15px] mb-3"><a href="https://www.instagram.com/yossi_nordiansah" title="klik untuk lihat instagram" target="_blank"><img src='image/icons8-instagram-48.png' className="inline w-9 " alt="" /> @yossi_n</a></li>
                        <li className="font-bold text-white text-[15px] mb-3"><a href="https://web.facebook.com/yossi.nordiansah" title="klik untuk lihat facebook" target="_blank"><img src='image/icons8-facebook-48.png' className="inline w-9 " alt="" /> Yossi Nordiansah</a></li>
                    </ul>   
                </div>
                <div>
                    <ul>
                        <li className="font-bold text-white text-[15px] mb-3"><a href="https://github.com/Yossi-nordiansah" title="klik untuk lihat Github" target="_blank"><img src='image/icons8-github-30.png' className="inline w-9 " alt="" /> Yossi-nordiansah</a></li>
                        <li className="font-bold text-white text-[15px] mb-3"><a href="https://t.me/Yossi_nordiansah" title="klik untuk lihat Telegram" target="_blank"><img src='image/icons8-telegram-48.png' className="inline w-9 " alt="" /> Yossi_nordiansah</a></li>
                        <li className="font-bold text-white text-[15px] mb-3"><a href="https://www.linkedin.com/in/yossi-nordiansah-702ab628a/" title="klik untuk lihat Linkedin" target="_blank"><img src='icons/linkedin.svg' className="inline w-8 " alt="" /> Yossi Nordiansah</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="text-center text-white font-poppins font-bold"><img src="icons/gmail.svg" className="inline w-8 " alt="" /> yossi.nordiansah99@gmail.com</div>
    </footer>
    )
}

export default Footer;