import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BigAnimation from '../components/BigAnimation';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <motion.section
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-blue-200 text-white h-screen flex flex-col justify-center items-center"
      >
        <h1 className="text-4xl font-bold mb-4">Connect Photographers with Opportunities</h1>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
          className="space-x-4"
        >
          <Link to="/photographer-portal">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
            >
              I'm a Photographer
            </motion.button>
          </Link>
          <Link to="/user-portal">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
            >
              I'm a User
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>

      {/* Feature Highlights Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-gray-100 py-16"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* User Feature */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">For Users</h3>
              <p className="text-gray-600">Find the perfect photographer for your special moments!</p>
            </motion.div>
            {/* Photographer Feature */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">For Photographers</h3>
              <p className="text-gray-600">Showcase your talent and get discovered by users!</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* District-wise Search Section */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-white py-16"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-8">Search Photographers by District</h2>
          <motion.input
            type="text"
            placeholder="Enter your district"
            whileFocus={{ scale: 1.05 }}
            className="px-4 py-2 border rounded-lg w-1/3 mb-4 focus:outline-none"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold"
          >
            Search
          </motion.button>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;
