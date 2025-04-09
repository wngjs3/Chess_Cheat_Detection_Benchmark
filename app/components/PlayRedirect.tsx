'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiHelpCircle } from 'react-icons/fi';

const PlayRedirect = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Set up countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Redirect to the chess server
          window.location.href = "http://34.64.183.234/";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Redirecting to Chess Research Platform</h1>
        
        <div className="bg-primary/10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8">
          <span className="text-4xl font-bold text-primary">{countdown}</span>
        </div>
        
        <p className="text-xl mb-8">
          You are being redirected to our research chess server where you can play and contribute to our AI detection research.
        </p>
        
        <div className="grid sm:grid-cols-3 gap-4 max-w-md mx-auto">
          <Link 
            href="/"
            className="flex items-center justify-center gap-2 btn bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            <FiArrowLeft className="h-5 w-5" />
            <span>Home</span>
          </Link>
          
          <Link 
            href="/guide"
            className="flex items-center justify-center gap-2 btn bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            <FiHelpCircle className="h-5 w-5" />
            <span>Guide</span>
          </Link>
          
          <a 
            href="http://34.64.183.234/" 
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go Now
          </a>
        </div>
        
        <p className="mt-8 text-gray-600">
          By playing on our server, you agree to participate in our research. Your games may be recorded for AI detection research purposes.
        </p>
      </motion.div>
    </div>
  );
};

export default PlayRedirect; 