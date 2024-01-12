import React from 'react'

function Loading() {
  return (
    <>
    <div className='flex justify-center h-screen w-screen items-center flex-col'>
        <div className='w-56 h-56 bg-white rounded-full animate-bounce'>

        </div>
        <h1 className='text-white text-center text-6xl mt-3'>Loading ....</h1>
    </div>
    </>
  )
}

export default Loading