import React from 'react'

const About = () => {
    return (
        <div name='about' className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <h1 className='text-4xl font-bold inline border-pink-600 border-b-4'>
                            About
                        </h1>
                    </div>
                    <div>

                    </div>
                    {/*  */}
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-3'>
                    <div className='sm:text-right text-3xl font-bold'>
                        <p>Hi. I'm Santiago, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum repellendus laboriosam facilis
                            necessitatibus dolor? Qui optio aut asperiores ut harum delectus perferendis, adipisci aliquid,
                            ea quidem dolore porro consequatur dolorem.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About