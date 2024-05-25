import React, { useState } from 'react';

import { IoEye, IoEyeOff } from 'react-icons/io5';

const Signup = () => {
  const [showEyeBtn, setShowEyeBtn] = useState(false);
  const [confirmEyeBtn, setConfirmEyebtn] = useState(false);
  return (
    <div className="bg-gradient-to-tr from-violet-500 to-fuchsia-500 h-screen w-full flex justify-center items-center">
      <div className="rounded-lg p-10 w-full md:w-1/3 lg:w-1/4 flex flex-col items-center bg-indigo-400">
        <h1 className="text-5xl m-5 text-white font-bold font-mono">Sign Up</h1>
        <div className="w-full mt-5">
          <input
            type="text"
            placeholder="Username.."
            className="px-4 py-2 m-2 w-[96%] md:w-[90%] lg:w-72 bg-slate-300 placeholder:text-slate-600 outline-none"
          />
        </div>
        <div className="w-full">
          <input
            type="email"
            placeholder="Email.."
            className="px-4 py-2 m-2 w-[96%] md:w-[90%] lg:w-72 bg-slate-300 placeholder:text-slate-600 outline-none"
          />
        </div>
        <div className="w-full flex relative">
          <input
            type={showEyeBtn ? 'text' : 'password'}
            placeholder="Password.."
            className="px-4 py-2 m-2 w-full lg:w-72 bg-slate-300 placeholder:text-slate-600 outline-none"
          />
          <span
            className="cursor-pointer absolute top-3 right-8"
            onMouseDown={() => setShowEyeBtn(prev => !prev)}
            onMouseUp={() => setShowEyeBtn(prev => !prev)}
            onMouseLeave={() => setShowEyeBtn(false)}
          >
            {showEyeBtn ? <IoEyeOff size={30} /> : <IoEye size={30} />}
          </span>
        </div>
        <div className="w-full flex relative">
          <input
            type={confirmEyeBtn ? 'text' : 'password'}
            placeholder="Confirm Password.."
            className="px-4 py-2 m-2 w-full lg:w-72 bg-slate-300 placeholder:text-slate-700 outline-none"
          />
          <span
            className="cursor-pointer absolute top-3 right-8"
            onMouseDown={() => setConfirmEyebtn(prev => !prev)}
            onMouseUp={() => setConfirmEyebtn(prev => !prev)}
            onMouseLeave={() => setConfirmEyebtn(false)}
          >
            {confirmEyeBtn ? <IoEyeOff size={30} /> : <IoEye size={30} />}
          </span>
        </div>
        <button className="px-10 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg m-4 transition-all duration-150">
          Signup
        </button>
        <p className="font-semibold">
          Already have an Account?
          <span className="text-violet-700 text-lg underline cursor-pointer mx-2">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
