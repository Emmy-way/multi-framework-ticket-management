import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    // Check credentials (demo credentials)
    if (formData.email === 'demo@ticketapp.com' && formData.password === 'Demo123!') {
      // Create session
      const session = {
        email: formData.email,
        loginTime: new Date().toISOString()
      };
      localStorage.setItem('ticketapp_session', JSON.stringify(session));
      
      // Navigate to dashboard
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="card auth-card">
          <h1>Login</h1>
          <p className="auth-subtitle">Welcome back! Please login to your account.</p>
          
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                aria-label="Email Address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                aria-label="Password"
              />
            </div>

            <button type="submit" className="button button-primary auth-button">
              Login
            </button>
          </form>

          <div className="auth-footer">
            <p>Don't have an account? <Link to="/auth/signup">Sign Up</Link></p>
            <p className="demo-credentials">
              Demo: demo@ticketapp.com / Demo123!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;