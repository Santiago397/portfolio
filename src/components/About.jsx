import React from 'react'
import { useLanguage } from '../context/Languaje'

const About = () => {

    const { language } = useLanguage()

    return (
        <div name='about' className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <h1 className='text-4xl font-bold inline border-pink-600 border-b-4'>
                            {language ? 'About' : 'Sobre'}
                        </h1>
                    </div>
                    <div>

                    </div>
                    {/*  */}
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-3'>
                    <div className='sm:text-right text-3xl font-bold'>
                        {
                            language ?
                                "Hi. I'm Santiago, what will be your next step?"
                                :
                                'Hola. Soy Santiago. cuál sera tu siguiente paso?'
                        }

                    </div>
                    <div>
                        {
                            language ?
                                "I was born in my beloved Colombia 🇨🇴. I am a curious person who is discovering this amazing world of development 🌎. I am very excited about all the things there are to learn in this universe of technology, not to mention the number of people I can get to know. Every day I see how the genius of the people in the industry grows and how they help to solve any kind of problems around us."
                                :
                                "Nací en mi amada Colombia 🇨🇴. Soy una persona curiosa que está descubriendo este impresionante mundo del desarrollo 🌎. Estoy muy entusiasmado por toda la cantidad cosas que hay por aprender en este universo de la tecnología, sin contar con los cantidad de personas que puedo llegar a conocer. Cada día veo cómo la genialidad de las personas en la industria crece y cómo ayudan a resolver cualquier tipo de problemas que nos rodea"
                        }
                        <p>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About