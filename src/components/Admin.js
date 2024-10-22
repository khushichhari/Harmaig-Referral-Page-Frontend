// import React, { useState } from 'react';
// import './Admin.css'; // Ensure the new CSS is in this file

// function Admin() {
//   const [generatedCode, setGeneratedCode] = useState('');
//   const [rewards, setRewards] = useState(0); // Rewards state

//   // Function to generate random promo code
//   const generatePromoCode = () => {
//     const code = 'HARMAIG-' + Math.random().toString(36).substring(2, 8).toUpperCase();
//     setGeneratedCode(code);
//   };

//   // Function to simulate earning rewards
//   const earnReward = () => {
//     setRewards(prevRewards => prevRewards + 10); // Increase rewards by 10
//   };

//   // Share on WhatsApp
//   const shareOnWhatsApp = () => {
//     const message = `Check out this promo code: ${generatedCode}`;
//     window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`, '_blank');
//   };

//   // Share on Instagram (Provide copy and manual share option)
//   const shareOnInstagram = () => {
//     const message = `Check out this promo code: ${generatedCode}`;
//     navigator.clipboard.writeText(message);
//     alert('Promo code copied to clipboard. Share it on Instagram!');
//   };

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="/">Harmaig</a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="/"
//                   id="navbarDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Admin Menu
//                 </a>
//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <li><a className="dropdown-item" href="/">Settings</a></li>
//                   <li><a className="dropdown-item" href="/">Logout</a></li>
//                 </ul>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <div className="head">
//         <h1>Admin Dashboard</h1>
//       </div>

//       <div className="Admin">
//         <h3>Get Referral Code</h3>
//         <button onClick={generatePromoCode}>Generate Promo Code</button>
//         {generatedCode && (
//           <>
//             <p id="promo">Your generated promo code is: <strong>{generatedCode}</strong></p>

//             {/* WhatsApp and Instagram share icons */}
//             <div className="share-icons">
//               <i id="icon" onClick={shareOnWhatsApp} className="fab fa-whatsapp"></i>
//               <i id="icon" onClick={shareOnInstagram} className="fab fa-instagram"></i>
//             </div>
//           </>
//         )}
//         <hr />
//         <h2>Rewards (Refer and Win)</h2>
//         <p>You have <strong>{rewards}</strong> points.</p>
//         <button onClick={earnReward}>Earn Reward Points</button>
//         <p>Refer your friends to earn rewards!</p>
//       </div>
//     </>
//   );
// }

// export default Admin;




import React, { useState } from 'react';
import './Admin.css';

function Admin() {
  const [generatedCode, setGeneratedCode] = useState('');
  const [rewards, setRewards] = useState(0);
  const [showReferralPopup, setShowReferralPopup] = useState(false);

  const generatePromoCode = () => {
    const code = 'HARMAIG-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    setGeneratedCode(code);
    setShowReferralPopup(true);
  };

  const earnReward = () => {
    setRewards(prevRewards => prevRewards + 10);
  };

  const shareOnWhatsApp = () => {
    const message = `Check out this promo code: ${generatedCode}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`, '_blank');
  };

  const shareOnInstagram = () => {
    const message = `Check out this promo code: ${generatedCode}`;
    navigator.clipboard.writeText(message);
    alert('Promo code copied to clipboard. Share it on Instagram!');
  };

  const closeReferralPopup = () => {
    setShowReferralPopup(false);
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
                  Admin Menu
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
        <h1>Admin Dashboard</h1>
      </div>

      <div className="Admin">
        <h3>Get Referral Code</h3>
        <button onClick={generatePromoCode}>Generate Promo Code</button>
        {showReferralPopup && (
          <div className="referral-popup">
            <div className="popup-content">
              <span className="close-button" onClick={closeReferralPopup}>&times;</span>
              <h2>Refer your friends...!</h2>
              <p id="promo" className="promo-code-display">
                <strong>{generatedCode}</strong>
              </p>

              <div className="share-icons">
                <i id="icon" onClick={shareOnWhatsApp} className="fab fa-whatsapp"></i>
                <i id="icon" onClick={shareOnInstagram} className="fab fa-instagram"></i>
              </div>

              <p>Your friends can enter this code on the Refer and Win page on the Harmaig. Both you and your friend win guaranteed rewards.</p>
            </div>
          </div>
        )}
        <hr />
        <h2>Rewards (Refer and Win)</h2>
        <p>You have <strong>{rewards}</strong> points.</p>
        <button onClick={earnReward}>Earn Reward Points</button>
        <p>Refer your friends to earn rewards!</p>
      </div>
    </>
  );
}

export default Admin;