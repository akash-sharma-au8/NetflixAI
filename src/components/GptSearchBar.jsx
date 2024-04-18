import React from 'react'
import { lang } from '../utils/languageConstants';
import {useSelector} from 'react-redux';

const GptSearchBar = () => {
    const userLanguage = useSelector(store => store.userLanguage?.selectedLanguage)

    return (
        <div className='pt-[10%] w-[50%] m-auto absolute z-30 left-[23%]'>
            <form className='bg-black grid grid-cols-11 mt-3' onSubmit={(e)=>{
                e.preventDefault()
            }}>
                <input className='p-3 m-1 col-span-9 rounded-lg' type='text' placeholder={lang[userLanguage].inputPlaceholder} />
                <button className='py-1 px-2 m-1 font-bold col-span-2 bg-red-800 rounded-md'>{lang[userLanguage].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar