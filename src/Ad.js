import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@popperjs/core/dist/umd/popper.min';
import log from './images/bl.png';
import busImage from './images/bus4.jpg';

const Ad = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light px-4" style={{ background: 'linear-gradient(to right, #ff7e5f, #feb47b)' }}>
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={log} alt="Logo" style={{ height: '50px' }} />
          <span className="text-white">BOOK YOUR JOURNEY</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/booking">Booking</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/faq">FAQ</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container-fluid py-5 d-flex" style={{ background: 'linear-gradient(to right, #ff7e5f, #feb47b)' }}>
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="card photo-card" style={{ width: '300px', transition: 'transform 0.3s ease', marginBottom: '30px', marginTop: '-30px' }}>
              <img src={busImage} alt="Bus" className="card-img-top" style={{ height: '450px', objectFit: 'cover' }} />
            </div>
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center text-white">
            <h2 className="mb-4">"Every journey begins and ends with a bus ride."</h2>
            <p className="lead mb-4">Experience comfort and convenience with our reliable bus services. Wherever you go, we ensure you arrive safely and on time.</p>
            <div>
              <a href="/addbus"><button className="btn btn-light" style={{ marginRight: '20px' }}>Add Bus</button></a>
              <a href="/"><button className="btn btn-outline-light">See Details</button></a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Ad;
