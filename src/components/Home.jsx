import React, { useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Link from 'react-scroll/modules/components/Link'
import { useLanguage } from '../context/Languaje';
import Divider from './Divider';

const Home = () => {

    const { language } = useLanguage()
    const [btnClick, setBtnClick] = useState(false);

    const handleClick = () => {
        setBtnClick(true)
        setTimeout(() => {
            setBtnClick(false)
        }, 2000)
    }



    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            {/* Container */}
            <div className={`max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-gray-300 `}>
                <p className={`text-blue-400 ${btnClick ? '-translate-x-full duration-1000' : ''}`}>{language ? "Hey! What's up? ✌" : '¿Qué tal? ✌'}</p>
                <h1 className={`text-4xl sm:text-7xl font-bold text-gray-50 ${btnClick ? '-translate-x-full duration-1000' : ''}`}>Santiago Monrroy</h1>
                <h2 className={`text-2xl sm:text-5xl font-bold text-blue-400 ${btnClick ? '-translate-x-full duration-[2000ms]' : ''}`}>{language ? 'Junior Developer' : 'Desarrollador Junior'}</h2>
                <div className={`flex my-2 w-full ${btnClick ? '-translate-x-full duration-[2000ms]' : ''}`}>
                    <Link to='work' smooth={true} duration={1250}>
                        <button onClick={() => handleClick()} className={`flex items-center group  text-white border-2 px-3 py-1 hover:bg-blue-400 hover:border-blue-400 duration-300`}>
                            {language ? 'View Work' : 'Proyectos'}
                            <span className='group-hover:rotate-90'>
                                <HiArrowNarrowRight className='ml-2' />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
            <Divider />
        </div>
    )
}

export default Home