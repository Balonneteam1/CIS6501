import React, { useState } from 'react';
import { loginUser } from '../service'; // Ensure the service is imported from the correct path
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { useLogin } from '../context/logincontext'; // Import the custom login context

const LoginComponent = () => {
  // State variables for form inputs, error messages, and loading state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Hooks for navigation and login context
  const navigate = useNavigate();
  const { login } = useLogin();

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true); // Set loading state to true
    setError(''); // Reset error message

    try {
      const data = { email, password }; // Create payload
      const response = await loginUser(data); // Call login service
      console.log('Login successful:', response);

      // Set login status in the context
      login();

      // Redirect to admin dashboard (update the path as needed)
      navigate('/admin');
    } catch (err) {
      // Set an error message if login fails
      setError('Failed to log in. Please check your credentials.');
    } finally {
      // Reset loading state
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center text-primary">Login</h2>

        {/* Display error message if exists */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-secondary">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 mt-1 border rounded-md outline-none focus:ring-2 focus:ring-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-secondary">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 mt-1 border rounded-md outline-none focus:ring-2 focus:ring-primary"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full px-4 py-2 font-medium text-white rounded bg-primary hover:bg-accent transition ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
