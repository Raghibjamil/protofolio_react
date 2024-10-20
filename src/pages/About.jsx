import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-60px)] bg-gray-100 text-gray-800 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        About Me
      </h1>
      <p className="text-lg max-w-2xl text-center mb-6">
      I'm a passionate MERN stack developer that is skilled in Express, React, MongoDB, and Node.js. I'm excited to use my knowledge to create cutting-edge web applications. 
      </p>
      <p className="text-lg max-w-2xl text-center">
      I have a strong foundation in front-end and back-end development and am eager to advance in the field of web development. I am passionate about learning and making a positive impact on creative projects.
      </p>
    </div>
  );
};

export default About;
