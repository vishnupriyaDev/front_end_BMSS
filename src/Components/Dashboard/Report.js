// src/components/Reports.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Bus 1', trips: 12, fuel: 300 },
  { name: 'Bus 2', trips: 8, fuel: 250 },
  { name: 'Bus 3', trips: 15, fuel: 400 },
];

const Reports = () => {
  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="trips" fill="#8884d8" />
      <Bar dataKey="fuel" fill="#82ca9d" />
    </BarChart>
  );
};

export default Reports;