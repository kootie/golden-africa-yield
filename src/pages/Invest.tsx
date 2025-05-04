
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { featuredProjects } from "@/utils/dummyData";
import InvestmentForm from "@/components/InvestmentForm";

const Invest = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  
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
  
  return (
    <>
      <Header />
      <main className="bg-gray-50 py-12 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-navy-dark mb-6">Invest in {project.name}</h1>
            <p className="text-xl text-gray-600 mb-8">Complete your investment in this verified gold mining project in {project.country}.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                  <h2 className="text-xl font-bold text-navy-dark mb-4">Project Summary</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Location</span>
                      <span className="font-medium">{project.location}, {project.country}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Project Goal</span>
                      <span className="font-medium">${project.targetAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Current Investors</span>
                      <span className="font-medium">{project.investors}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Expected ROI</span>
                      <span className="font-medium text-gold-dark">{project.returnRate}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time Remaining</span>
                      <span className="font-medium">{project.timeLeft} days</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h2 className="text-xl font-bold text-navy-dark mb-4">Verification Status</h2>
                  
                  <div className="flex items-center p-4 bg-green-50 text-green-800 rounded-lg mb-4">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                      <h3 className="text-sm font-medium">Verified by GoldFund Africa</h3>
                      <p className="text-xs mt-1">This project has passed our comprehensive due diligence process.</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Legal compliance verified
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Environmental impact assessment completed
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Local community engagement confirmed
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      IoT integration installed and operational
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Smart contract audited and secured
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
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

export default Invest;
