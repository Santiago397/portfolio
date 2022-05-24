import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Link from 'react-scroll/modules/components/Link'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-gray-300'>
                <p className='text-pink-600'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-gray-50'>Santiago Monrroy</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-gray-400'>I'm a Full Stack Developer</h2>
                <p className='text-gray-400 py-4 max-w-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quasi deserunt omnis ipsam amet,
                    placeat eos officiis ratione dolore! Laborum eos animi dolores aperiam reiciendis dolore placeat
                    expedita ratione nostrum.
                </p>
                <div className='my-2'>
                    <Link to='work' smooth={true} duration={500}>
                        <button className='flex items-center group text-white border-2 px-3 py-1 hover:bg-pink-500 hover:border-pink-500 duration-300'>
                            View Work
                            <span className='group-hover:rotate-90'>
                                <HiArrowNarrowRight className='ml-2' />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home