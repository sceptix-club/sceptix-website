import React from 'react'
import Footer from './footer'
import Footer2 from './mobileview'

function Mainfooter() {
  return (
    <div>

return (
 <>
     <div className='hidden sm:hidden md:hidden lg:block xl:block 2xl:block' >
         <Footer/>
     </div>
     <div className='block sm:block md:block lg:hidden xl:hidden 2xl:hidden'>
    <Footer2/>
          </div>
      
   
     </>
   )
      
    </div>
  )
}

export default Mainfooter