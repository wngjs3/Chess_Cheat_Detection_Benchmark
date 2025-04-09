'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 relative">
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                <div className="bg-chess-light"></div>
                <div className="bg-chess-dark"></div>
                <div className="bg-chess-dark"></div>
                <div className="bg-chess-light"></div>
              </div>
            </div>
            <span className="text-xl font-bold text-primary">KAIST Chess Research</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/#about" className="text-gray-700 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/#goals" className="text-gray-700 hover:text-primary transition-colors">
              Research Goals
            </Link>
            <Link href="/#participate" className="text-gray-700 hover:text-primary transition-colors">
              Participate
            </Link>
            <Link href="/play" className="btn btn-primary">
              Play Chess
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FiX className="h-6 w-6 text-gray-700" />
            ) : (
              <FiMenu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/#about" 
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/#goals" 
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Research Goals
              </Link>
              <Link 
                href="/#participate" 
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Participate
              </Link>
              <Link 
                href="/play" 
                className="btn btn-primary inline-block text-center"
                onClick={() => setIsOpen(false)}
              >
                Play Chess
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 