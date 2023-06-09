import React from 'react';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO',
      image: 'https://example.com/john-doe.jpg',
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      image: 'https://example.com/jane-smith.jpg',
    },
    // Add more team members here
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-4">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-xl font-bold mb-2">{member.name}</h2>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;