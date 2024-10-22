// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="/">Harmaig</a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="/">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/">Contact Us</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//         <div className="container1">
//         <div className= "box"></div>
//         <p className="slogan">Where elegance meets sophistication</p>
//         <h1 className="heading">Experience the Art of Fine Jewellery</h1>
//         <div className="promo-button">
//         <p>Have a promo code?</p>
//         <Link to="/login-signup">
//           <button>Let's get started...</button>
//         </Link>
//         </div>
//         </div>

//       <div className="card-container">
//         <div className="card">
//           <img src="..." className="card-img-top" alt="..."/>
//           <div className="card-body">
//             <h5 className="card-title">Card title</h5>
//             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             <a href="/" >Go somewhere</a>
//           </div>
//         </div>

//         <div className="card">
//           <img src="..." className="card-img-top" alt="..."/>
//           <div className="card-body">
//             <h5 className="card-title">Card title</h5>
//             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             <a href="/" >Go somewhere</a>
//           </div>
//         </div>

//         <div className="card">
//           <img src="..." className="card-img-top" alt="..."/>
//           <div className="card-body">
//             <h5 className="card-title">Card title</h5>
//             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             <a href="/" >Go somewhere</a>
//           </div>
//         </div>

//         <div className="card">
//           <img src="..." className="card-img-top" alt="..."/>
//           <div className="card-body">
//             <h5 className="card-title">Card title</h5>
//             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             <a href="/">Go somewhere</a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };



// export default Home;


import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Harmaig</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contact Us</a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/login-signup">
                  <button className="log">Login</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login-signup">
                  <button className="sign">Sign Up</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

        <div className="container1">
        <div className= "box"></div>
        <p className="slogan">Where elegance meets sophistication</p>
        <h1 className="heading">Experience the Art of Fine Jewellery</h1>
        <div className="promo-button">
        <p>Have a promo code?</p>
        <Link to="/login-signup">
          <button>Let's get started...</button>
        </Link>
        </div>
        </div>

      <div className="card-container">
        <div className="card">
          <img src="data:image/jpeg;base64,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" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Earings</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

        <div className="card">
          <img src="https://www.krishnajewellers.com/blog/wp-content/uploads/2020/09/Diamond-Necklace-designs.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Necklace</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa64IbowCA4A_bOF8GH0kd03kXcoenW8y11Q&s" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Pearl Necklace</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRrqYUzxsNxxxyt_8dP0WZNU7jbALkyKEO0A&s" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Necklace</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;