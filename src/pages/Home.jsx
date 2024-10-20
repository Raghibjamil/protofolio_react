import React from 'react';
import { delay, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Animation variants for the typing effect
const typingAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.05,
    },
  },
};

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 10 ,} },
};

const Home = () => {
  const title = "Welcome To My Portfolio";

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-60px)] bg-gray-100 text-gray-800 p-6">
      {/* Animated Text */}
      <motion.h1
        className="text-5xl font-bold text-blue-600 mb-4 text-center"
        variants={typingAnimation}
        initial="hidden"
        animate="visible"
      >
        {title.split("").map((letter, index) => (
          <motion.span key={index} variants={letterAnimation}>
            {letter}
          </motion.span>
        ))}
      </motion.h1>
      
      <p className="text-lg max-w-2xl text-center mb-8">
        I’m <b>Raghib Jamil</b> a passionate full-stack developer focused on building clean and responsive web applications. Explore my projects and learn more about my journey.
      </p>
      
      <Link to="/projects" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">
        View My Projects
      </Link>
    </div>
  );
};

export default Home;
