
import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { featuredProjects } from "@/utils/dummyData";
import MineDataChart from "@/components/MineDataChart";
import MapView from "@/components/MapView";
import { ShieldCheck, Calendar, Users, TrendingUp } from "lucide-react";
import InvestmentForm from "@/components/InvestmentForm";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState("overview");
  
  // Find project based on ID from URL params
  const project = featuredProjects.find(project => project.id === id);
  
  if (!project) {
    return (
      <>
        <Header />
        <main className="container mx-auto px-4 py-12 min-h-[70vh]">
          <div className="text-center py-20">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
            <p className="text-gray-600 mb-6">The project you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <a href="/projects">Browse Projects</a>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  
  const percentRaised = Math.round((project.raisedAmount / project.targetAmount) * 100);
  
  return (
    <>
      <Header />
      <main className="pt-6 pb-20">
        <div className="container mx-auto px-4">
          {/* Project Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-navy-dark text-white">{project.country}</Badge>
                  {project.verificationStatus === 'verified' && (
                    <Badge className="bg-green-600 text-white">
                      <ShieldCheck className="mr-1 h-3 w-3" />
                      Verified
                    </Badge>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-navy-dark">{project.name}</h1>
                <p className="text-gray-500">{project.location}</p>
              </div>
              
              <div className="flex flex-col items-end">
                <p className="text-2xl font-bold text-navy-dark">
                  ${(project.raisedAmount).toLocaleString()}
                  <span className="text-gray-500 text-lg ml-2">/ ${(project.targetAmount).toLocaleString()}</span>
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                    <span><strong>{project.timeLeft}</strong> days left</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-gray-500" />
                    <span><strong>{project.investors}</strong> investors</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1 text-gold-dark" />
                    <span><strong>{project.returnRate}%</strong> ROI</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gold" 
                style={{ width: `${percentRaised}%` }}
              ></div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="col-span-1 lg:col-span-2">
              {/* Project Image */}
              <div className="mb-8 rounded-xl overflow-hidden h-72">
                <img 
                  src={project.imageUrl} 
                  alt={project.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Tabs */}
              <Tabs defaultValue="overview" className="mb-8">
                <TabsList className="mb-6">
                  <TabsTrigger value="overview" onClick={() => setActiveTab("overview")}>
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="data" onClick={() => setActiveTab("data")}>
                    Mine Data
                  </TabsTrigger>
                  <TabsTrigger value="location" onClick={() => setActiveTab("location")}>
                    Location
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-navy-dark mb-3">About this Project</h2>
                    <p className="text-gray-700 leading-relaxed">
                      {project.description}
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      This mining operation has been carefully vetted by our team and complies with all environmental and labor regulations. The mine employs advanced extraction techniques and has a proven record of gold production over the past 5 years.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-bold text-navy-dark mb-3">Use of Funds</h2>
                    <p className="text-gray-700 leading-relaxed">
                      The raised capital will be utilized to expand operations, upgrade equipment, and implement IoT monitoring systems for improved efficiency and transparency. A portion of the funds will also be allocated to environmental rehabilitation and community development initiatives.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-bold text-navy-dark mb-3">Technology Implementation</h2>
                    <p className="text-gray-700 leading-relaxed">
                      This project integrates advanced IoT sensors to monitor gold extraction rates, worker activity, and environmental conditions. All collected data is automatically verified and recorded on the blockchain, ensuring transparent and tamper-proof reporting to investors.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="data">
                  <MineDataChart project={project} />
                </TabsContent>
                
                <TabsContent value="location">
                  <div className="space-y-4">
                    <MapView 
                      projects={[project]} 
                      selectedProject={project.id}
                    />
                    <div>
                      <h3 className="font-semibold text-navy-dark mb-2">Location Details</h3>
                      <p className="text-gray-700">
                        The {project.name} is located in {project.location}, {project.country}. The mine is situated approximately 45km from the nearest major city and has established transportation routes for equipment and produced materials.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Investment Form */}
            <div className="col-span-1">
              <div className="sticky top-24">
                <InvestmentForm project={project} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetail;
