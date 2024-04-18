import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video bg-gradient-to-r from-black text-white pt-[10%] px-16 absolute'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/3'>{overview}</p>
        <div>
            <button className='bg-white text-black p-4 px-8 text-xl hover:bg-opacity-80 rounded-md'> ▶️Play</button>
            <button className='bg-gray-500 text-white p-4 px-8 mx-2 text-xl hover:bg-opacity-70 rounded-md'>❗More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle