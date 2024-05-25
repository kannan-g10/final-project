import React, { useState } from 'react';

import { IoEye, IoEyeOff } from 'react-icons/io5';

const Login = () => {
  const [showEyeIcon, setShowEyeIcon] = useState(false);

  return (
    <div className="w-full h-screen bg-gradient-to-tr from-indigo-500 to-fuchsia-500 flex items-center justify-center">
      <div className="w-[90%] md:w-2/3 lg:w-1/4 bg-indigo-400 flex flex-col justify-center items-center rounded-lg p-5">
        <h1 className="text-white font-bold text-5xl mb-10">Login</h1>
        <div className="w-1/2 lg:w-3/4">
          <input
            type="email"
            placeholder="Email.."
            className="p-2 m-2 w-full bg-slate-300 outline-none"
          />
        </div>
        <div className="w-1/2 lg:w-3/4 relative">
          <input
            type={showEyeIcon ? 'text' : 'password'}
            placeholder="Password.."
            className="p-2 m-2 w-full bg-slate-300 outline-none"
          />
          <span
            className="absolute top-3 right-0 cursor-pointer"
            onMouseDown={() => setShowEyeIcon(prev => !prev)}
            onMouseUp={() => setShowEyeIcon(prev => !prev)}
            onMouseLeave={() => setShowEyeIcon(false)}
          >
            {showEyeIcon ? <IoEyeOff size={30} /> : <IoEye size={30} />}
          </span>
        </div>
        <button className="m-4 px-8 py-2 text-xl rounded text-white font-semibold bg-indigo-600 hover:bg-indigo-700 transition-all duration-150">
          Login
        </button>
        <p className="font-semibold">
          Don't have an Account?
          <span className="text-violet-700 text-lg underline cursor-pointer mx-2">
            Signup
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
