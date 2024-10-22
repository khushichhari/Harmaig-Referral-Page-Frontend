import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import LoginSignup from './components/LoginSignup';
import Main from './components/Main';
import Admin from './components/Admin';  // Import Admin
import User from './components/User';    // Import User

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login-signup" element={<LoginSignup />} />
        <Route path="/main" element={<Main />} />
        <Route path="/admin" element={<Admin />} />  {/* Admin Route */}
        <Route path="/user" element={<User />} />    {/* User Route */}
      </Routes>
    </Router>
  );
};

export default App;





// // img copy
// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="header">
//         <span>Refer Anyone to Paytm</span>
//         <a href="/" className="tnc-link">T&Cs</a>
//       </header>

//       <section className="refer-section">
//         <h2>Invite friends to use Paytm Again</h2>
//         <p>Get up to ₹100 cashback</p>
//         <div className="reward-box">
//           <div className="reward">
//             <p>Get Assured</p>
//             <h3>₹100 Cashback</h3>
//           </div>
//           <div className="deal">
//             <p>Deal Worth</p>
//             <h3>₹1000</h3>
//             <p>Myntra | Boat</p>
//           </div>
//         </div>
//         <button className="refer-btn">Refer & Win</button>
//       </section>

//       <section className="invite-section">
//         <div className="invite-option">
//           <button>Invite via WhatsApp</button>
//         </div>
//         <div className="invite-option">
//           <button>Invite via Referral QR</button>
//         </div>
//       </section>

//       <section className="offers-section">
//         <p>Invite friends to make any of the payments below</p>
//         <p>Get up to ₹2000 Cashback</p>
//         <div className="offer-box">
//           <div className="offer">
//             <h4>₹125 Off</h4>
//             <p>on Amazon Prime</p>
//           </div>
//           <div className="offer">
//             <h4>₹1000 Off</h4>
//             <p>+₹100 Cashback</p>
//           </div>
//           <div className="offer">
//             <h4>1000 Cashback Points</h4>
//             <p>Google Play</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default App;


// chat search

// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [generatedCode, setGeneratedCode] = useState('');
//   const [userCode, setUserCode] = useState('');
//   const [isValid, setIsValid] = useState(false);

//   // Function to generate random promo code
//   const generatePromoCode = () => {
//     const code = 'HARMAIG-' + Math.random().toString(36).substring(2, 8).toUpperCase();
//     setGeneratedCode(code);
//   };

//   // Function to validate user's promo code input
//   const validatePromoCode = () => {
//     if (userCode === generatedCode) {
//       setIsValid(true);
//     } else {
//       setIsValid(false);
//       alert('Invalid promo code. Please check with the influencer.');
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Refer and Win with Harmaig Jewellers</h1>

//       {/* Admin Section */}
//       <div className="admin-section">
//         <h2>Admin Section: Generate Promo Code</h2>
//         <button onClick={generatePromoCode}>Generate Promo Code</button>
//         {generatedCode && (
//           <p>Your generated promo code is: <strong>{generatedCode}</strong></p>
//         )}
//       </div>

//       {/* User Section */}
//       <div className="user-section">
//         <h2>Enter Promo Code from Influencer</h2>
//         <input
//           type="text"
//           placeholder="Enter Promo Code"
//           value={userCode}
//           onChange={(e) => setUserCode(e.target.value)}
//         />
//         <button onClick={validatePromoCode}>Submit Promo Code</button>
//         {isValid && <p className="success">Promo Code is valid! Enjoy your offer.</p>}
//       </div>
//     </div>
//   );
// }

// export default App;
