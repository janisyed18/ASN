import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { subject: "Mathematics", avg: 85 },
  { subject: "Physics", avg: 78 },
  { subject: "Chemistry", avg: 82 },
  { subject: "English", avg: 88 },
];

export default function ViewPerformance() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Class Performance</h2>

      <div className="h-64 bg-white rounded-lg shadow p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 30, bottom: 5 }}>
            <XAxis dataKey="subject" />
            <YAxis tickFormatter={(v) => `${v}%`} />
            <Tooltip formatter={(v) => `${v}%`} />
            <Bar dataKey="avg" fill="#5b21b6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
