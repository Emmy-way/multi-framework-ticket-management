import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* Hero Section with Wavy Background */}
      <section className="hero">
        <div className="wave-background">
          <img src="/shared-assets/wave.svg" alt="" className="wave" />
        </div>
        <div className="decorative-circle circle-1"></div>
        <div className="decorative-circle circle-2"></div>
        
        <div className="container hero-content">
          <h1>Welcome to Ticket Management System</h1>
          <p className="hero-subtitle">
            Manage your tickets efficiently across multiple frameworks - React, Vue.js, and Twig
          </p>
          <div className="cta-buttons">
            <button 
              className="button button-primary" 
              onClick={() => navigate('/auth/login')}
            >
              Get Started
            </button>
            <button 
              className="button button-secondary" 
              onClick={() => navigate('/auth/signup')}
            >
              Sign Up
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features container">
        <h2>Key Features</h2>
        <div className="feature-grid">
          <div className="card feature-card">
            <div className="feature-icon">📊</div>
            <h3>Dashboard Analytics</h3>
            <p>Track your tickets with comprehensive statistics and insights</p>
          </div>
          <div className="card feature-card">
            <div className="feature-icon">✏️</div>
            <h3>CRUD Operations</h3>
            <p>Create, read, update, and delete tickets seamlessly</p>
          </div>
          <div className="card feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Secure Authentication</h3>
            <p>Protect your data with robust login and signup systems</p>
          </div>
          <div className="card feature-card">
            <div className="feature-icon">📱</div>
            <h3>Responsive Design</h3>
            <p>Access from any device with our mobile-friendly interface</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Multi-Framework Ticket Management. All rights reserved.</p>
          <p>Built with React, Vue.js, and Twig</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;