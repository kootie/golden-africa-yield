
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Wallet, TrendingUp, ChartBar, Earth } from 'lucide-react';
import { featuredProjects, userInvestments } from '@/utils/dummyData';

// Mock data for the dashboard
const performanceData = [
  { name: 'Jan', value: 3200 },
  { name: 'Feb', value: 3400 },
  { name: 'Mar', value: 3100 },
  { name: 'Apr', value: 3700 },
  { name: 'May', value: 3900 },
  { name: 'Jun', value: 4200 },
  { name: 'Jul', value: 4500 },
];

// Chart colors
const COLORS = ['#F5D14C', '#654321', '#1A365D', '#10B981'];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Calculate total investment and returns
  const totalInvested = userInvestments.reduce((total, inv) => total + inv.amount, 0);
  const totalReturns = userInvestments.reduce((total, inv) => total + inv.returns, 0);
  
  // Get the invested projects
  const investedProjects = featuredProjects.filter(project => 
    userInvestments.some(inv => inv.projectId === project.id)
  );
  
  // Portfolio breakdown data for pie chart
  const portfolioData = userInvestments.map(inv => {
    const project = featuredProjects.find(p => p.id === inv.projectId);
    return {
      name: project?.name || 'Unknown',
      value: inv.amount
    };
  });
  
  // Placeholder authentication state
  const isAuthenticated = true;  // In a real app, this would come from an auth context
  
  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <main className="bg-gray-50 min-h-screen py-12">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-sm">
              <h1 className="text-2xl font-bold mb-4">Sign in Required</h1>
              <p className="text-gray-600 mb-6">Please sign in to access your investment dashboard.</p>
              <Button className="bg-gold-dark text-navy-dark hover:bg-gold">Sign In</Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-navy-dark mb-8">Investor Dashboard</h1>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Total Invested"
              value={`$${totalInvested.toLocaleString()}`}
              icon={<Wallet className="text-gold" size={24} />}
              change="+15.3%"
              trend="up"
            />
            <StatCard
              title="Total Returns"
              value={`$${totalReturns.toLocaleString()}`}
              icon={<TrendingUp className="text-green-500" size={24} />}
              change="+8.2%"
              trend="up"
            />
            <StatCard
              title="Active Projects"
              value={investedProjects.length.toString()}
              icon={<ChartBar className="text-blue-500" size={24} />}
              change="0"
              trend="neutral"
            />
            <StatCard
              title="Countries"
              value={Array.from(new Set(investedProjects.map(p => p.country))).length.toString()}
              icon={<Earth className="text-purple-500" size={24} />}
              change="+1"
              trend="up"
            />
          </div>
          
          {/* Dashboard Tabs */}
          <Tabs defaultValue="overview" className="mb-6">
            <TabsList className="mb-6">
              <TabsTrigger value="overview" onClick={() => setActiveTab("overview")}>
                Overview
              </TabsTrigger>
              <TabsTrigger value="investments" onClick={() => setActiveTab("investments")}>
                My Investments
              </TabsTrigger>
              <TabsTrigger value="analytics" onClick={() => setActiveTab("analytics")}>
                Analytics
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-navy-dark mb-4">Portfolio Performance</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={performanceData}
                          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#F5D14C" stopOpacity={0.8} />
                              <stop offset="95%" stopColor="#F5D14C" stopOpacity={0.1} />
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                          <XAxis dataKey="name" />
                          <YAxis 
                            tickFormatter={(value) => `$${value}`}
                            axisLine={false}
                            tickLine={false}
                          />
                          <Tooltip 
                            formatter={(value) => [`$${value}`, 'Portfolio Value']}
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                          />
                          <Area 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#D4A017" 
                            fillOpacity={1}
                            fill="url(#colorValue)" 
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-navy-dark mb-4">Portfolio Breakdown</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={portfolioData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {portfolioData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Legend 
                            layout="vertical" 
                            verticalAlign="middle" 
                            align="right"
                            formatter={(value, entry, index) => {
                              return <span className="text-xs font-medium">{value}</span>;
                            }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="investments">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-navy-dark">My Investment Portfolio</h3>
                
                {investedProjects.map(project => {
                  const investment = userInvestments.find(inv => inv.projectId === project.id);
                  const percentRaised = Math.round((project.raisedAmount / project.targetAmount) * 100);
                  
                  return (
                    <Card key={project.id} className="overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-1/4 h-48 md:h-auto">
                          <img 
                            src={project.imageUrl} 
                            alt={project.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <CardContent className="flex-1 p-6">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <Badge className="bg-navy-dark text-white">{project.country}</Badge>
                                {project.verificationStatus === 'verified' && (
                                  <Badge className="bg-green-600 text-white">Verified</Badge>
                                )}
                              </div>
                              <h3 className="text-xl font-bold text-navy-dark">{project.name}</h3>
                              <p className="text-gray-500">{project.location}</p>
                            </div>
                            
                            <div className="text-right">
                              <div className="text-lg font-bold text-navy-dark">
                                ${investment?.amount.toLocaleString()}
                              </div>
                              <div className="text-sm text-green-600 font-medium">
                                +${investment?.returns.toLocaleString()} return
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Project funding</span>
                              <span className="font-medium text-navy-dark">{percentRaised}%</span>
                            </div>
                            <Progress value={percentRaised} className="h-2 bg-gray-200" indicatorClassName="bg-gold" />
                            
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">
                                Invested on {investment?.date}
                              </span>
                              <Button variant="link" className="p-0 h-auto text-gold-dark">
                                View Details
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  );
                })}
                
                {investedProjects.length === 0 && (
                  <div className="text-center py-12 bg-white rounded-lg">
                    <p className="text-gray-500 mb-4">You haven't invested in any projects yet.</p>
                    <Button asChild className="bg-gold-dark text-navy-dark hover:bg-gold">
                      <a href="/projects">Browse Projects</a>
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="analytics">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-navy-dark mb-6">Advanced Analytics</h3>
                
                <p className="text-center text-gray-500 py-12">
                  Advanced analytics features will be available in the next update.
                  <br />
                  Stay tuned for detailed investment metrics, tax reports, and comparative analysis.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  );
};

const StatCard = ({ title, value, icon, change, trend }: { 
  title: string; 
  value: string; 
  icon: React.ReactNode; 
  change: string;
  trend: 'up' | 'down' | 'neutral';
}) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-gray-100 rounded-lg">
            {icon}
          </div>
          
          {trend !== 'neutral' && (
            <Badge className={`
              ${trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}
            `}>
              {change}
            </Badge>
          )}
        </div>
        
        <h3 className="text-gray-500 text-sm mb-1">{title}</h3>
        <div className="text-2xl font-bold text-navy-dark">{value}</div>
      </CardContent>
    </Card>
  );
};

export default Dashboard;
