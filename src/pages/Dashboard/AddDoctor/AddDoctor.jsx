import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaImage } from 'react-icons/fa';

const AddDoctor = () => {
  const [image, setImage] = useState('');
  const handleImageChange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const link = reader.result;
      setImage(link);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const category = form.specialty.value;
    const doctorInfo = { name, email, category, image };
    console.log('Form Data:', doctorInfo);

    fetch('http://localhost:5000/add-doctors', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(doctorInfo),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          toast.success('Doctor added success');
          form.reset();
        }
      });
  };
  return (
    <div className="w-full h-full bg-slate-100 p-5">
      <h3 className="text-3xl font-semibold ">Add New Doctor</h3>
      <div className="w-10/12  mx-auto mt-8 p-4 bg-white rounded-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-600 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="name"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="specialty"
              className="block text-gray-600 font-bold mb-2"
            >
              Specialty
            </label>
            <select
              id="specialty"
              name="specialty"
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="" disabled>
                Select Specialty
              </option>
              <option value="teeth orthodontics">Teeth Orthodontics</option>
              <option value="Cosmetic Dentisty">Cosmetic Dentisty</option>
              <option value="Teeth Cleaning">Teeth Cleaning</option>
              <option value="Cavity Protection">Cavity Protection</option>
              <option value="Pediatric Dental">Pediatric Dental</option>
              <option value="Oral Surgery">Oral Surgery</option>
            </select>
          </div>

          <div className="mb-4 flex justify-center border-gray-300 items-center w-full h-52 border border-dashed rounded-md">
            {image ? (
              <img className="w-full h-full" src={image} alt="" />
            ) : (
              <label
                htmlFor="image"
                className="block  text-gray-600 font-bold mb-2"
              >
                Upload Image
                <FaImage className="w-fit mx-auto text-5xl cursor-pointer" />
              </label>
            )}
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              className="w-full hidden p-2 border rounded-md"
              accept="image/*"
            />
          </div>

          <button
            type="submit"
            className="bg-green-950 w-full text-white p-2 rounded-md "
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
