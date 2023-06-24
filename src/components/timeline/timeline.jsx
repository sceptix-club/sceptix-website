import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Timeline() {
  return (
   <div>
    <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt vero ipsam, fuga quaerat modi delectus iure voluptatum animi unde eius, tempora reiciendis reprehenderit, neque deserunt aliquam quas! Ipsa, sequi veritatis?
</div>
   </div>
  )
}

export default Timeline