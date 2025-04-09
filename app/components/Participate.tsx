'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';

const Participate = () => {
  const steps = [
    {
      number: '01',
      title: 'Play Chess',
      description: 'Simply play chess on our designated online server. No special skills required!'
    },
    {
      number: '02',
      title: 'Optional AI Assistance',
      description: 'During games, you\'ll randomly have access to a special feature (temporary AI suggestions). It\'s completely optional to use.'
    },
    {
      number: '03',
      title: 'Contribute to Research',
      description: 'Your participation helps us identify various cheating patterns and build high-performance AI detection models.'
    }
  ];

  return (
    <section id="participate" className="py-20 bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-primary mb-6">How to Participate</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join us in our research by playing chess and contributing to the development of AI cheating detection algorithms.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="card relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 text-8xl font-bold text-gray-100 z-0">
                {step.number}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-700">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Data Usage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-primary mb-4">Data Usage and Contributor Credit</h3>
          <ul className="space-y-3">
            <li className="flex gap-2">
              <FiChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <span>All collected game data will be fully anonymized and used exclusively for research purposes.</span>
            </li>
            <li className="flex gap-2">
              <FiChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <span>The created dataset will be publicly available, allowing researchers worldwide to develop and study advanced AI cheating detection methods.</span>
            </li>
            <li className="flex gap-2">
              <FiChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <span>Participants who significantly contribute to the dataset can choose to have their nicknames acknowledged in published research papers.</span>
            </li>
          </ul>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">
            Join us to make online chess fairer and more enjoyable for everyone!
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/guide" className="btn bg-secondary text-white hover:bg-secondary/90 inline-block">
              Read Participation Guide
            </Link>
            <Link href="/play" className="btn btn-primary inline-block">
              Start Playing Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Participate; 