import React from 'react'
import language from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

const langSelector = useSelector((store)=> store.config.lang)
console.log(langSelector)

    return (
        <div className='pt-52 flex justify-center'>
            <form action="" className='grid grid-cols-12 w-1/2'>
                <input
                    type="text"
                    placeholder= {language[langSelector].gptSearchPlaceholder}
                    className='border col-span-8 pl-10 mx-2'
                />
                <button
                    className='border col-span-4 p-4 bg-red-700'>
                    {language[langSelector].search}  
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar
