import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600" id="cta">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Enhance Your Soft Skills with VR?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students and professionals who are improving their skills with our immersive VR training platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 flex items-center justify-center gap-2">
              Get Started Now
              <ArrowRight size={20} />
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition duration-300">
              Schedule a Demo
            </button>
          </div>
          
          <p className="text-blue-100 mt-6">
            No credit card required • Free 14-day trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;