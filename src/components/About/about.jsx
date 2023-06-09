import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="bg-gray-100 py-10">
      <div className="container grid grid-cols-2 gap-2  ml-20">
        <div>
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 from-2% to-purple-400 to-20% ">About Us </h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan faucibus ipsum, eget tempor
            turpis fringilla vitae. Curabitur aliquet tortor at elit convallis, ac volutpat purus euismod.
          </p>
          <p>
            Nunc ut aliquam felis, id lacinia purus. Vestibulum tincidunt nunc nec interdum vulputate. Aliquam erat
            volutpat. Sed eu lacus vitae velit lacinia pellentesque. Mauris in mauris quis mauris lacinia pretium.
          </p>
        </div>
        <div>
          <img src="src/components/About/group.jpg" alt="About Us" className="w-full md:w-1/2 h-auto" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
