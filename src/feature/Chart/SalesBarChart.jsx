import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

function SalesBarChart({ chartData }) {
  return (
    <div className="rounded-md bg-gray-50">
      <h1 className="mb-2 p-3 text-xl text-gray-800">Sales Report</h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={chartData}
          margin={{ top: 10, left: 20, right: 30, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sale" fill="#54A1E4" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesBarChart;
