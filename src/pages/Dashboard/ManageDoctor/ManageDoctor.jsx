import Swal from 'sweetalert2';
import useDoctors from '../../../hooks/useDoctors';
import useAxiosSceure from '../../../hooks/useAxiosSceure';

const ManageDoctor = () => {
  const [doctors, refetch] = useDoctors();
  const axiosSciure = useAxiosSceure();
  const handlerDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        axiosSciure
          .delete(`/delete-doctors/${id}`)

          .then(res => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
            }
          });
      }
    });
  };
  return (
    <div className="w-full h-full bg-slate-100 p-5">
      <h2 className="text-3xl font-semibold ">
        Manage Doctors: {doctors.length}
      </h2>

      <div className="overflow-x-auto my-12 ">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-slate-200">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={doctor.image} alt={doctor.name} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.category}</td>
                <th>
                  <button
                    onClick={() => handlerDelete(doctor._id)}
                    className="btn btn-error "
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctor;
