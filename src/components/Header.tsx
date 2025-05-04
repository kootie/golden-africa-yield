
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GoldIcon } from './icons/GoldIcon';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <GoldIcon className="h-8 w-8 text-gold-dark" />
          <span className="text-xl font-bold text-navy-dark">GoldFund Africa</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-navy hover:text-gold-dark transition-colors">
            Home
          </Link>
          <Link to="/projects" className="text-navy hover:text-gold-dark transition-colors">
            Projects
          </Link>
          <Link to="/dashboard" className="text-navy hover:text-gold-dark transition-colors">
            Dashboard
          </Link>
          <Link to="/about" className="text-navy hover:text-gold-dark transition-colors">
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-gold-dark text-navy-dark hover:text-gold-dark">
            Sign In
          </Button>
          <Button className="bg-gold-dark hover:bg-gold text-white">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-navy-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="block py-2 text-navy-dark hover:text-gold-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/projects" 
              className="block py-2 text-navy-dark hover:text-gold-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/dashboard" 
              className="block py-2 text-navy-dark hover:text-gold-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-navy-dark hover:text-gold-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex flex-col space-y-3 pt-3">
              <Button variant="outline" className="border-gold-dark text-navy-dark w-full">
                Sign In
              </Button>
              <Button className="bg-gold-dark hover:bg-gold text-white w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
