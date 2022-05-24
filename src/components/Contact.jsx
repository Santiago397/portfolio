import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/a9b280f8-65ca-43bb-9c51-e4f91b4afb2e" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <h1 className='text-2xl font-bold border-b-4 border-pink-600 inline'>Contact</h1>
          <p className='py-4'>Submit the form below or shoot me a email</p>
        </div>
        <input required className='py-2 px-1 focus:outline-none text-gray-700' type="text" placeholder='Name' name='name' />
        <input required className='my-4 py-2 px-1 focus:outline-none text-gray-700' type="email" placeholder='Email' name='email' />
        <textarea required className='py-2 px-1 focus:outline-none text-gray-700' name="message" rows="5" placeholder='Write your message'></textarea>
        <button className='font-semibold my-8 border-2 border-white px-3 py-1 mx-auto hover:bg-pink-600 hover:border-pink-600'>
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact