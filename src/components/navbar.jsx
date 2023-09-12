import logoyn from '../assets/logo4.png';

const Navbar = () => {
    return(
        <nav className="laptop:px-10 mobile-sm:px-0 bg-blue-800/5 w-full mobile-sm:pt-2 fixed flex justify-between items-center flex-wrap backdrop-blur-md z-10">
            <img src={logoyn} className="h-14 mobile-sm:m-auto laptop:ml-0" alt=""/>
            <div className="text-white mobile-sm:m-auto mobile-sm:py-4 mobile:text-base mobile:gap-8 laptop:mr-0 font-bold font-inter laptop:gap-8 mobile-sm:text-xs flex mobile-sm:justify-between  mobile-sm:gap-3 laptop:text-base">
                <div className="hover:text-blue-400 shrink-0 hover:drop-shadow-[0_0px_15px_#0073e6]" title="kontak"><a href="#contact">Contact</a></div>
                <div className="hover:text-blue-400 shrink-0 hover:drop-shadow-[0_0px_15px_#0073e6]" title="kemampuan"><a href="#skill">Skill</a></div>
                <div className="hover:text-blue-400 shrink-0 hover:drop-shadow-[0_0px_15px_#0073e6]" title="pengalaman kerja"><a href="#workExperience">Work Experience</a></div>
                <div className="hover:text-blue-400 shrink-0 hover:drop-shadow-[0_0px_15px_#0073e6]" title="pendidikan"><a href="#education">Education</a></div>
                <div className="hover:text-blue-400 shrink-0 hover:drop-shadow-[0_0px_15px_#0073e6]" title="tentang"><a href="#">About</a></div>
            </div>
        </nav>
    )
}

export default Navbar;