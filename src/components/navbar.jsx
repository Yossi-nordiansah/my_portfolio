import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/image/logo4.png";
import menu from '/src/assets/icons/burger-icons.svg';
import menuClose from "../assets/icons/closeMenu.svg";

const Navbar = () => {

    const navigate = useNavigate();
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


    }, [])

    useEffect(()=>{
        if(showMenu === true){
            console.log('true')
        }else{
            console.log('false')
        }
    },[showMenu])

    const handleOnclickMenu = (id) => {
        if (navbarMenu.find((items) => items.id === id)) {
            setNavbarMenu(navbarMenu.map((item) => (item.id === id ? { ...item, status: "clicked" } : { ...item, status: "unclicked" })));
        }
    };

    return (
        <nav className="sm:px-10 px-5  bg-blue-800/5 w-full py-2 fixed flex justify-between items-center backdrop-blur-md z-10 ">
            <img src={logo} className="xs:w-44 w-32" alt="" />
            <ul className="text-white font-bold font-inter gap-8 hidden md:flex">
                {navbarMenu?.map(item =>
                    item.status === 'clicked' ?
                        <li key={item.id} onClick={() => handleOnclickMenu(item.id)} className="hover:text-blue-400 text-blue-400 shrink-0 drop-shadow-[0_0px_15px_#0073e6] hover:drop-shadow-[0_0px_15px_#0073e6]" title={item.name}><Link to={item.path}>{item.name}</Link></li> :
                        <li key={item.id} onClick={() => handleOnclickMenu(item.id)} className="" title={item.name}><Link to={item.path}>{item.name}</Link></li>
                )}
            </ul>
            <button className="relative md:hidden border-none">
                <img src={menu} alt="" onClick={() => setShowMenu(!showMenu)} className={`md:hidden ${showMenu ? "hidden" : "block"}`} />
                {showMenu && <img src={menuClose} alt="" onClick={() => setShowMenu(!showMenu)} className={`md:hidden`} />}
            </button>
            {/* <button tabindex={1} className="relative md:hidden border-none" onFocus={() => setShowMenu(true)}  onBlur={() => setShowMenu(false)}>
                <img src={menu} alt="" onClick={() => setShowMenu(!showMenu)} className={`md:hidden ${showMenu ? "hidden" : "block"}`} />
                {showMenu && <img src={menuClose} alt="" onClick={() => setShowMenu(false)} className={`md:hidden`} />}
            </button> */}
            {showMenu && <ul className={`bg-blue-800 border-zinc-400 border-2 font-semibold rounded-lg absolute text-white right-10 top-10 sm:w-[30%] xs:w-[40%] w-[50%] text-center`}>
                {
                    navbarMenu?.map(item => (
                        <Link to={item.path} key={item.id}>
                            <li className={`py-3 border-b active:bg-blue-900`} key={item.id}>{item.name}</li>
                        </Link>
                    ))
                }
            </ul>}
        </nav>
    )
}

export default Navbar;


