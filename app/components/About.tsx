'use client';

import { motion } from 'framer-motion';
import { FiCheckCircle, FiLayers, FiShield } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-primary mb-6">About the Research</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We are researchers at KAIST RISE lab (Korea Advanced Institute of Science & Technology).
            Our team is focused on addressing AI-assisted cheating in online chess.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card"
          >
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
              <FiShield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">The Problem</h3>
            <p className="text-gray-700">
              Cheating with AI has increasingly disrupted fair play on popular online chess platforms such as Chess.com and Lichess,
              creating an uneven playing field and diminishing the experience for honest players.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card"
          >
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
              <FiLayers className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Approach</h3>
            <p className="text-gray-700">
              We are creating an innovative dataset to detect AI-assisted cheating by collecting authentic gameplay data
              where players occasionally have access to AI suggestions, allowing us to study real cheating patterns.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card"
          >
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
              <FiCheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">The Goal</h3>
            <p className="text-gray-700">
              Our research aims to develop algorithms capable of accurately identifying subtle and partial uses of AI cheating,
              fostering a fair and transparent online chess environment for players worldwide.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 