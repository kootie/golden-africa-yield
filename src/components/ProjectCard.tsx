
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { MineProject } from '@/utils/dummyData';
import { Shield, ShieldCheck } from 'lucide-react';

interface ProjectCardProps {
  project: MineProject;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const percentRaised = Math.round((project.raisedAmount / project.targetAmount) * 100);
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          {project.verificationStatus === 'verified' && (
            <Badge className="bg-green-600">
              <ShieldCheck className="h-3 w-3 mr-1" />
              Verified
            </Badge>
          )}
          {project.verificationStatus === 'pending' && (
            <Badge variant="outline" className="bg-yellow-500/80 text-white border-0">
              <Shield className="h-3 w-3 mr-1" />
              Pending Verification
            </Badge>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
          <div className="flex justify-between">
            <Badge className="bg-navy-dark text-white">{project.country}</Badge>
            <Badge variant="outline" className="bg-gold/90 text-navy-dark border-0 font-medium">
              {project.returnRate}% ROI
            </Badge>
          </div>
        </div>
      </div>
      
      <CardContent className="pt-4">
        <h3 className="text-xl font-bold text-navy-dark mb-2">
          {project.name}
        </h3>
        <p className="text-sm text-gray-500 mb-4">{project.location}</p>
        
        <p className="text-gray-600 mb-4 line-clamp-2 h-12">
          {project.description}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Progress</span>
            <span className="font-medium text-navy-dark">{percentRaised}%</span>
          </div>
          <Progress value={percentRaised} className="h-2 bg-gray-200" />
          <div className="flex justify-between text-sm">
            <span className="font-medium text-navy-dark">
              ${(project.raisedAmount / 1000).toFixed(1)}k raised
            </span>
            <span className="text-gray-500">
              ${(project.targetAmount / 1000).toFixed(0)}k goal
            </span>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
          <div className="text-sm text-gray-500">
            <span className="font-medium text-navy-dark">{project.investors}</span> investors
          </div>
          <div className="text-sm text-gray-500">
            <span className="font-medium text-navy-dark">{project.timeLeft}</span> days left
          </div>
          <Link 
            to={`/project/${project.id}`}
            className="text-sm font-medium text-gold-dark hover:text-gold transition-colors"
          >
            View Details →
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
