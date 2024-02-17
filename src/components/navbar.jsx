import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/image/logo4.png";
import menu from '/src/assets/icons/burger-icons.svg';
import menuClose from "../assets/icons/closeMenu.svg";

const Navbar = () => {

    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(true);
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
            name: 'Projects',
            path: '/my_portfolio/project',
            status: 'unclicked'
        }
    ]);

    useEffect(() => {
        navbarMenu.map(item => {
            if (item.status === 'clicked') {
                navigate(item.path)
            }
        })
        const handleClickOutside = (event) => {
            if(menuRef.current && !menuRef.current.contains(event.target)){
                setShowMenu(false)
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
          document.removeEventListener('click', handleClickOutside);
        };

    }, [])

    useEffect(() => {
        if (showMenu === true) {
            console.log('true')
        } else {
            console.log('false')
        }
    }, [showMenu])

    const handleOnclickMenu = (id) => {
        if (navbarMenu.find((items) => items.id === id)) {
            setNavbarMenu(navbarMenu.map((item) => (item.id === id ? { ...item, status: "clicked" } : { ...item, status: "unclicked" })));
        }
    };

    return (
        <nav className="sm:px-10 px-5  bg-blue-800/5 w-full md:h-16 h-14 fixed flex justify-between items-center backdrop-blur-md z-10 overflow-y-visible">
            <img src={logo} className="xs:w-44 w-32" alt="" />
            <ul className="text-white font-bold font-inter gap-8 hidden md:flex">
                {navbarMenu?.map(item =>
                    item.status === 'clicked' ?
                        <li key={item.id} onClick={() => handleOnclickMenu(item.id)} className="hover:text-blue-400 text-blue-400 shrink-0 drop-shadow-[0_0px_15px_#0073e6] hover:drop-shadow-[0_0px_15px_#0073e6]" title={item.name}><Link to={item.path}>{item.name}</Link></li> :
                        <li key={item.id} onClick={() => handleOnclickMenu(item.id)} className="" title={item.name}><Link to={item.path}>{item.name}</Link></li>
                )}
            </ul>
            <div className="md:hidden">
                <div ref={menuRef} className={`w-8 h-8 overflow-visible rounded-l-md`}>
                    <div className='relative'>
                        <img src={menu} alt="" onClick={() => setShowMenu(!showMenu)} className={`md:hidden h-8 w-8 ${showMenu ? "hidden" : "block"}`} />
                {showMenu && <img src={menuClose} alt="" onClick={() => setShowMenu(!showMenu)} className={`md:hidden h-8 w-8`} />}
                    </div>
                    <div className={`flex flex-col overflow-hidden w-32 duration-300 mt-6 font-bold text-white rounded-l-md bg-blue-600 ${showMenu ? '-translate-x-[75px]' : 'translate-x-14'}`}>
                    <Link to={'/my_portfolio/'} className="text-center py-4 px-10 hover:bg-blue-800">About</Link>
                    <Link to={'/my_portfolio/skills'} className='text-center py-4 border-y px-10 hover:bg-blue-800'>Skills</Link>
                    <Link to={'/my_portfolio/project'} className='text-center py-4 px-10 hover:bg-blue-800'>Projects</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;


