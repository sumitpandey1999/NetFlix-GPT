import React from 'react'

function VideoTitle({title, overview}) {
   
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black"'>
<h1 className='text-4xl font-bold absolute'>{title}</h1>
<p className='w-1/4 pt-10 text-justify mt-2'>{overview}</p>
<div className='ml-[-50.5rem] mt-4'>
  <button className='border px-9 py-3 rounded-md bg-red-700 font-bold bg-opacity-90'>Play</button>
  <button className='border px-9 py-3 rounded-md bg-red-700 font-bold  bg-opacity-90 ml-2'>More Info</button>
</div>
    </div>
  )
}

export default VideoTitle;
