import React from 'react'
import Timeline from '../timeline/timeline.jsx';
import MobileViewTimeline from './mobileview.jsx';

function Main_timeline() {
  return (
    <>
    <div className='hidden sm:hidden md:hidden lg:hidden xl:block 2xl:block' >
        <Timeline/>
    </div>
    <div className='block sm:block md:block lg:block xl:hidden 2xl:hidden'>
    <MobileViewTimeline/>
    </div>
      
   
    </>
  )
}

export default Main_timeline