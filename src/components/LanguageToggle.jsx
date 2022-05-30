import React from 'react'
import { useLanguage } from '../context/Languaje'
import { IoLanguageOutline } from 'react-icons/io5'

const LanguageToggle = () => {

    const { language, setLanguage } = useLanguage()

    return (
        <button className='mx-5' onClick={() => setLanguage(!language)}>
            <IoLanguageOutline className={language ? 'text-white' : 'text-blue-400'} />
        </button>
    )
}

export default LanguageToggle