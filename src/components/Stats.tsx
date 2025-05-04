
import { platformStats } from '@/utils/dummyData';
import { Badge } from '@/components/ui/badge';

const Stats = () => {
  return (
    <section className="py-16 bg-navy-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gold text-navy-dark text-sm px-4 py-1">Platform Impact</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforming African Mining Through Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our platform is revolutionizing gold mining investments and creating sustainable growth opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <StatCard 
            value={`$${(platformStats.totalRaised / 1000000).toFixed(1)}M`} 
            label="Total Investments"
          />
          <StatCard 
            value={platformStats.totalInvestors.toString()} 
            label="Investors"
          />
          <StatCard 
            value={platformStats.completedProjects.toString()} 
            label="Projects Completed"
          />
          <StatCard 
            value={`${platformStats.averageReturn}%`} 
            label="Avg. Return Rate"
          />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="p-6 bg-navy/80 rounded-xl text-center overflow-hidden relative group">
      {/* Highlight effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="relative">
        <div className="text-3xl md:text-4xl font-bold mb-2 text-gold">{value}</div>
        <div className="text-gray-300">{label}</div>
      </div>
    </div>
  );
};

export default Stats;
