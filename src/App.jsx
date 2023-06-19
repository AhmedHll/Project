import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Transition } from '@headlessui/react';
import BackgroundImage from './assets/imgs/landing/landing-background.jpg'


const App = () => {
  const loginFormRef = useRef(null);
  const registerFormRef = useRef(null);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false);
  };

  const handleRegisterClick = () => {
    setShowLoginForm(false);
    setShowRegisterForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex">
          <div className="bg-blue-600 py-6 px-8 text-white w-1/2">
            <h1 className="text-3xl font-bold uppercase">Welcome to Pixels</h1>
            <p className="text-xl">The Generation</p>
            <div className="mt-8">
              <button
                onClick={handleLoginClick}
                className="bg-white text-blue-600 hover:bg-blue-100 px-6 py-2 rounded-md mr-4"
              >
                Login
              </button>
              <button
                onClick={handleRegisterClick}
                className="bg-white text-blue-600 hover:bg-blue-100 px-6 py-2 rounded-md"
              >
                Register
              </button>
            </div>
          </div>
          <div className="w-1/2 bg-gray-100 px-8 py-12">
            <Transition
              show={showLoginForm}
              enter="transition-opacity duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {(ref) => (
                <form ref={loginFormRef} className="opacity-0">
                  {/* Login form content */}
                </form>
              )}
            </Transition>

            <Transition
              show={showRegisterForm}
              enter="transition-opacity duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {(ref) => (
                <form ref={registerFormRef} className="opacity-0">
                  {/* Register form content */}
                </form>
              )}
            </Transition>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;