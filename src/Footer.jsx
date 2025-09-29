import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0D2C54] text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">


        <div>
          <h2 className="text-xl font-bold mb-4">Carbonix</h2>
          <p className="text-gray-400">
            Carbonix is dedicated to reducing your carbon footprint and promoting
            sustainable solutions for a greener future.
          </p>
        </div>


        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#home" className="hover:text-green-500 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-green-500 transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-green-500 transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-green-500 transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-green-500 transition-colors"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-green-500 transition-colors"><FaLinkedin size={24} /></a>
            <a href="#" className="hover:text-green-500 transition-colors"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-green-500 transition-colors"><FaFacebook size={24} /></a>
          </div>
        </div>

      </div>

      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Carbonix. All rights reserved.
      </div>
    </footer>
  );
}
