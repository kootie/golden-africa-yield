
import { MineProject } from '@/utils/dummyData';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, TooltipProps } from 'recharts';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface MineDataChartProps {
  project: MineProject;
}

type DataKey = 'goldYield' | 'efficiency' | 'laborHours';

const MineDataChart = ({ project }: MineDataChartProps) => {
  const [activeMetric, setActiveMetric] = useState<DataKey>('goldYield');
  
  const metrics = [
    { key: 'goldYield' as const, label: 'Gold Yield (kg)', color: '#F5D14C' },
    { key: 'efficiency' as const, label: 'Efficiency (%)', color: '#3B82F6' },
    { key: 'laborHours' as const, label: 'Labor Hours', color: '#10B981' }
  ];
  
  const data = project.mineData.timestamps.map((timestamp, index) => ({
    name: timestamp,
    goldYield: project.mineData.goldYield[index],
    efficiency: project.mineData.efficiency[index],
    laborHours: project.mineData.laborHours[index],
  }));
  
  const currentMetric = metrics.find(m => m.key === activeMetric)!;
  
  const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-lg rounded-md">
          <p className="font-medium text-navy-dark">{label}</p>
          <p className="text-sm" style={{ color: currentMetric.color }}>
            {currentMetric.label}: {payload[0].value}
          </p>
        </div>
      );
    }
  
    return null;
  };
  
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h3 className="text-xl font-bold text-navy-dark mb-2 sm:mb-0">Mine Performance Data</h3>
        
        <div className="flex space-x-2">
          {metrics.map((metric) => (
            <Button
              key={metric.key}
              variant={activeMetric === metric.key ? "default" : "outline"}
              size="sm"
              className={`${activeMetric === metric.key ? 'bg-navy-dark text-white' : 'text-navy-dark'}`}
              onClick={() => setActiveMetric(metric.key)}
            >
              {metric.key === 'goldYield' ? 'Yield' : metric.key === 'efficiency' ? 'Efficiency' : 'Labor'}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id={`color-${activeMetric}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={currentMetric.color} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={currentMetric.color} stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              stroke="#9CA3AF"
              fontSize={12}
              tickLine={false}
            />
            <YAxis 
              stroke="#9CA3AF"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => {
                if (activeMetric === 'laborHours') {
                  return value >= 1000 ? `${value/1000}k` : value;
                }
                return value;
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey={activeMetric} 
              stroke={currentMetric.color} 
              fillOpacity={1}
              fill={`url(#color-${activeMetric})`} 
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 text-xs text-gray-500 text-center">
        Data collected via IoT sensors and verified on blockchain
      </div>
    </div>
  );
};

export default MineDataChart;
