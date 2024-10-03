import React from 'react'

interface EmotionChartProps {
  topEmotion: {
    name: string;
    value: number;
  };
  bottomEmotion: {
    name: string;
    value: number;
  };
  width?: number;
  height?: number;
  colors?: [string, string];
}

export default function EmotionChartRight({
  topEmotion,
  bottomEmotion,
  width = 300,
  height = 400,
  colors = ['#8A2BE2', '#FF69B4'],
}: EmotionChartProps) {
  const margin = { top: 40, right: 100, bottom: 40, left: 20 }
  const chartWidth = width - margin.left - margin.right
  const chartHeight = height - margin.top - margin.bottom
  const barWidth = 40
  const axisOffset = 5

  const yScale = (value: number) => (chartHeight / 2) * (value / 100)

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        {/* Y-axis */}
        <line
          x1={chartWidth - axisOffset}
          y1={0}
          x2={chartWidth - axisOffset}
          y2={chartHeight}
          stroke="#666"
          strokeWidth={1}
        />
        {/* X-axis */}
        <line
          x1={chartWidth - axisOffset - barWidth - 10}
          y1={chartHeight / 2}
          x2={chartWidth}
          y2={chartHeight / 2}
          stroke="#666"
          strokeWidth={1}
        />

        {/* Top emotion bar */}
        <rect
          x={chartWidth - axisOffset - barWidth - 5}
          y={chartHeight / 2 - yScale(topEmotion.value)}
          width={barWidth}
          height={yScale(topEmotion.value)}
          fill={colors[0]}
        />

        {/* Bottom emotion bar */}
        <rect
          x={chartWidth - axisOffset - barWidth - 5}
          y={chartHeight / 2}
          width={barWidth}
          height={yScale(bottomEmotion.value)}
          fill={colors[1]}
        />

        {/* Labels */}
        <text
          x={chartWidth - axisOffset - barWidth / 2 - 5}
          y={chartHeight / 2 - yScale(topEmotion.value) - 5}
          textAnchor="middle"
          fontSize="12"
          fill="#666"
        >
          {topEmotion.value}%
        </text>
        <text
          x={chartWidth - axisOffset - barWidth / 2 - 5}
          y={chartHeight / 2 + yScale(bottomEmotion.value) + 15}
          textAnchor="middle"
          fontSize="12"
          fill="#666"
        >
          {bottomEmotion.value}%
        </text>
        <text
          x={chartWidth + 10}
          y={0}
          textAnchor="start"
          fontSize="14"
          fill={colors[0]}
          dominantBaseline="hanging"
        >
          {topEmotion.name.toUpperCase()}
        </text>
        <text
          x={chartWidth + 10}
          y={chartHeight}
          textAnchor="start"
          fontSize="14"
          fill={colors[1]}
          dominantBaseline="baseline"
        >
          {bottomEmotion.name.toUpperCase()}
        </text>
      </g>
    </svg>
  )
}