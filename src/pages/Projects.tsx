
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { featuredProjects } from '@/utils/dummyData';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
              All Mining Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our selection of verified gold mining operations across Africa, each offering unique investment opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
