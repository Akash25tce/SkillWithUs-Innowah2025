import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "SkillWithUs helped me overcome my interview anxiety. The VR sessions felt so real that actual interviews became much easier to handle!",
      name: "Anand",
      position: "Computer Science, TCE",
      rating: 5,
      avatar: "/src/assets/images/anand.jpg" // Using placeholder image
    },
    {
      id: 2,
      quote: "The soft skills training in VR gave me an edge during campus placements. I was able to communicate more confidently with recruiters.",
      name: "Akash",
      position: "Computer Science, TCE",
      rating: 5,
      avatar: "/src/assets/images/akash.jpg" 
    },
    {
      id: 3,
      quote: "As someone who used to struggle with public speaking, the immersive VR environment helped me practice presentations without the fear of judgment.",
      name: "Shriniha",
      position: "Computer Science, TCE",
      rating: 4,
      avatar: "/src/assets/images/shriniha.jpg"
    },
    {
      id: 4,
      quote: "The personalized feedback from the AI assistant after each VR session showed me exactly what I needed to improve. Secured my dream job as a result!",
      name: "Lavanya",
      position: "Computer Science, TCE",
      rating: 5,
      avatar: "/src/assets/images/lavanya.jpg"
    },
    {
      id: 5,
      quote: "Group discussion simulations in VR helped me develop leadership qualities I didn't know I had. Now I can confidently steer team conversations.",
      name: "Gokul",
      position: "Computer Science, TCE",
      rating: 5,
      avatar: "/src/assets/images/gokul.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Render stars based on rating
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={18} 
        fill={i < rating ? "#FFD700" : "none"} 
        stroke={i < rating ? "#FFD700" : "#CBD5E0"} 
      />
    ));
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">What TCE Students Say</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from students at Thiagarajar College of Engineering who have transformed their soft skills with our VR training platform.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <img 
                src={testimonials[currentIndex].avatar} 
                alt={testimonials[currentIndex].name} 
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex mb-2">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
                <p className="text-gray-700 dark:text-gray-200 text-lg italic mb-4">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex flex-col">
                  <span className="font-bold text-gray-800 dark:text-white">
                    {testimonials[currentIndex].name}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {testimonials[currentIndex].position}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-gray-600 dark:text-gray-300" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-gray-600 dark:text-gray-300" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex 
                    ? 'bg-blue-500' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;