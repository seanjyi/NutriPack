"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, ReferenceLine, Legend } from "recharts"

const foodData = [
  {
    name: '1/23',
    salad: 4000,
    grill: 2400,
    amt: 2400,
  },
  {
    name: '1/24',
    salad: 3000,
    grill: 1398,
    amt: 2210,
  },
  {
    name: '1/25',
    salad: 2000,
    grill: 9800,
    amt: 2290,
  },
  {
    name: '1/26',
    salad: 2780,
    grill: 3908,
    amt: 2000,
  },
  {
    name: '1/27',
    salad: 1890,
    grill: 4800,
    amt: 2181,
  },
  {
    name: '1/28',
    salad: 2390,
    grill: 3800,
    amt: 2500,
  },
  {
    name: '1/29',
    salad: 3490,
    grill: 4300,
    amt: 2100,
  },
];

const data = [
  {
    name: "1/18",
    total: Math.floor(Math.random() * 750) + 1950,
  },
  {
    name: "1/19",
    total: Math.floor(Math.random() * 750) + 1950,
  },
  {
    name: "1/20",
    total: Math.floor(Math.random() * 750) + 1950,
  },
  {
    name: "1/21",
    total: Math.floor(Math.random() * 750) + 1950,
  },
  {
    name: "1/22",
    total: Math.floor(Math.random() * 750) + 1950,
  },
  {
    name: "1/23",
    total: Math.floor(Math.random() * 750) + 1950,
  },
  {
    name: "1/24",
    total: Math.floor(Math.random() * 750) + 1950,
  },
  {
    name: "1/25",
    total: Math.floor(Math.random() * 750) + 1950,
  },
  {
    name: "1/26",
    total: Math.floor(Math.random() * 750) + 1950,
  },
  {
    name: "1/27",
    total: Math.floor(Math.random() * 750) + 1950,
  },
  {
    name: "1/28",
    total: Math.floor(Math.random() * 750) + 1950,
  },
  {
    name: "1/29",
    total: Math.floor(Math.random() * 750) + 1950,
  },
]

export function FoodProportionsBarChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={foodData}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Legend/>
        <ReferenceLine y={0} stroke="#888" />
        <Bar
          dataKey="salad"
          fill="#6F7D1C"
          stackId="stack"
          radius={[0, 0, 0, 0]}
          // className="fill-primary"
        />
        <Bar
          dataKey="grill"
          fill="#d00"
          stackId="stack"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
