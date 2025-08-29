// src/components/Hero.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import vrImage from "../../Public/VR.webp"; // Add this import statement

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mount
    setIsVisible(true);
  }, []);

  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="hidden lg:block lg:absolute lg:inset-0">
        <svg
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0"
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-gradient">
              <stop stopColor="#4F46E5" stopOpacity="0.3" offset="0%" />
              <stop stopColor="#4F46E5" stopOpacity="0" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-gradient)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left pt-32">
              <h1
                className={`text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl transition-all duration-1000 ease-out transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <span className="block xl:inline">Enhance Your</span>{' '}
                <span className="block text-blue-600 xl:inline">Soft Skills with VR</span>
              </h1>
              <p
                className={`mt-3 text-base text-gray-600 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 transition-all duration-1000 delay-300 ease-out transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                Practice mock interviews, improve communication skills, and develop leadership abilities in an interactive virtual reality environment. Get real-time feedback and track your progress.
              </p>
              <div
                className={`mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start transition-all duration-1000 delay-500 ease-out transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <div className="rounded-md shadow">
                  <Link
                    to="/demo"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors duration-300"
                  >
                    Try a Demo
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/learn-more"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700 md:py-4 md:text-lg md:px-10 transition-colors duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      {/* VR image/illustration */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-gray-300 dark:bg-gray-800 flex items-center justify-center">
          <div
            className={`transition-all duration-1000 delay-700 ease-out transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <img
              src={vrImage} // Change the src to the imported variable
              alt="VR Training"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;