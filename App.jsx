import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    file: null,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const renderAgeOptions = () => {
    const options = [];
    for (let i = 1; i <= 100; i++) {
      options.push(<option key={i}>{i}</option>);
    }
    return options;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, file }));
  };
  console.log(formData);
  return (
    <div className="App">
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <nav className="w-full bg-blue-300 p-3 flex justify-between items-center font-sans">
          <div className="text-2xl font-bold">Health Care Dashboard</div>
          <ul className="flex gap-4 list-none">
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-2xl font-bold font-sans">Healthcare Dashboard</h1>
          <form
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                className="p-2 border-2 border-gray-300 rounded-lg bg-gray-100 text-lg outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Age</label>
              <select
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="p-2 border-2 border-gray-300 rounded-lg bg-gray-100 text-lg outline-none focus:border-blue-500"
                required
              >
                <option value="">Select Age</option>
                {renderAgeOptions()}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium">Gender</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input type="radio" id="male" name="gender" value="male" />
                  Male
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                  />
                  Female
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Upload File
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full border px-3 py-2 rounded"
                required
              />
            </div>
            {/* {preview && (
            <div className="mt-4">
              <img src={preview} alt="Preview" className="w-full h-48 object-cover rounded" />
            </div>
          )} */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
