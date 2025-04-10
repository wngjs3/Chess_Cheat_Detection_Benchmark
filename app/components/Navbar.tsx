'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 스크롤 함수 추가
  const scrollToSection = (id: string) => {
    if (id.startsWith('#')) {
      id = id.substring(1);
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // 홈페이지가 아닌 경우 홈페이지로 이동 후 해당 섹션으로 스크롤
      window.location.href = `/${id}`;
    }
  };

  // 페이지 로드 시 URL의 해시를 확인하여 해당 섹션으로 스크롤
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const id = hash.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
      }
    }
  }, []);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <img 
                src="/Chess_Cheat_Detection_Benchmark/KAIST_logo.png" 
                alt="KAIST Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold text-primary">KAIST RISE Lab</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('goals')}
              className="text-gray-700 hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
            >
              Research Goals
            </button>
            <button 
              onClick={() => scrollToSection('participate')}
              className="text-gray-700 hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
            >
              Participate
            </button>
            <Link href="/guide" className="text-gray-700 hover:text-primary transition-colors">
              Guide
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
              <button 
                onClick={() => {
                  scrollToSection('about');
                  setIsOpen(false);
                }}
                className="text-gray-700 hover:text-primary transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
              >
                About
              </button>
              <button 
                onClick={() => {
                  scrollToSection('goals');
                  setIsOpen(false);
                }}
                className="text-gray-700 hover:text-primary transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
              >
                Research Goals
              </button>
              <button 
                onClick={() => {
                  scrollToSection('participate');
                  setIsOpen(false);
                }}
                className="text-gray-700 hover:text-primary transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
              >
                Participate
              </button>
              <Link 
                href="/guide" 
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Guide
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