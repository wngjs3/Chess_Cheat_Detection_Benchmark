'use client';

import Link from 'next/link';
import { FiGithub, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-4">KAIST Chess Research</h3>
            <p className="text-gray-300">
              Research initiative focused on detecting AI-assisted cheating in online chess games to promote fair play.
            </p>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#goals" className="text-gray-300 hover:text-white transition-colors">
                  Research Goals
                </Link>
              </li>
              <li>
                <Link href="/#participate" className="text-gray-300 hover:text-white transition-colors">
                  How to Participate
                </Link>
              </li>
              <li>
                <Link href="/play" className="text-gray-300 hover:text-white transition-colors">
                  Play Chess
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FiMail className="h-5 w-5" />
                <a href="mailto:juheon.choi@kaist.ac.kr" className="text-gray-300 hover:text-white transition-colors">
                  juheon.choi@kaist.ac.kr
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiGithub className="h-5 w-5" />
                <a 
                  href="https://github.com/juheon-choi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {currentYear} KAIST AI Research. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 