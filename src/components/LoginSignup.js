import React, { useState } from 'react';
import './LoginSignup.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginSignup = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false); // State to toggle between Admin and User

  const handleLogin = (e) => {
    e.preventDefault();
    if (isAdmin) {
      console.log('Admin Login');
      navigate('/main');
    } else {
      console.log('User Login');
      navigate('/user');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (isAdmin) {
      console.log('Admin Signup');
      navigate('/Main');
    } else {
      console.log('User Signup');
      navigate('/user');
    }
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleAdminToggle = (isAdminSelected) => {
    setIsAdmin(isAdminSelected); // Set admin or user based on button clicked
  };

  return (
    <div className="login-signup-container">
      <div className="login-signup-form">
        <div className="toggle-buttons">
          <button
            id="one"
            className={isAdmin ? 'active' : ''}
            onClick={() => handleAdminToggle(true)}
          >
            Admin
          </button>
          <button
            id="two"
            className={!isAdmin ? 'active' : ''}
            onClick={() => handleAdminToggle(false)}
          >
            User
          </button>
        </div>
        <br />
        {isLogin ? (
          <form onSubmit={handleLogin}>
            <h2>{isAdmin ? 'Admin Login' : 'User Login'}</h2>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button type="submit">Login</button>
            <p>
              Don't have an account? <span onClick={handleToggle}>Sign up</span>
            </p>
          </form>
        ) : (
          <form onSubmit={handleSignup}>
            <h2>{isAdmin ? 'Admin Signup' : 'User Signup'}</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button type="submit">Sign up</button>
            <p>
              Already have an account? <span onClick={handleToggle}>Login</span>
            </p>
          </form>
        )}
        <button className="google-button">
          Continue with
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ZEbwjEeQHdYeC52v4m--wEMfynR0HeU8CQ&s"
            alt="Google Sign In"
          />
        </button>
      </div>
    </div>
  );
};

export default LoginSignup;


