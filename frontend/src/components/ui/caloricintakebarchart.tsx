"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

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

export function CaloricIntakeBarChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
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
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
