// src/components/Login.jsx

import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import bg from '../../assets/2000courierHero.png'; // Ensure this path is correct

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    captcha: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(true); // Initialize disable state

  const { login, user, token } = useContext(AuthContext); // Access the login function from context
  const navigate = useNavigate();

  // Initialize captcha on component mount
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle captcha validation
  const handleValidatedCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
    console.log(user_captcha_value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    try {
      setLoading(true);
      // Replace with your backend login endpoint
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email: formData.email,
        password: formData.password,
      });
  
      // Assuming the backend returns a token and user data
      const { token, user } = response.data;
  
      // Update the AuthContext with the token and user data
      login(token, user);
      console.log('user.....role:', user.role);
      // Redirect based on the user role
      if (user.role === 'Admin') { // 'Admin' should be a string
        navigate('/adminboard/adminpage');
      } else {
        navigate('/userboard/userpage');
      }
  
    } catch (err) {
      console.error(err);
      // Handle errors returned from the backend
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div
      className="min-h-screen bg-cover bg-green-400 bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }} // Use the background image
    >
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-8 md:p-12 max-w-md w-full">
        <h2 className="text-2xl font-bold text-black text-center mb-6">Courier Login</h2>
        
        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-black mb-2">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white bg-opacity-30 text-black placeholder-black-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-black mb-2">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white bg-opacity-30 text-black placeholder-black-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-control">
            <label className="block text-black mb-2">
              <span className="label-text">Captcha</span>
            </label>
            <LoadCanvasTemplate />
            <input
              type="text"
              onBlur={handleValidatedCaptcha}
              name="captcha"
              placeholder="Type the above"
              className="w-full p-3 rounded bg-white bg-opacity-30 text-black placeholder-black-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading || disable} // Corrected disabled prop
            className={`w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded transition duration-300 ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Logging In...' : 'Login'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-black">
            Don't have an account?{' '}
            <Link
              to="/signup"
              className="w-full py-3 px-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded transition duration-300"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
