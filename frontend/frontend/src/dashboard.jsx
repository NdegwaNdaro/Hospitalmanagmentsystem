import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = ({ patients, doctors, appointments, bills }) => {
  // Mock data for charts
  const monthlyData = [
    { month: 'Jan', patients: 65, revenue: 4000 },
    { month: 'Feb', patients: 59, revenue: 3000 },
    { month: 'Mar', patients: 80, revenue: 5000 },
    { month: 'Apr', patients: 81, revenue: 4500 },
    { month: 'May', patients: 56, revenue: 3500 },
  ];

  const specialtyData = [
    { name: 'Cardiology', value: 400 },
    { name: 'Neurology', value: 300 },
    { name: 'Pediatrics', value: 300 },
    { name: 'Orthopedics', value: 200 },
  ];
  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

  return (
    <div>
      {/*... existing stat cards */}

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <h3 className="font-semibold text-lg mb-4">Patient Admissions</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="patients" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl border-slate-200">
          <h3 className="font-semibold text-lg mb-4">Revenue by Month</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200">
        <h3 className="font-semibold text-lg mb-4">Doctor Specialties</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={specialtyData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value" label>
              {specialtyData.map((entry, index) => (
                <Cell key={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};