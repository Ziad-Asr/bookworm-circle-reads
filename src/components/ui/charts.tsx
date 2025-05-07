
import React from "react";
import * as RechartsPrimitive from "recharts";
import { ChartContainer } from "./chart";

interface AreaChartProps {
  data: any[];
  categories: string[];
  index: string;
  colors?: string[];
  yAxisWidth?: number;
  className?: string;
}

export function AreaChart({
  data,
  categories,
  index,
  colors = ["#0ea5e9"],
  yAxisWidth = 30,
  className,
}: AreaChartProps) {
  return (
    <ChartContainer
      config={{
        ...Object.fromEntries(
          categories.map((category, i) => [
            category,
            {
              color: colors[i % colors.length],
            },
          ])
        ),
      }}
      className={className}
    >
      <RechartsPrimitive.ComposedChart data={data}>
        <RechartsPrimitive.XAxis
          dataKey={index}
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12 }}
        />
        <RechartsPrimitive.YAxis
          width={yAxisWidth}
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12 }}
        />
        <RechartsPrimitive.CartesianGrid vertical={false} strokeDasharray="3 3" />
        <RechartsPrimitive.Tooltip />
        {categories.map((category, i) => (
          <RechartsPrimitive.Area
            key={category}
            type="monotone"
            dataKey={category}
            fill={`url(#color-${category})`}
            stroke={colors[i % colors.length]}
            strokeWidth={2}
            activeDot={{ r: 6, strokeWidth: 0 }}
          >
            <RechartsPrimitive.Customized
              component={() => (
                <defs>
                  <linearGradient id={`color-${category}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={colors[i % colors.length]} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={colors[i % colors.length]} stopOpacity={0} />
                  </linearGradient>
                </defs>
              )}
            />
          </RechartsPrimitive.Area>
        ))}
      </RechartsPrimitive.ComposedChart>
    </ChartContainer>
  );
}

interface BarChartProps {
  data: any[];
  categories: string[];
  index: string;
  colors?: string[];
  yAxisWidth?: number;
  className?: string;
}

export function BarChart({
  data,
  categories,
  index,
  colors = ["#0ea5e9"],
  yAxisWidth = 30,
  className,
}: BarChartProps) {
  return (
    <ChartContainer
      config={{
        ...Object.fromEntries(
          categories.map((category, i) => [
            category,
            {
              color: colors[i % colors.length],
            },
          ])
        ),
      }}
      className={className}
    >
      <RechartsPrimitive.BarChart data={data}>
        <RechartsPrimitive.XAxis
          dataKey={index}
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12 }}
        />
        <RechartsPrimitive.YAxis
          width={yAxisWidth}
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12 }}
        />
        <RechartsPrimitive.CartesianGrid vertical={false} strokeDasharray="3 3" />
        <RechartsPrimitive.Tooltip />
        {categories.map((category, i) => (
          <RechartsPrimitive.Bar
            key={category}
            dataKey={category}
            fill={colors[i % colors.length]}
            radius={[4, 4, 0, 0]}
          />
        ))}
      </RechartsPrimitive.BarChart>
    </ChartContainer>
  );
}
