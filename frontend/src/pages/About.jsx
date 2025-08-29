import React from 'react';
import { Briefcase, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-20 min-h-screen">
      <div className="container mx-auto px-4">
        {/* About Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            About SkillWithUs
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our mission is to empower students and professionals to master critical soft skills through innovative and immersive virtual reality experiences.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-10 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Our Story</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg text-center">
            Founded by a team of tech enthusiasts and educators from Thiagarajar College of Engineering, SkillWithUs was born from the idea that traditional learning methods for soft skills were often ineffective. We saw the potential of virtual reality to create safe, repeatable, and realistic training scenarios. Our platform uses AI to provide instant feedback, helping users improve their communication, leadership, and public speaking abilities in a judgment-free environment.
          </p>
        </div>

        {/* Core Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <Users size={48} className="text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Empowerment</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We believe in giving every individual the tools to unlock their full potential and succeed in their careers.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <Briefcase size={48} className="text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Innovation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We are committed to using cutting-edge technology like VR and AI to revolutionize education and training.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <Award size={48} className="text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Excellence</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We strive for the highest quality in our platform, content, and the value we provide to our users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;