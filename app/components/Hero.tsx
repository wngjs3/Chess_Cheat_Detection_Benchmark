'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI Chess Cheating Detection Research
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Help us develop algorithms to detect AI-assisted cheating in online chess games and create a fair playing environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#participate" className="btn bg-white text-primary hover:bg-gray-100">
                Join Research
              </Link>
              <Link href="/play" className="btn bg-accent text-white hover:bg-accent/90">
                Play Chess
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <img 
                src="/Chess_Cheat_Detection_Benchmark/cheating_image.png" 
                alt="AI Chess Cheating Detection" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 