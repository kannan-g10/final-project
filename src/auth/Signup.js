import React from 'react';

import { IoEye } from 'react-icons/io5';
import { IoEyeOff } from 'react-icons/io5';

const Signup = () => {
  return (
    <div className="w-full h-screen bg-indigo-500 flex justify-center items-center">
      <div className="w-full md:w-1/2 lg:w-1/4 mx-auto p-10 flex flex-col items-center bg-rose-500">
        <h1>SignUp</h1>
        <div>
          <div>
            <input
              type="email"
              required
              placeholder="Email.."
              className="border outline-none p-2 m-2"
            />
          </div>
          <div className="flex relative">
            <input
              type="password"
              required
              placeholder="Password.."
              className="border outline-none p-2 m-2"
            />
            <span className="absolute right-3 top-5">
              <IoEye size={25} />
            </span>
          </div>
          <div className="flex relative">
            <input
              type="password"
              required
              placeholder="Confirm Password.."
              className="border outline-none p-2 m-2"
            />
            <span className="absolute right-3 top-5">
              <IoEyeOff size={25} />
            </span>
          </div>
          <button className="bg-green-500 text-white font-semibold px-4 py-2 rounded m-2 mx-auto">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
