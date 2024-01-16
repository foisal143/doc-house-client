import toast from 'react-hot-toast';

const postUserToDB = user => {
  fetch('http://localhost:5000/users', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(res => res.json())
    .then(data => {
      if (data.insertedId) {
        toast.success('user added successfull');
      }
    });
};

export default postUserToDB;
