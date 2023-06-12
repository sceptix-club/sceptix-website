import React from 'react';
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai';
import Sidebar from '../sidenav/sidebar';
import Footer from '../footer/footer.jsx';
import {AiOutlineUser} from 'react-icons/ai'



const MemberCard = ({ member }) => {
  return (
    <div className="bg-gray-900 hover:bg-gray-800 border-gray-400 border-solid border-1 transition duration-150 ease-out hover:ease-in shadow p-4 flex flex-col items-center rounded-lg">
      <img
        src={member.image}
        alt={member.name}
        className="w-48 h-48 object-cover mb-4 rounded-full mt-4"
      />
      <h2 className="text-xl text-white font-bold mb-3">{member.name}</h2>
      <p className="text-gray-500">{member.role}</p>
      <div className="flex flex-row justify-center mt-2">
        <div className="m-2">
          <a href={member.gitlink} target='_blank'>
            <AiFillGithub color="white" size={30} />
          </a>
        </div>
        <div className="m-2">
          <a href={member.linked}>
            <AiFillLinkedin color="white" size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

const FacultyCard = ({ member }) => {
  return (
    <div className="bg-gray-900 hover:bg-gray-800 border-gray-400 border-solid border-1 transition duration-150 ease-out hover:ease-in shadow p-4 flex flex-col items-center rounded-lg">
      <img
        src={member.image}
        alt={member.name}
        className="w-48 h-48 object-cover mb-4 rounded-full mt-4"
      />
      <h2 className="text-xl text-white font-bold mb-3">{member.name}</h2>
      <p className="text-gray-500">{member.role}</p>
      <div className="flex flex-row justify-center mt-2">
        <div className="m-2">
          <a href={member.aboutLink}>
            <AiOutlineUser color="white" size={30} />
          </a>
        </div>       
      </div>
    </div>
  );
};






const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Vyasa M Nayak',
      role: 'President',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/septicalls",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Anusha K',
      role: 'Vice President',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/Anu7ha",
      linked: "https://github.com/Charispinto"

    },
    // Add more team members here
    {
      name: 'Alriya Treeza D Souza',
      role: 'Secretory',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/alriyadsouza",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Charis Pinto',
      role: 'Technical Supervisor',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/Charispinto",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Nihaal Y K',
      role: 'Planning Supervisor',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/Nihaalyk",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Khushi Haldankar',
      role: 'Media Supervisor',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/Khushi255",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Omkar Bhat',
      role: 'Co-Founder',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/Omkarbhat08",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Pratham V Bhat',
      role: 'Co-Founder',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/prathamvbhat",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Anish Shobith PS',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/Anish-Shobith",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Joywin Bennis',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/joywin2003",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Samwin Steve Pereira',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/samwinp",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Vaibhav K Saliyan',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/vaibhvc4",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Muhammed Saheed',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/Mainkt",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Vyshnav',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/Vyshnav001",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Rachan Karkera',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/rachan2005",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'A Sanjana B Bhat',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/sanju2728",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Arshith Glanwin vaz',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/ArshithVaz",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Abhinav C Yadav',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/abhi-abhinav",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'A S Vijayavitthala',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/vv-01",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Shivani B S',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/Shivani-rao123",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Uthpal Suvarna',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/UthpalSuvarna",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Ciana Rodrigues',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/cianar99",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Sabrina Hehar',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/heharsabrina",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Rishal D',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/Rishal14",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Deric Jojo',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/JackitudilinksG",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Joshua Quinthino Albuquerque',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/JoshuaAlbuquerque",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Lawrence D Souza',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/lawrencedsz9",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Amisha Ananda Gowda',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/Amisha-Ananda-Gowda",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Mac Reon D Souza',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/CheesyMac06",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Swastik Gurudev Bhandarkar',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/swastikb794",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Nahla Nafeesa Adiraja',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/nahla2405",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Pranaam',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/pranaam1",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Pranavv Raja C P',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/pranavvraja",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Adwaith Sanjeev C',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/adwxith",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Chaitanya Puthran',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/Chaitanyaputhran",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Devananda M Prabhu',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/devprabhu18",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Shane Priyanka Rodrigues',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/Shane0303",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Sharon Tyana Menezes',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/Sharontm",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Sheldon Menezes',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/0x5h31d0n",
      linked: "https://github.com/Charispinto"
    },
    {
      name: 'Tanisha T Shetty',
      role: 'Member',
      image: 'https://avatars.githubusercontent.com/u/114792058?v=4',
      gitlink: "https://github.com/tanishatshetty",
      // linked: "https://github.com/Charispinto"
    },
  ];

  const facultyMembers = [
    {
      name: 'Dr Rio Dsouza',
      role: 'Principal',
      image: 'principal.jpg',
      aboutLink: "https://www.sjec.ac.in/faculty-display.php?id=123",
      
    },
    {
      name: 'Dr Sridevi Saralaya',
      role: 'Head of Department - CSE',
      image: 'HOD.jpg',
      aboutLink: "https://www.sjec.ac.in/faculty-display.php?id=125",
      
    },

    {
        name: 'Mrs Pruthvi M Raghav',
        role: 'Faculty Coordinator',
        image: 'purvi.jpg',
        aboutLink:"https://www.sjec.ac.in/faculty-display.php?id=652",
      
    },
    {
      name: 'Mr Lokesh Suvarna',
      role: 'System Administrator',
      image: 'lokesh.webp',
      aboutLink:"https://www.linkedin.com/in/lokesh-suvarna-53378926/?originalSubdomain=in",
     

    }
  ]

  return (
    <div>
    <div className="container mx-auto px-20">
      <div className="text-center">
      <h1 className="py-10 text-6xl font-bold mb-9 pb-10 bg-gradient-to-r from-sky-500 to-blue-400 bg-clip-text text-transparent">
          Faculty
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyMembers.map((member, index) => (
          <FacultyCard key={index} member={member} />
        ))}
      </div>

      <div className="text-center mt-3">
        <h1 className="py-16 text-6xl font-bold mb-8 m-auto bg-gradient-to-r from-sky-500 to-blue-400 bg-clip-text text-transparent">
          Our Team
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};


export default TeamPage;





// <div className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>hello</div>


























