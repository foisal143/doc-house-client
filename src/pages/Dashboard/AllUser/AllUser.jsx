import useUsers from '../../../hooks/useUsers';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
const AllUser = () => {
  const [users, refetch] = useUsers();

  const handlerMakeAdmin = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to promot this user as a admin!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Promot it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${id}`, {
          method: 'PATCH',
        })
          .then(res => res.json())
          .then(data => {
            if (data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                title: 'Promoted!',
                text: 'Your User has been Pormoted.',
                icon: 'success',
              });
            }
          });
      }
    });
  };

  const handlerDeleteUser = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to delete this user !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: 'Deleted!',
                text: 'Your User has been Deleted.',
                icon: 'success',
              });
            }
          });
      }
    });
  };
  return (
    <div className="bg-slate-100 w-full h-full p-5">
      <h3 className="text-3xl font-semibold">All Users: {users.length}</h3>

      <div className="overflow-x-auto bg-white  my-12">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.email}</td>
                <td>
                  {user.role === 'admin' ? (
                    'Admin'
                  ) : (
                    <>
                      <button
                        onClick={() => handlerMakeAdmin(user._id)}
                        className="btn text-white bg-green-950"
                      >
                        Make Admin
                      </button>
                    </>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handlerDeleteUser(user._id)}
                    className="btn bg-green-950 text-white "
                  >
                    Delete User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
