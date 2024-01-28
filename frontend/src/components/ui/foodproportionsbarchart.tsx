"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, ReferenceLine, Legend } from "recharts"

const foodData = [
  {
    name: '1/23',
    salad: 4000,
    grill: 6400,
    simplyMade: 2200,
    dessert: 2400,
  },
  {
    name: '1/24',
    salad: 3000,
    grill: 8300,
    simplyMade: 1700,
    dessert: 2200,
  },
  {
    name: '1/25',
    salad: 3000,
    grill: 9800,
    simplyMade: 2200,
    dessert: 2290,
  },
  {
    name: '1/26',
    salad: 4780,
    grill: 9908,
    simplyMade: 2400,
    dessert: 2000,
  },
  {
    name: '1/27',
    salad: 1890,
    grill: 4800,
    simplyMade: 1200,
    dessert: 2180,
  },
  {
    name: '1/28',
    salad: 1390,
    grill: 3800,
    simplyMade: 1400,
    dessert: 2500,
  },
  {
    name: '1/29',
    salad: 3490,
    grill: 9300,
    simplyMade: 2200,
    dessert: 2100,
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
          dataKey="simplyMade"
          fill="#bb0"
          stackId="stack"
          radius={[0, 0, 0, 0]}
          // className="fill-primary"
        />
        <Bar
          dataKey="dessert"
          fill="#964B00"
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
