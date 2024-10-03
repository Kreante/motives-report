import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { chartColors, lineStyles } from '../utils/chartConfig';

interface DataPoint {
  date: string;
  serenity: number;
  anxiety: number;
}

interface LineChartComponentProps {
  title: string;
  data: DataPoint[];
}

export const LineChartComponent: React.FC<LineChartComponentProps> = ({ title, data }) => (
  <div className="flex flex-col h-full">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 60, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="serenity" stroke={chartColors.pleasant} strokeDasharray={lineStyles.pleasant} />
          <Line type="monotone" dataKey="anxiety" stroke={chartColors.unpleasant} strokeDasharray={lineStyles.unpleasant} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);