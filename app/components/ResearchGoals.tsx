'use client';

import { motion } from 'framer-motion';
import { FiTarget, FiUsers, FiCheckSquare } from 'react-icons/fi';

const ResearchGoals = () => {
  const goals = [
    {
      icon: <FiTarget className="h-10 w-10 text-white" />,
      title: "Develop Detection Algorithms",
      description: "Create advanced algorithms capable of accurately identifying subtle and partial uses of AI assistance during chess games."
    },
    {
      icon: <FiUsers className="h-10 w-10 text-white" />,
      title: "Build Quality Dataset",
      description: "Generate a comprehensive dataset of games with and without AI assistance to enable high-precision detection models."
    },
    {
      icon: <FiCheckSquare className="h-10 w-10 text-white" />,
      title: "Promote Fair Play",
      description: "Contribute to fostering a fair and transparent online chess environment where players can compete on equal terms."
    }
  ];

  return (
    <section id="goals" className="py-20 bg-secondary text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">Research Goals</h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Our research aims to address the growing challenge of AI-assisted cheating in online chess through innovative data collection and algorithm development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <div className="bg-accent p-4 rounded-full w-fit mb-5">
                {goal.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{goal.title}</h3>
              <p className="text-gray-200">
                {goal.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchGoals; 