
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-navy to-navy-dark overflow-hidden min-h-[calc(100vh-80px)]">
      {/* Gold circle accents */}
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gold/20 rounded-full filter blur-xl"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-gold/10 rounded-full filter blur-lg"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="text-gold">Invest</span> in African Gold,{' '}
            <span className="text-gold">Empower</span> Communities
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12">
            A transparent blockchain platform connecting investors to verified gold mining operations across Africa, driven by IoT technology and smart contracts.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-navy-dark font-semibold text-lg py-6 px-8">
              <Link to="/projects">Explore Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg py-6 px-8">
              <Link to="/how-it-works">Learn More</Link>
            </Button>
          </div>
          
          <div className="mt-16">
            <button 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center text-white hover:text-gold transition-colors"
            >
              <span className="mr-2">Discover How It Works</span>
              <ArrowDown className="animate-bounce" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative mesh grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSIjZmZmZmZmMTAiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-20"></div>
    </div>
  );
};

export default HeroSection;
