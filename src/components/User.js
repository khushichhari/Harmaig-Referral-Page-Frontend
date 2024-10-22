import React, { useState } from 'react';
import './User.css';

function User() {
  const [userCode, setUserCode] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [isValid, setIsValid] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  // Sample promo code for validation (could be fetched from backend)
  const generatedCode = 'HARMAIG-123456';

  // Function to validate user's promo code input and redirect to main page
  const validatePromoCode = () => {
    if (userCode === generatedCode) {
      setIsValid(true);
      alert('Promo Code is valid! Redirecting to the main page...');
      // Redirect to the main website
      window.location.href = 'https://harmaigjewellers.vercel.app/';
    } else {
      setIsValid(false);
      alert('Invalid promo code. Please check with the influencer.');
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Harmaig</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">Settings</a></li>
                  <li><a className="dropdown-item" href="/">Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="head">
        <h1>Just one step to go...Harmaig</h1>
      </div>

      <div className="User">
        <h2>Enter Your Details</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Enter Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Promo Code"
          value={userCode}
          onChange={(e) => setUserCode(e.target.value)}
        />
        <br/>
        <button onClick={validatePromoCode}>Submit</button>
      </div>

      {/* Card Container */}
      <div className="card-container">
        <div className="card">
          <img src="https://harmaigjewellers.vercel.app/images/3.png?height=208&width=240" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Necklace</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

        <div className="card">
          <img src="https://harmaigjewellers.vercel.app/images/6.png?height=208&width=240" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Bangles</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

        <div className="card">
          <img src="https://harmaigjewellers.vercel.app/images/4.png?height=208&width=240" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Bracelets</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
