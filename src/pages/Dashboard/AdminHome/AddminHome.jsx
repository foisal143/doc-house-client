import useAppointment from '../../../hooks/useAppointment';
import useDoctors from '../../../hooks/useDoctors';
import useUsers from '../../../hooks/useUsers';

const AddminHome = () => {
  const [doctors] = useDoctors();
  const [users] = useUsers();
  const [appointments] = useAppointment();
  return (
    <div className="p-5 w-full">
      <div className="stats w-full pt-5 stats-vertical lg:stats-horizontal shadow">
        <div className="stat text-center">
          <p className="stat-title">Doctors</p>
          <p className="stat-value">{doctors.length}</p>
          <p className="stat-desc">
            <progress
              className="progress w-56"
              value={doctors.length}
              max="100"
            ></progress>
          </p>
        </div>

        <div className="stat text-center">
          <p className="stat-title">Pateints</p>
          <p className="stat-value">{users.length}</p>
          <p className="stat-desc">
            <progress
              className="progress w-56"
              value={users.length}
              max="100"
            ></progress>
          </p>
        </div>

        <div className="stat text-center">
          <p className="stat-title">Appointments</p>
          <p className="stat-value">{appointments.length}</p>
          <p className="stat-desc">
            <progress
              className="progress w-56"
              value={appointments.length}
              max="100"
            ></progress>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddminHome;
