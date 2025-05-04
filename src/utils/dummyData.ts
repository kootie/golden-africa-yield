
export interface MineProject {
  id: string;
  name: string;
  location: string;
  country: string;
  coordinates: [number, number];
  description: string;
  raisedAmount: number;
  targetAmount: number;
  investors: number;
  returnRate: number;
  timeLeft: number;
  imageUrl: string;
  verificationStatus: 'verified' | 'pending' | 'unverified';
  mineData: {
    timestamps: string[];
    goldYield: number[];
    efficiency: number[];
    laborHours: number[];
  };
}

export const featuredProjects: MineProject[] = [
  {
    id: "1",
    name: "Sunrise Gold Basin",
    location: "Western Region",
    country: "Ghana",
    coordinates: [5.6037, -0.1870],
    description: "An established gold mine with proven reserves, utilizing eco-friendly extraction methods. The investment will fund expansion into a newly discovered section with high yield potential.",
    raisedAmount: 1250000,
    targetAmount: 2000000,
    investors: 89,
    returnRate: 12.5,
    timeLeft: 21,
    imageUrl: "https://images.unsplash.com/photo-1605801958746-8957af1a8cbf?q=80&w=1000&auto=format&fit=crop",
    verificationStatus: 'verified',
    mineData: {
      timestamps: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      goldYield: [12.3, 13.1, 14.2, 13.8, 15.1, 16.0],
      efficiency: [82, 83, 85, 84, 88, 89],
      laborHours: [2450, 2400, 2500, 2550, 2600, 2550]
    }
  },
  {
    id: "2",
    name: "Azure Diamond Mining",
    location: "Central Province",
    country: "Zimbabwe",
    coordinates: [-17.8292, 31.0522],
    description: "A promising gold and diamond mining operation seeking capital to upgrade equipment and increase production capacity by 40% within the first year.",
    raisedAmount: 780000,
    targetAmount: 1500000,
    investors: 54,
    returnRate: 14.2,
    timeLeft: 15,
    imageUrl: "https://images.unsplash.com/photo-1618767628693-ed3865cf346f?q=80&w=1000&auto=format&fit=crop",
    verificationStatus: 'verified',
    mineData: {
      timestamps: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      goldYield: [8.1, 8.5, 9.2, 9.7, 10.1, 10.5],
      efficiency: [76, 78, 80, 82, 83, 84],
      laborHours: [1950, 2000, 2100, 2150, 2200, 2250]
    }
  },
  {
    id: "3",
    name: "Savanna Gold Cooperative",
    location: "North West",
    country: "Tanzania",
    coordinates: [-6.3690, 34.8888],
    description: "Community-owned mining operation with strong local ties. Funding will improve infrastructure and implement IoT-based monitoring systems.",
    raisedAmount: 450000,
    targetAmount: 1200000,
    investors: 103,
    returnRate: 11.8,
    timeLeft: 33,
    imageUrl: "https://images.unsplash.com/photo-1569435601872-770d50a8c21d?q=80&w=1000&auto=format&fit=crop",
    verificationStatus: 'pending',
    mineData: {
      timestamps: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      goldYield: [6.8, 7.2, 7.5, 8.0, 8.3, 8.5],
      efficiency: [72, 74, 75, 78, 80, 81],
      laborHours: [1800, 1850, 1900, 2000, 2050, 2100]
    }
  },
  {
    id: "4",
    name: "Red Earth Extractors",
    location: "Northern Cape",
    country: "South Africa",
    coordinates: [-29.0852, 26.1596],
    description: "Well-established operation with 15+ years of successful mining. Seeking funding for new deep extraction technology to access previously unreachable gold deposits.",
    raisedAmount: 1750000,
    targetAmount: 2500000,
    investors: 72,
    returnRate: 10.5,
    timeLeft: 9,
    imageUrl: "https://images.unsplash.com/photo-1560505788-edf6807d9e3f?q=80&w=1000&auto=format&fit=crop",
    verificationStatus: 'verified',
    mineData: {
      timestamps: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      goldYield: [15.2, 15.5, 15.8, 16.0, 16.2, 16.5],
      efficiency: [88, 89, 89, 90, 90, 91],
      laborHours: [3100, 3150, 3200, 3200, 3250, 3300]
    }
  }
];

export const userInvestments = [
  {
    projectId: "1",
    amount: 25000,
    date: "2023-08-15",
    returns: 2187.5
  },
  {
    projectId: "3",
    amount: 15000,
    date: "2023-09-23",
    returns: 885.0
  }
];

export const platformStats = {
  totalRaised: 12450000,
  totalInvestors: 876,
  completedProjects: 14,
  averageReturn: 11.7
};
