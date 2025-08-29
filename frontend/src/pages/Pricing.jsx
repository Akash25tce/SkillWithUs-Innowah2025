import React from 'react';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: "Free Trial",
      price: "₹0",
      description: "Explore the basics with a no-commitment trial.",
      features: [
        { text: "1 Mock Interview Session", included: true },
        { text: "Basic AI Feedback", included: true },
        { text: "Limited Scenario Access", included: true },
        { text: "Progress Tracking", included: false },
        { text: "Priority Support", included: false },
      ],
      cta: "Start Free Trial",
      link: "/signup",
    },
    {
      name: "Student Plan",
      price: "₹1,000",
      period: "per month",
      description: "For students serious about acing their placements.",
      features: [
        { text: "Unlimited Mock Interviews", included: true },
        { text: "Advanced AI Feedback", included: true },
        { text: "Full Scenario Library", included: true },
        { text: "Detailed Progress Tracking", included: true },
        { text: "Priority Support", included: false },
      ],
      cta: "Choose Plan",
      link: "/signup",
      isPopular: true,
    },
    {
      name: "Professional",
      price: "₹3,500",
      period: "per month",
      description: "Elevate your career with a complete skills package.",
      features: [
        { text: "Unlimited Sessions", included: true },
        { text: "Advanced AI Feedback", included: true },
        { text: "Full Scenario Library", included: true },
        { text: "Detailed Progress Tracking", included: true },
        { text: "Priority Support", included: true },
      ],
      cta: "Choose Plan",
      link: "/signup",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-20 min-h-screen">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Flexible Plans for Your Success
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Choose the plan that fits your goals and start your journey towards confident communication and leadership.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 ${
                plan.isPopular ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Most Popular
                </div>
              )}
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-4">{plan.description}</p>
              <p className="text-5xl font-extrabold text-gray-900 dark:text-white mb-2">
                {plan.price}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">{plan.period}</p>
              
              <ul className="text-left space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                    {feature.included ? (
                      <Check className="text-green-500 mr-2" size={20} />
                    ) : (
                      <X className="text-red-500 mr-2" size={20} />
                    )}
                    {feature.text}
                  </li>
                ))}
              </ul>
              
              <Link
                to={plan.link}
                className="block w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;