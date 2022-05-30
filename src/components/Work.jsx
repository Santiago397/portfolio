import React from 'react'
import BuenosAires from '../assets/BuenosAires.png'
import QQSM from '../assets/ww.png'
import TraneApp from '../assets/trane.png'
import { useLanguage } from '../context/Languaje'

const Work = () => {
    const { language } = useLanguage()
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] '>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h1 className='text-3xl font-bold border-b-4 border-blue-400 inline'>
                        {language ? 'Work' : 'Proyectos'}
                    </h1>
                    <p className='py-4'>{language ? '// Check out some of my recent works.' : '// Échale un ojo a los proyectos que he realizado'}</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Grid Item */}

                    <Project language={language} image={QQSM} title={'¿Quién quiere ser millonario?'} demo={'https://qqsm.netlify.app'} code={'https://github.com/Santiago397/QQSM'} />

                    <Project image={TraneApp} title={'TraneApp'} demo={'/'} code={'https://github.com/Santiago397/TraneAppS'} />

                    <Project image={BuenosAires} title={'Buenos Aires'} demo={'/'} code={'https://github.com/MnTic3/BuenosAiresTEST'} />


                    {/*  */}

                </div>
            </div>
        </div>
    )

}

const Project = ({ image, title, demo, code, language }) => {
    return (
        <div
            style={{ backgroundImage: `url(${image})` }}
            className='shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div'
        >
            {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-1xl font-bold text-white tracking-wider'>
                    {title}
                </span>
                <div className='pt-8 text-center'>
                    <a href={demo}>
                        <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-900 font-semibold text-lg'>
                            Demo
                        </button>
                    </a>
                    |
                    <a href={code}>
                        <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-900 font-semibold text-lg'>
                            {language ? 'Code' : 'Código'}
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Work;