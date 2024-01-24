import { FaUsers } from 'react-icons/fa';
import useAppointment from '../../../hooks/useAppointment';
import useDoctors from '../../../hooks/useDoctors';
import useUsers from '../../../hooks/useUsers';
import { FaUserDoctor } from 'react-icons/fa6';
import { MdOutlineRequestPage } from 'react-icons/md';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
const AddminHome = () => {
  const [doctors] = useDoctors();
  const [users] = useUsers();
  const patients = users.filter(user => user.role !== 'admin');
  const [appointments] = useAppointment();

  // charts data
  const data = [
    { name: 'doctors', counts: doctors.length },
    { name: 'patients', counts: patients.length },
    { name: 'appointments', counts: appointments.length },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="p-5 w-full">
      <div className="stats w-full pt-5 stats-vertical lg:stats-horizontal shadow">
        <div className="stat text-center">
          <p className="stat-value justify-center flex gap-2 items-center">
            <FaUserDoctor className="text-red-500" />
            {doctors.length}
          </p>
          <p className="stat-title text-xl font-semibold">Doctors</p>
          <p className="stat-desc">
            <progress
              className="progress progress-error w-56"
              value={doctors.length}
              max="100"
            ></progress>
          </p>
        </div>

        <div className="stat text-center">
          <p className="stat-value justify-center flex gap-2 items-center">
            <FaUsers className="text-green-500" />
            {patients.length}
          </p>
          <p className="stat-title text-xl font-semibold">Patients</p>
          <p className="stat-desc">
            <progress
              className="progress progress-success w-56"
              value={patients.length}
              max="100"
            ></progress>
          </p>
        </div>

        <div className="stat text-center">
          <p className="stat-value justify-center flex gap-2 items-center">
            <MdOutlineRequestPage className="text-yellow-500" />
            {appointments.length}
          </p>
          <p className="stat-title text-xl font-semibold">Appointments</p>
          <p className="stat-desc">
            <progress
              className="progress progress-warning w-56"
              value={appointments.length}
              max="100"
            ></progress>
          </p>
        </div>
      </div>

      <div className="flex w-full h-[250px] justify-center items-center pt-12">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Legend></Legend>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="counts"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AddminHome;
