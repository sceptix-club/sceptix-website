import React from 'react';
import {AiFillGithub} from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai';
import Sidebar from '../sidenav/sidebar';
import Footer from '../footer/footer.jsx';





  const TeamPage = () => {
  const teamMembers = [
    {
        name: 'Pinto Charis',
        role: 'hello',
        image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
        gitlink:"https://github.com/Charispinto",
        linked: "https://github.com/Charispinto"
    },
    {
      name: 'Pinto Charis',
      role: 'hello',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink:"https://github.com/Charispinto",
      linked: "https://github.com/Charispinto"

    },
    // Add more team members here
    {
        name: 'Pinto Charis',
        role: 'hello',
        image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
        gitlink:"https://github.com/Charispinto",
        linked: "https://github.com/Charispinto"
    },
    {
        name: 'Pinto Charis',
        role: 'hello',
        image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
        gitlink:"https://github.com/Charispinto",
        linked: "https://github.com/Charispinto"
    },
    {
        name: 'Pinto Charis',
        role: 'hello',
        image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
        gitlink:"https://github.com/Charispinto",
        linked: "https://github.com/Charispinto"
    },
    {
        name: 'Pinto Charis',
        role: 'hello',
        image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
        gitlink:"https://github.com/Charispinto",
        linked: "https://github.com/Charispinto"
    },
    {
        name: 'Pinto Charis',
        role: 'hello',
        image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
        gitlink:"https://github.com/Charispinto",
        linked: "https://github.com/Charispinto"
    },
    {
        name: 'Pinto Charis',
        role: 'hello',
        image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
        gitlink:"https://github.com/Charispinto",
        linked: "https://github.com/Charispinto"
    },
    {
        name: 'Pinto Charis',
        role: 'hello',
        image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
        gitlink:"https://github.com/Charispinto",
        linked: "https://github.com/Charispinto"
    },
    {
        name: 'Pinto Charis',
        role: 'hello',
        image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
        gitlink:"https://github.com/Charispinto",
        linked: "https://github.com/Charispinto"
    },
  ];

  const facultyMembers  = [
    {
        name: 'Pinto Charis',
        role: 'hello',
        image: 'sam.jpg',
        gitlink:"https://github.com/Charispinto",
        linked: "https://github.com/Charispinto"
    },
    {
      name: 'Pinto Charis',
      role: 'hello',
      image: 'sam.jpg',
      gitlink:"https://github.com/Charispinto",
      linked: "https://github.com/Charispinto"

    },

    {
        name: 'Samwin Pereira',
        role: 'hello',
        image: 'sam.jpg',
        gitlink:"https://github.com/Charispinto",
        linked: "https://github.com/Charispinto"
    }
  ]

  return (
    <><div className="container mx-auto py-8 ">

      <div className='text-center'>
        <h1 className='text-4xl font-bold mb-9 pb-2 bg-gradient-to-r from-sky-500 to-purple-400 bg-clip-text text-transparent'>Faculty</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyMembers.map((member, index) => (
          <div key={index} className="bg-gray-900 hover:bg-gray-800  border-gray-400 border-solid border-1 transition duration-150 ease-out hover:ease-in shadow  p-4 flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-48 h-48 object-cover mb-4 rounded-full mt-4 " />
            <h2 className="text-xl text-white font-bold mb-3">{member.name}</h2>
            <p className="text-gray-500">{member.role}</p>
            <div className='flex flex-row justify-center mt-2'>
              <div className='m-2'><a href={member.gitlink}>{<AiFillGithub color='white' size={30} />}</a></div>
              <div className='m-2'><a href={member.linked}>{<AiFillLinkedin color='white' size={30} />}</a></div>

            </div>
          </div>
        ))}
      </div>



      <div className='text-center mt-3'>
        <h1 className="text-4xl font-bold mb-8 m-auto bg-gradient-to-r from-sky-500 to-purple-400 bg-clip-text text-transparent">Our Team</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-900 hover:bg-gray-800  border-gray-400 border-solid border-1 transition duration-150 ease-out hover:ease-in shadow  p-4 flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-48 h-48 object-cover mb-4 rounded-full mt-4" />
            <h2 className="text-xl text-white font-bold mb-3">{member.name}</h2>
            <p className="text-gray-500">{member.role}</p>
            <div className='flex flex-row justify-center mt-2'>
              <div className='m-2'><a href={member.gitlink}>{<AiFillGithub color='white' size={30} />}</a></div>
              <div className='m-2'><a href={member.linked}>{<AiFillLinkedin color='white' size={30} />}</a></div>

            </div>
          </div>
        ))}



      </div>
    </div>
    <Footer /></>
  );
};

export default TeamPage;





// <div className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>hello</div>


























