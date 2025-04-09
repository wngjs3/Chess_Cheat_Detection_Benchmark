import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';

export default function Guide() {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 flex items-center">
              <Link href="/" className="flex items-center text-primary hover:underline">
                <FiArrowLeft className="mr-2" />
                Back to Home
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">How to Participate in Chess Research</h1>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-10">
              <h2 className="text-2xl font-bold mb-6">Getting Started</h2>
              
              <h3 className="text-xl font-bold mb-4">1. Access the Research Chess Platform</h3>
              <p className="mb-6">
                Visit: <a 
                  href="http://34.64.183.234" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  http://34.64.183.234
                  <FiExternalLink className="ml-1" />
                </a>
              </p>
              
              <h3 className="text-xl font-bold mb-4">2. Choose a Game Type</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Normal Chess Game</strong>: No time limit per move</li>
                <li><strong>Blitz Chess Game</strong>: 5 minutes total for all your moves</li>
              </ul>
              
              <div className="mb-8">
                <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/Chess_Cheat_Detection_Benchmark/images/image1.png" 
                    alt="Game type selection" 
                    className="w-full"
                  />
                </div>
                <p className="text-sm text-gray-500 text-center">Game type selection screen</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-10">
              <h2 className="text-2xl font-bold mb-6">Playing a Game</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Option 1: Create a New Game</h3>
                  <p className="mb-4">Create a new game and wait for an opponent to join.</p>
                  <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
                    <img 
                      src="/Chess_Cheat_Detection_Benchmark/images/image2.png" 
                      alt="Waiting for opponent" 
                      className="w-full"
                    />
                  </div>
                  <p className="text-sm text-gray-500 text-center">Waiting for an opponent to join</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Option 2: Join an Existing Game</h3>
                  <p className="mb-4">Select from available games created by other players.</p>
                  <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
                    <img 
                      src="/Chess_Cheat_Detection_Benchmark/images/image4.png" 
                      alt="Join existing game" 
                      className="w-full"
                    />
                  </div>
                  <p className="text-sm text-gray-500 text-center">List of available games to join</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Starting the Game</h3>
                <p className="mb-4">When a match is found, the game will begin immediately.</p>
                <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/Chess_Cheat_Detection_Benchmark/images/image3.png" 
                    alt="Game starting" 
                    className="w-full"
                  />
                </div>
                <p className="text-sm text-gray-500 text-center">Game begins when an opponent is found</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-10">
              <h2 className="text-2xl font-bold mb-6">Using AI Assistance (Cheating Feature)</h2>
              
              <div className="mb-8">
                <p className="mb-4">In some games, you may be assigned as a player with AI assistance capability.</p>
                <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/Chess_Cheat_Detection_Benchmark/images/image5.png" 
                    alt="Cheater view" 
                    className="w-full"
                  />
                </div>
                <p className="text-sm text-gray-500 text-center">Game interface with AI assistance option</p>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold mb-3">Important Notes:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You will have <strong>only 5 chances</strong> to use AI assistance during the game</li>
                  <li>Press "Use Cheat" button to have the AI make the best move for you</li>
                  <li>Use this feature strategically for research purposes</li>
                  <li>If you are not assigned as a player with AI assistance, play normally</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Ready to Play?</h2>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="http://34.64.183.234" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary inline-flex items-center"
                >
                  Go to Chess Platform
                  <FiExternalLink className="ml-2" />
                </a>
                <Link href="/" className="btn bg-gray-200 text-gray-800 hover:bg-gray-300">
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 