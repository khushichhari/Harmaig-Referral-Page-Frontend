import React from 'react';
import './Main.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Main() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBtnClick = (e) => {
    e.preventDefault();
    navigate('/admin');
  };
  return (
    <div className="App">
      <header className="header">
        <span>Refer Harmaig Promo Code to purchace jwellery</span>
        <a href="/" className="tnc-link">T&Cs</a>
      </header>

      <section className="refer-section">
        <h2>Invite friends to Harmaig Jwellwers, Refer & Win.</h2>
        <p id = "Pa">Get up to $ discount</p>
        <div className="reward-box">
          <div className="reward">
            <p>Get Assured</p>
            <h3>$ Discount</h3>
          </div>
          <div className="deal">
            <p>Deal Worth</p>
            <h3>₹1,00000</h3>
            <p>| Harmaig |</p>
          </div>
        </div>
        <button className="refer-btn" onClick= {handleBtnClick}>Get Promo Code</button>
      </section>

      <section className="offers-section">
    <p id = "Pa"> Invite friends to purchase desirable jewelry</p>
    <div className="offer-box">
        <div className="offer">
            <img src="https://harmaigjewellers.vercel.app/images/1.png?height=208&width=240" alt="Jewelry 1" />
            <h4>₹125 Off</h4>
            <p>Rings</p>
        </div>
        <div className="offer">
            <img src="	https://harmaigjewellers.vercel.app/images/2.png" alt="Jewelry 2" />
            <h4>₹1000 Off</h4>
            <p>Necklace</p>
        </div>
        <div className="offer">
            <img src="https://harmaigjewellers.vercel.app/images/7.jpeg" alt="Jewelry 3" />
            <h4>1000 Cashback Points</h4>
            <p>Earnings</p>
        </div>
    </div>
</section>

    </div>
  );
}

export default Main;


