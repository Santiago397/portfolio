import React from 'react'
import Realestate from '../assets/realestate.jpg'
import WorkImg from '../assets/workImg.jpeg'

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] '>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h1 className='text-3xl font-bold border-b-4 border-pink-600 inline'>Work</h1>
                    <p className='py-4'>// Check out some of my recent works.</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Grid Item */}

                    <Project image={WorkImg} title={'Project1'} demo={'/'} code={'/'} />
                    <Project image={Realestate} title={'Project2'} demo={'/'} code={'/'} />

                    <Project image={WorkImg} title={'Project1'} demo={'/'} code={'/'} />
                    <Project image={Realestate} title={'Project2'} demo={'/'} code={'/'} />

                    <Project image={WorkImg} title={'Project1'} demo={'/'} code={'/'} />
                    <Project image={Realestate} title={'Project2'} demo={'/'} code={'/'} />


                    {/*  */}

                </div>
            </div>
        </div>
    )

}

const Project = ({image, title, demo, code}) => {
    return (
        <div
            style={{ backgroundImage: `url(${image})` }}
            className='shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div'
        >
            {/* Hover Effect */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
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
                            Code
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Work;