// Login.jsx
import React from 'react';
import bg from '../../assets/2000courierHero.png';

const Login = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-green-400 bg-center flex items-center justify-center"
      
    >
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-8 md:p-12 max-w-md w-full">
        <h2 className="text-2xl font-bold text-black text-center mb-6">Courier Login</h2>
        
        <form className="space-y-6">
          <div>
            <label className="block text-black mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded bg-white bg-opacity-30 text-black placeholder-black-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-black mb-2">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded bg-white bg-opacity-30 text-black placeholder-black-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-black">
            Don't have an account? <a href="/signup" className="w-full py-3 px-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded transition duration-300">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
