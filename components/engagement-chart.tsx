"use client"

import React, { useEffect, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';
import html2canvas from 'html2canvas';
import { chartColors, lineStyles } from '../utils/chartConfig';

interface DataPoint {
  date: string;
  serenity: number;
  anxiety: number;
}

interface EngagementChartComponentProps {
  data: DataPoint[];
}

interface CustomizedLabelProps {
  x: number;
  y: number;
  stroke: string;
  value: number;
}

const CustomizedLabel: React.FC<CustomizedLabelProps> = ({ x, y, stroke, value }) => {
  return (
    <text x={x} y={y} dy={value >= 0 ? -10 : 15} fill={stroke} fontSize={10} textAnchor="middle">
      {`${Math.abs(value)}%`}
    </text>
  );
};

type TooltipPayload = {
  color: string;
  name: string;
  value: number;
};

const CustomTooltip = ({ active, payload, label }: { active?: boolean, payload?: TooltipPayload[], label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white p-2 border border-gray-300 rounded shadow">
        <p className="label font-bold">{`Date: ${label}`}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }}>
            {`${entry.name}: ${Math.abs(entry.value)}%`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const EngagementChartComponent: React.FC<EngagementChartComponentProps> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generateChartImage = async () => {
      if (chartRef.current) {
        await html2canvas(chartRef.current);
        // Puedes hacer algo con la imagen generada si lo necesitas
      }
    };

    setTimeout(generateChartImage, 1000);
  }, []);

  return (
    <div className="h-full flex flex-col">
      <div className="flex-grow" ref={chartRef}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 60, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
            <XAxis 
              dataKey="date" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: '#666' }}
              dy={-10}
              orientation="top"
            />
            <YAxis 
              tick={{ fontSize: 10, fill: '#666' }} 
              domain={[-100, 100]}
              tickFormatter={(value) => `${Math.abs(value)}`}
              axisLine={false}
              tickLine={false}
              ticks={[-100, -50, 0, 50, 100]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="serenity"
              stroke={chartColors.pleasant}
              strokeWidth={2}
              strokeDasharray={lineStyles.pleasant}
              name="PLEASANT"
              label={(props) => <CustomizedLabel {...props} />}
              dot={{ stroke: chartColors.pleasant, strokeWidth: 2, r: 4, fill: 'white' }}
            />
            <Line
              type="monotone"
              dataKey="anxiety"
              stroke={chartColors.unpleasant}
              strokeWidth={2}
              strokeDasharray={lineStyles.unpleasant}
              name="UNPLEASANT"
              label={(props) => <CustomizedLabel {...props} />}
              dot={{ stroke: chartColors.unpleasant, strokeWidth: 2, r: 4, fill: 'white' }}
            />
            <text x={10} y={150} fill={chartColors.pleasant} fontSize={12} fontWeight="bold">
              PLEASANT
            </text>
            <text x={10} y={300} fill={chartColors.unpleasant} fontSize={12}>
              UNPLEASANT
            </text>
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-sm">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Recurrence</th>
              {data.map((item, index) => (
                <th key={index} className="text-center">{item.date}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-bold">Différentiel</td>
              {data.map((item, index) => (
                <td key={index} className="text-center">{Math.abs(item.serenity + item.anxiety)}%</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};