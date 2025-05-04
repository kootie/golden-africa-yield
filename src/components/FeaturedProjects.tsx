
import { featuredProjects } from '@/utils/dummyData';
import ProjectCard from './ProjectCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FeaturedProjects = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            Featured Mining Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover high-potential gold mining operations across Africa, verified by our team and monitored with IoT technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-2 border-navy text-navy hover:bg-navy hover:text-white">
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
