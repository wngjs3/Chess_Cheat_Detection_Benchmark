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
              <div className="mb-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="http://34.135.107.186" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary text-lg py-3 px-6 inline-flex items-center justify-center"
                >
                  Access Chess Platform
                  <FiExternalLink className="ml-2" />
                </a>
                <p className="text-gray-600 text-center sm:text-left">
                  Click the button to open the chess platform in a new tab
                </p>
              </div>
              
              <h3 className="text-xl font-bold mb-4">2. Create an Account or Login</h3>
              <p className="mb-4">First, you'll need to create an account or login with your existing username.</p>
              
              <div className="mb-8">
                <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/Chess_Cheat_Detection_Benchmark/images/create_account.png" 
                    alt="Create account screen" 
                    className="w-full"
                  />
                </div>
                <p className="text-sm text-gray-500 text-center">Account creation screen</p>
              </div>
              
              <div className="mb-8">
                <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/Chess_Cheat_Detection_Benchmark/images/login.png" 
                    alt="Login screen" 
                    className="w-full"
                  />
                </div>
                <p className="text-sm text-gray-500 text-center">Login screen for existing users</p>
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
                      src="/Chess_Cheat_Detection_Benchmark/images/create_game.png" 
                      alt="Create a new game" 
                      className="w-full"
                    />
                  </div>
                  <p className="text-sm text-gray-500 text-center">Game creation screen</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Option 2: Join an Existing Game</h3>
                  <p className="mb-4">Select from available games created by other players.</p>
                  <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
                    <img 
                      src="/Chess_Cheat_Detection_Benchmark/images/join_game.png" 
                      alt="Join existing game" 
                      className="w-full"
                    />
                  </div>
                  <p className="text-sm text-gray-500 text-center">List of available games to join</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-10">
              <h2 className="text-2xl font-bold mb-6">Using AI Assistance (Cheating Feature)</h2>
              
              <div className="mb-8">
                <p className="mb-4">In some games, you may be assigned as a player with AI assistance capability (cheating enabled).</p>
                <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/Chess_Cheat_Detection_Benchmark/images/cheater_view.png" 
                    alt="Cheater view" 
                    className="w-full"
                  />
                </div>
                <p className="text-sm text-gray-500 text-center">Game interface with "Cheating Enabled" option</p>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold mb-3">Important Notes:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You will have <strong>a limited number of chances</strong> to use AI assistance during the game</li>
                  <li>Press "Use Cheat" button to have the AI make the best move for you</li>
                  <li>Use this feature strategically for research purposes</li>
                  <li>If you are not assigned as a player with AI assistance, play normally</li>
                </ul>
              </div>
              
              <div className="mb-8">
                <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/Chess_Cheat_Detection_Benchmark/images/normal_view.png" 
                    alt="Normal player view" 
                    className="w-full"
                  />
                </div>
                <p className="text-sm text-gray-500 text-center">View for normal player without cheating capability</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Ready to Play?</h2>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a 
                  href="http://34.135.107.186" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary text-lg py-3 px-6 w-full sm:w-auto inline-flex items-center justify-center"
                >
                  Go to Chess Platform
                  <FiExternalLink className="ml-2" />
                </a>
                <Link href="/" className="btn bg-gray-200 text-gray-800 hover:bg-gray-300 w-full sm:w-auto text-center">
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