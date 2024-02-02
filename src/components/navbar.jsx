import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/image/logo4.png";
import close from "../assets/icons/close2.svg";
import wa from '../assets/image/icons8-whatsapp-48.png';
import tg from '../assets/image/icons8-telegram-48.png';
import menu from '/src/assets/icons/burger-icons.svg';

const Navbar = () => {

    const navigate = useNavigate();
    const [showContact, setShowContact] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef();

    const [navbarMenu, setNavbarMenu] = useState([
        {
            id: 1,
            name: 'About',
            path: '/my_portfolio/',
            status: 'clicked'
        },
        {
            id: 2,
            name: 'Skills',
            path: '/my_portfolio/skills',
            status: 'unclicked'
        },
        {
            id: 3,
            name: 'Project',
            path: '/my_portfolio/project',
            status: 'unclicked'
        }
    ]);

    useEffect(()=>{
        navbarMenu.map(item => {
            if (item.status === 'clicked') {
                navigate(item.path)
            }
        })
    },[])

    const handleOnclickMenu = (id) => {
        if (navbarMenu.find((items) => items.id === id)) {
            setNavbarMenu(navbarMenu.map((item) => (item.id === id ? { ...item, status: "clicked" } : { ...item, status: "unclicked" })));
        }
    }

    return (
        <nav className="sm:px-10 px-5  bg-blue-800/5 w-full py-2 fixed flex justify-between items-center backdrop-blur-md z-10">
            <img src={logo} className="xs:w-44 xxs:w-32" alt="" />
            <ul className="text-white font-bold font-inter gap-8 hidden md:flex">
                {navbarMenu?.map(item =>
                    item.status === 'clicked' ?
                        <li key={item.id} onClick={()=>handleOnclickMenu(item.id)} className="hover:text-blue-400 text-blue-400 shrink-0 drop-shadow-[0_0px_15px_#0073e6] hover:drop-shadow-[0_0px_15px_#0073e6]" title={item.name}><Link to={item.path}>{item.name}</Link></li> : 
                        <li key={item.id} onClick={()=>handleOnclickMenu(item.id)} className="" title={item.name}><Link to={item.path}>{item.name}</Link></li>
                )}
                 <li onClick={()=>setShowContact(!showContact)} className="cursor-pointer" title='Contact'>Contact</li>
            </ul>
            {
                showContact ? <div className="bg-white w-[20%] fixed top-20 flex flex-col gap-3 rounded-lg py-3 m-auto right-12">
                    <div onClick={() => setShowContact(false)} className="absolute cursor-pointer -top-4 -right-1"><img src={close} alt="" className="h-12" /></div>
                    <a target="_blank" href="https://wa.me/6285655230897" className="flex cursor-pointer items-center hover:bg-green-200 py-1 px-3 mt-6 bg-[#e6e6e6] justify-start gap-12"><img src={wa} alt="" /><span className="text-lg font-bold">085655230897</span></a>
                    <a target="_blank" href="https://t.me/Yossi_nordiansah" className="flex cursor-pointer items-center hover:bg-green-200 py-1 px-3 bg-[#e6e6e6] justify-start gap-12"><img src={tg} alt="" /><span className="text-lg font-bold">Yossi_nordiansah</span></a>
                </div> : null
            }
            <img src={menu} alt="" onClick={()=>setShowMenu(!showMenu)} className="md:hidden"/>
                <ul ref={menuRef}  className={`bg-blue-800 ${showMenu? 'block' : 'hidden'} border-zinc-400 border-2 font-semibold rounded-lg absolute text-white right-10 top-10 sm:w-[30%] xs:w-[40%] xxs:w-[50%] text-center`}>
                    {
                        navbarMenu?.map(item =>(  
                                <Link to={item.path} key={item.id}>
                                    <li  className={`py-3 border-b active:bg-blue-900`} key={item.id}>{item.name}</li>
                                </Link>
                        ))
                    }
                </ul>
        </nav>
    )
}

export default Navbar;


