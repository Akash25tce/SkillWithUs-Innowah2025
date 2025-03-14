// src/components/HowItWorks.jsx
import { useState, useEffect } from "react";

function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(document.querySelector('.how-it-works-section'));
    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 5);
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [isVisible]);
  
  const steps = [
    {
      id: 1,
      title: "Sign Up & Create Profile",
      description: "Create your account and set up your profile with your skills and goals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Choose a Training Mode",
      description: "Select from mock interviews, communication training, or leadership scenarios.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Start the VR Session",
      description: "Enter the virtual environment and engage with AI-powered scenarios.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Receive AI Feedback",
      description: "Get detailed analysis and personalized feedback on your performance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Track Progress & Improve",
      description: "Monitor your improvement over time and focus on areas that need attention.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 how-it-works-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Simple Steps to Improve Your Skills
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 lg:mx-auto">
            Our platform provides a straightforward process to enhance your soft skills using virtual reality.
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            {/* Progress line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 dark:bg-gray-700 h-full"></div>
            
            {/* Steps */}
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className={`relative mb-12 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Step number and line connector */}
                  <div className="hidden md:flex flex-col items-center">
                    <div 
                      className={`flex items-center justify-center w-12 h-12 rounded-full border-4 ${
                        activeStep === index 
                          ? 'border-blue-600 bg-blue-100 dark:bg-blue-900 text-blue-600' 
                          : 'border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600'
                      } z-10 transition-all duration-300`}
                    >
                      <span className="text-lg font-bold">{step.id}</span>
                    </div>
                  </div>
                  
                  {/* Step content */}
                  <div 
                    className={`md:w-5/12 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <div 
                      className={`p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md ${
                        activeStep === index 
                          ? 'ring-2 ring-blue-600' 
                          : ''
                      } transition-all duration-300`}
                    >
                      <div className="md:hidden flex justify-start mb-4">
                        <div 
                          className={`flex items-center justify-center w-10 h-10 rounded-full ${
                            activeStep === index 
                              ? 'bg-blue-100 dark:bg-blue-900 text-blue-600' 
                              : 'bg-gray-100 dark:bg-gray-700'
                          }`}
                        >
                          <span className="text-lg font-bold">{step.id}</span>
                        </div>
                      </div>
                      <div className="flex items-center mb-4">
                        <div className="mr-4 text-blue-600 dark:text-blue-400">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;