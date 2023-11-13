import React from 'react'
import Sidebar from './sidebar'
import MobileviewSidebar from './mobileviewSidebar' 

function Main_sidebar() {
  return (
    <>
    <div className='hidden sm:hidden md:hidden lg:hidden xl:block 2xl:block' >
        <Sidebar/>
    </div>
    <div className='block sm:block md:block lg:block xl:hidden 2xl:hidden'>
    <MobileviewSidebar/>
    </div>
    </>
  )
}

export default Main_sidebar