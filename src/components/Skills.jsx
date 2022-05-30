import React from 'react'
import Html from '../assets/html.png'
import Javascript from '../assets/javascript.png'
import Css from '../assets/css.png'
import Mongo from '../assets/mongo.png'
import Github from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import ReactLogo from '../assets/react.png'
import { useLanguage } from '../context/Languaje'

const Skills = () => {
    const { language } = useLanguage()
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <h1 className='text-3xl font-bold inline border-blue-400 border-b-4'>{language ? 'Skills' : 'Habilidades'}</h1>
                    <p className='py-4'>{language ? '// These are the technologies that I worked with' : "// Estas son las tecnologías con las que he trabajado"}</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-6'>
                    <Skill image={Html} title={'HTML'} />
                    <Skill image={Css} title={'CSS'} />
                    <Skill image={Javascript} title={'Javascript'} />
                    <Skill image={ReactLogo} title={'ReactJS'} />
                    <Skill image={Mongo} title={'Mongo'} />
                    <Skill image={Tailwind} title={'Tailwind'} />
                    <Skill image={Github} title={'Github'} />
                </div>

            </div>
        </div>
    )
}

const Skill = ({ image, title }) => {
    return (
        <div className='shadow-2xl p-3 hover:scale-110 hover:cursor-pointer duration-200'>
            <img className='w-20 mx-auto' src={image} alt={`${title} logo`} />
            <h6 className='my-2'>{title}</h6>
        </div>
    )
}

export default Skills