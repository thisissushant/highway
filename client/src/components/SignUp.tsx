import React, { useState } from "react";
import { Link } from "react-router-dom";

interface FormData {
  firstName: string;
  lastName: string;
  password: string;
  contact: string;
}

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    password: "",
    contact: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here, you can send the form data to your backend or perform any other desired actions
    console.log(formData);
  };

  return (
    <div className="md:m-10 m-5">
      <div className="md:grid grid-cols-2 grid-rows-2">
        <div className="mt-16">
          <h1 className="md:text-3xl text-2xl font-extrabold text-purple md:text-end text-start mb-5">
            Sign<span className="text-red">Up</span>
          </h1>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-xl border border-gray"
          >
            <div className="grid grid-cols-2">
              <div>
                <h1 className="text-3xl font-extrabold text-purple text-start mb-5">
                  Let us know <span className="text-red">!</span>
                </h1>
              </div>
              <div>
                <Link
                  to={"/signin"}
                  type="submit"
                  className="w-full px-3 py-2 font-semibold underline "
                >
                  Sign <span className="text-red">In</span>
                </Link>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block font-medium text-gray-700 text-start"
              ></label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border-b-2 border-gray  focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block font-medium text-gray-700 text-start"
              ></label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border-b-2 border-gray  focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block font-medium text-gray-700 text-start"
              ></label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Set Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border-b-2 border-gray  focus:outline-none "
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="contact"
                className="block font-medium text-gray-700 text-start"
              ></label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="E-mail"
                value={formData.contact}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border-b-2 border-gray  focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-3 py-2 bg-purple text-white rounded-xl "
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
