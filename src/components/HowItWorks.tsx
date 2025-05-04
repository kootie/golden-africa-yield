
import { ArrowDown, Database, Earth, GoldIcon, Shield, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      title: "Project Verification",
      description: "Mining operations undergo rigorous due diligence, legal compliance checks, and environmental impact assessment.",
      icon: ShieldCheck,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "IoT Integration",
      description: "Real-time data collection devices are installed at verified mine sites to monitor production and environmental metrics.",
      icon: DeviceIcon,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Blockchain Recording",
      description: "Operational data is securely recorded on blockchain for full transparency and tamper-proof verification.",
      icon: DatabaseIcon,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Investor Participation",
      description: "Investors can browse projects, review verified data, and participate with their desired investment amount.",
      icon: WalletIcon,
      color: "bg-amber-100 text-amber-600"
    },
    {
      title: "Smart Distribution",
      description: "Returns are automatically calculated and distributed based on verified production data and investment share.",
      icon: ShareIcon,
      color: "bg-red-100 text-red-600"
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            How GoldFund Africa Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines blockchain transparency with IoT technology to bring trust
            and efficiency to gold mining investments.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 top-10 bottom-0 -ml-px w-0.5 bg-gold-light hidden md:block"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row gap-8 mb-14 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1">
                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-4 mx-auto md:mx-0 ${index % 2 === 1 ? 'md:ml-auto' : ''}`}>
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-navy-dark text-center md:text-left">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center md:text-left">
                  {step.description}
                </p>
              </div>
              
              <div className="relative hidden md:block">
                <div className="w-10 h-10 rounded-full bg-gold border-4 border-white shadow-lg flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
              </div>
              
              <div className="flex-1"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Icons
const ShieldCheck = ({ size = 24 }) => (
  <Shield size={size} />
);

const DeviceIcon = ({ size = 24 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M6 12h12" />
    <path d="M8 16h8" />
    <path d="M7 8h.01" />
    <path d="M12 8h.01" />
    <path d="M17 8h.01" />
  </svg>
);

const DatabaseIcon = ({ size = 24 }) => (
  <Database size={size} />
);

const WalletIcon = ({ size = 24 }) => (
  <Wallet size={size} />
);

const ShareIcon = ({ size = 24 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 22h4a2 2 0 0 0 2-2v-4" />
    <path d="M8 22H4a2 2 0 0 1-2-2v-4" />
    <path d="M16 2h4a2 2 0 0 1 2 2v4" />
    <path d="M8 2H4a2 2 0 0 0-2 2v4" />
    <path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" />
    <path d="m16 8-3 2" />
    <path d="m8 8 3 2" />
    <path d="m16 16-3-2" />
    <path d="m8 16 3-2" />
  </svg>
);

export default HowItWorks;
