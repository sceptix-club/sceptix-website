import React from 'react'
import './timeline.css'
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Timeline() {
  const [scrollState, setScrollState] = useState(0)
  let scrollValue = ''
  let scrolled = 'scrolled'
  let scroll = 0;
  const handleScroll = () => {
    setScrollState(window.scrollY)
  }
  // if(scrollState >500){
  //      scrollValue = 'scroll'
  // }
  // else{
  //      scrollValue = ''
  // }
  //  {
  //  scrollState >= 100 && scrollState <200 ? scrollValue = 'base_line_1' : scrollState >= 200 && scrollState <300 ? scrollValue = 'base_line_2' :scrollState >= 300 && scrollState <400?  scrollValue = 'base_line_3' :    scrollState >= 400 && scrollState <500? scrollValue = 'base_line_4' : scrollState >= 500 && scrollState <600? scrollValue = 'base_line_5' :scrollState >= 600 && scrollState<700 ? scrollValue = 'base_line_6': scrollState >= 700 && scrollState<800 ? scrollValue = 'base_line_7': scrollState >= 800 && scrollState<900 ? scrollValue = 'base_line_8': scrollValue = ''}
  { scrollValue = scrollState > 300 ? 'visible' : 'notvisible' }
  return (
    window.addEventListener('scroll', handleScroll),
    <div>
      <div className='flex justify-center main-div'>
        <div className={`bg-blue-800 w-o border-[1px] ${scrolled}  visible`}></div>
        <div data-aos="fade-left">
          <div class="max-w-sm rounded bg-white m-9"><p class="m-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus rerum minima dolore earum minus dolor dignissimos atque labore quos voluptatibus, doloribus sit dolores sint eligendi quae officiis laboriosam exercitationem repudiandae voluptates ut non! Aliquam quas tenetur voluptatum veniam obcaecati? Numquam corrupti quis doloremque quod nam excepturi officiis debitis atque.</p></div>
        </div>
      </div>
      <div className='flex justify-center main-div'>
        <div className={`bg-blue-800 w-o border-[1px] ${scrolled}  ${scrollValue}`}></div>
        <div data-aos="fade-left">
          <div class="max-w-sm rounded bg-white m-9"><p class="m-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus rerum minima dolore earum minus dolor dignissimos atque labore quos voluptatibus, doloribus sit dolores sint eligendi quae officiis laboriosam exercitationem repudiandae voluptates ut non! Aliquam quas tenetur voluptatum veniam obcaecati? Numquam corrupti quis doloremque quod nam excepturi officiis debitis atque.</p></div></div>
      </div>
      <div className='flex justify-center main-div'>
        <div className={`bg-blue-800 w-o border-[1px] ${scrolled}  ${scrollValue}`}></div>
        <div data-aos="fade-left">
          <div class="max-w-sm rounded bg-white m-9"><p class="m-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus rerum minima dolore earum minus dolor dignissimos atque labore quos voluptatibus, doloribus sit dolores sint eligendi quae officiis laboriosam exercitationem repudiandae voluptates ut non! Aliquam quas tenetur voluptatum veniam obcaecati? Numquam corrupti quis doloremque quod nam excepturi officiis debitis atque.</p></div></div>
      </div>
    </div>
  )
}

export default Timeline