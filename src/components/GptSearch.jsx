import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSuggestionList from './GptSuggestionList'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div className=''>
      <div className='absolute -z-10'>
        <img src={BG_URL}  alt="backgroundImage"/>
      </div>
      <GptSearchBar/>
      <GptSuggestionList />
    </div>
  )
}

export default GptSearch