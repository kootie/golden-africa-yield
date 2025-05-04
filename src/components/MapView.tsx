
import { useEffect, useRef } from 'react';
import { MineProject } from '@/utils/dummyData';

interface MapViewProps {
  projects: MineProject[];
  selectedProject?: string;
  onSelectProject?: (projectId: string) => void;
}

const MapView = ({ projects, selectedProject, onSelectProject }: MapViewProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // In a real implementation, we'd integrate with a mapping library like Mapbox or Google Maps
    // For the prototype, we'll show a placeholder with project markers
    
  }, [projects, selectedProject]);
  
  return (
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden border border-gray-200 bg-slate-100">
      <div ref={mapRef} className="absolute inset-0">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        
        {/* Placeholder content */}
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <div className="text-xl font-semibold text-navy-dark mb-2">Interactive Map View</div>
          <p className="text-sm text-gray-500 max-w-xs text-center">
            In the production version, an interactive map would show the locations of all mining projects across Africa.
          </p>
        </div>
        
        {/* Project markers */}
        {projects.map((project) => (
          <div
            key={project.id}
            className={`absolute w-6 h-6 rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2 border-2 border-white flex items-center justify-center
              ${selectedProject === project.id ? 'bg-gold-dark scale-125 z-10' : 'bg-gold hover:scale-110'}
              transition-all duration-200`}
            style={{ 
              // Rough positioning for demonstration
              left: `${30 + (project.id.charCodeAt(0) % 5) * 15}%`, 
              top: `${25 + (project.id.charCodeAt(0) % 3) * 20}%` 
            }}
            onClick={() => onSelectProject?.(project.id)}
          >
            <span className="text-xs font-bold text-navy-dark">{project.id}</span>
            
            {selectedProject === project.id && (
              <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-2 text-xs text-navy-dark whitespace-nowrap">
                {project.name}, {project.country}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapView;
