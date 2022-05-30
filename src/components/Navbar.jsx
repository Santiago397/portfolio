import React, {  useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import Logo from '../assets/logoaz.png'
import { Link } from 'react-scroll'
import LanguageToggle from './LanguageToggle'
import { useLanguage } from '../context/Languaje'

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const { language } = useLanguage()

    const handleClick = () => {
        setNav(!nav)
    }

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div className='flex items-center'>
                <img src={Logo} alt="Logo" style={{ width: '70px' }} />
                <span className='md:hidden '>
                    <LanguageToggle />
                </span>
            </div>
            {/* Hamburger */}
            <div onClick={() => handleClick()} className='md:hidden z-10'>
                {
                    nav ? <FaTimes /> : <FaBars />
                }
            </div>

            {/* Menu */}
            <ul className='hidden md:flex'>
                <MenuLink location={'home'} title={language ? 'Home' : 'Inicio'} />
                <MenuLink location={'about'} title={language ? 'About' : 'Acerca'} />
                <MenuLink location={'skills'} title={language ? 'Skills' : 'Habiidades'} />
                <MenuLink location={'work'} title={language ? 'Work' : 'Proyectos'} />
                <MenuLink location={'contact'} title={language ? 'Contact' : 'Contacto'} />
                <LanguageToggle />
            </ul>

            {/* Mobile menu*/}
            <ul className={nav ? `absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center` : `hidden`}>
                <MenuMobile location={'home'} title={language ? 'Home' : 'Inicio'} setNav={setNav} nav={nav} />
                <MenuMobile location={'about'} title={language ? 'About' : 'Acerca'} setNav={setNav} nav={nav} />
                <MenuMobile location={'skills'} title={language ? 'Skills' : 'Habiidades'} setNav={setNav} nav={nav} />
                <MenuMobile location={'work'} title={language ? 'Work' : 'Proyectos'} setNav={setNav} nav={nav} />
                <MenuMobile location={'contact'} title={language ? 'Contact' : 'Contacto'} setNav={setNav} nav={nav} />
            </ul>
            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:bg-blue-400'>
                        <a href="https://www.linkedin.com/in/sanmon12/" className='flex justify-between items-center w-full'>
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:bg-blue-400'>
                        <a href="https://github.com/Santiago397" className='flex justify-between items-center w-full'>
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}


const MenuLink = ({ location, title }) => {
    return (
        <li>
            <Link to={location} smooth={true} duration={500}>
                {title}
            </Link>
        </li>
    )
}

const MenuMobile = ({ location, title, setNav, nav }) => {
    return (
        <li className='py-6 text-4xl'>
            <Link onClick={() => setNav(!nav)} to={location} smooth={true} duration={500}>
                {title}
            </Link>
        </li>
    )
}

export default Navbar