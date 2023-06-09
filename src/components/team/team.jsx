import React from 'react';
import {AiFillGithub} from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai';
import Sidebar from '../sidenav/sidebar';


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

  return (
    <div className="container mx-auto py-8">
      
      <h1 className="text-4xl font-bold mb-8">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-48 h-48 object-cover mb-4 rounded-full"
            />
            <h2 className="text-xl font-bold mb-3">{member.name}</h2>
            <p className="text-gray-500">{member.role}</p>
            <div className='flex flex-row justify-center mt-2'> 
               <div className='m-2'><a href={member.gitlink}>{<AiFillGithub size={30}/>}</a></div>    
               <div className='m-2'><a href={member.linked}>{<AiFillLinkedin size={30}/>}</a></div>
                        
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;






























