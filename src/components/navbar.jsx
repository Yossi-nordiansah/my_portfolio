import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({sendData}) => {

    const navigate = useNavigate();
    const [showContact, setShowContact] = useState(false);

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
            path: '/my_portfolio/',
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
        <nav className="laptop:px-10 mobile-sm:px-0 bg-blue-800/5 w-full mobile-sm:pt-2 fixed flex justify-between items-center flex-wrap backdrop-blur-md z-10">
            <img src="/image/logo4.png" className="h-14 mobile-sm:m-auto laptop:ml-0" alt="" />
            <ul className="text-white mobile-sm:m-auto mobile-sm:py-4 mobile:text-base mobile:gap-8 laptop:mr-0 font-bold font-inter laptop:gap-8 mobile-sm:text-xs flex mobile-sm:justify-between mobile-sm:gap-3 laptop:text-base">
                {navbarMenu?.map(item =>
                    item.status === 'clicked' ?
                        <li key={item.id} onClick={()=>handleOnclickMenu(item.id)} className="hover:text-blue-400 text-blue-400 shrink-0 drop-shadow-[0_0px_15px_#0073e6] hover:drop-shadow-[0_0px_15px_#0073e6]" title={item.name}><Link to={item.path}>{item.name}</Link></li> : 
                        <li key={item.id} onClick={()=>handleOnclickMenu(item.id)} className="" title={item.name}><Link to={item.path}>{item.name}</Link></li>
                )}
                 <li onClick={()=>setShowContact(!showContact)} className="cursor-pointer" title='Contact'>Contact</li>
            </ul>
            {
                showContact ? <div className="bg-white w-[20%] fixed top-20 z-20 flex flex-col gap-3 rounded-lg py-3 m-auto right-12">
                    <div onClick={() => setShowContact(false)} className="absolute cursor-pointer -top-4 -right-1"><img src="icons/close2.svg" alt="" className="h-12" /></div>
                    <a target="_blank" href="https://wa.me/6285655230897" className="flex cursor-pointer items-center hover:bg-green-200 py-1 px-3 mt-6 bg-[#e6e6e6] justify-start gap-12"><img src='image/icons8-whatsapp-48.png' alt="" /><span className="text-lg font-bold">085655230897</span></a>
                    <a target="_blank" href="https://t.me/Yossi_nordiansah" className="flex cursor-pointer items-center hover:bg-green-200 py-1 px-3 bg-[#e6e6e6] justify-start gap-12"><img src='image/icons8-telegram-48.png' alt="" /><span className="text-lg font-bold">Yossi_nordiansah</span></a>
                </div> : null
            }
       
        </nav>
    )
}

export default Navbar;