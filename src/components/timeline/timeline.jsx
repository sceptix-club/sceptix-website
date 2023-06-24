import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Timeline() {
  return (
   <div className='bg-white flex justify-center '>
    <div className='bg-blue-800 w-6 h-screen '>
    </div>
    <div className='w-1/4 h-1/3 absolute right-60 top-5 content-center border-4' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatibus exercitationem doloribus ratione ipsum repellat. Illo incidunt deleniti nobis repudiandae voluptate corporis voluptatum. Libero impedit, eum mollitia assumenda iusto non?
</div>
<div className='w-1/4 h-1/3 absolute left-60 top-32 content-center border-4' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatibus exercitationem doloribus ratione ipsum repellat. Illo incidunt deleniti nobis repudiandae voluptate corporis voluptatum. Libero impedit, eum mollitia assumenda iusto non?
</div>
<div className='w-1/4 h-1/3 absolute right-60 top-80 content-center border-4' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatibus exercitationem doloribus ratione ipsum repellat. Illo incidunt deleniti nobis repudiandae voluptate corporis voluptatum. Libero impedit, eum mollitia assumenda iusto non?
</div>
<div className='w-1/4 h-1/3 absolute left-60 bottom-0 content-center border-4' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatibus exercitationem doloribus ratione ipsum repellat. Illo incidunt deleniti nobis repudiandae voluptate corporis voluptatum. Libero impedit, eum mollitia assumenda iusto non?
</div>
<div className='w-1/4 h-1/3 absolute right-60 bottom-[-200px] content-center border-4' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatibus exercitationem doloribus ratione ipsum repellat. Illo incidunt deleniti nobis repudiandae voluptate corporis voluptatum. Libero impedit, eum mollitia assumenda iusto non?
</div>
<div className='w-1/4 h-1/3 absolute left-60 bottom-[-300px] content-center border-4' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatibus exercitationem doloribus ratione ipsum repellat. Illo incidunt deleniti nobis repudiandae voluptate corporis voluptatum. Libero impedit, eum mollitia assumenda iusto non?
</div>
<div className='w-1/4 h-1/3 absolute right-60 bottom-[-500px] content-center border-4' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatibus exercitationem doloribus ratione ipsum repellat. Illo incidunt deleniti nobis repudiandae voluptate corporis voluptatum. Libero impedit, eum mollitia assumenda iusto non?
</div>
<div className='w-1/4 h-1/3 absolute left-60 bottom-[-600px] content-center border-4' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatibus exercitationem doloribus ratione ipsum repellat. Illo incidunt deleniti nobis repudiandae voluptate corporis voluptatum. Libero impedit, eum mollitia assumenda iusto non?
</div>
</div>

   
  )
}

export default Timeline