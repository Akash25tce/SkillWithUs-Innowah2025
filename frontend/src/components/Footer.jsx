import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300" id="footer">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">SkillWithUs</h3>
            <p className="mb-4 text-gray-400">
              Revolutionizing soft skills development through immersive virtual reality training.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition">How It Works</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition">Pricing</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0" size={18} />
                <span>123 Innovation Drive, Tech City, TC 12345</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 flex-shrink-0" size={18} />
                <a href="mailto:support@skillwithus.com" className="hover:text-white transition">
                  support@skillwithus.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 flex-shrink-0" size={18} />
                <a href="tel:+15551234567" className="hover:text-white transition">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar with copyright and legal links */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {currentYear} SkillWithUs. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white transition">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;