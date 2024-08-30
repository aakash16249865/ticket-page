import React, { useState } from 'react';
import './HotelBooking.css';
import bl from './images/bl.png';
import download6 from './images/d6.jpeg';
import download8 from './images/d8.jpeg';
import download4 from './images/d4.jpeg';
import download5 from './images/d5.jpeg';
import download7 from './images/d7.jpeg';
import z1 from './images/z1.jpg';
import z2 from './images/z2.jpg';
import z3 from './images/z3.jpg';
import z7 from './images/z7.jpg';
import z10 from './images/z10.jpg';
import z11 from './images/z11.jpg';

function HotelBooking() {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const hotelData = [
    { name: 'Angel', image: download6, description: 'Experience luxury at its finest with world-class amenities and stunning city views.' },
    { name: 'Nayagn', image: z3, description: 'Relax by the beach in a serene and elegant environment with premium services.' },
    { name: 'VIP', image: download8, description: 'Enjoy breathtaking mountain views and cozy accommodations in a natural setting.' },
    { name: 'Polladhavan', image: download4, description: "Discover the city's vibrant atmosphere from our centrally located inn." },
    { name: 'Hema', image: download5, description: 'Escape to the peaceful countryside and enjoy relaxing rural views.' },
    { name: 'Eshika', image: download7, description: 'A chic urban retreat offering modern comforts and convenient amenities.' },
    { name: 'Hero', image: z1, description: 'Relax by the beach in a serene and elegant environment with premium services.' },
    { name: 'Villan', image: z10, description: 'Relax by the beach in a serene and elegant environment with premium services.' },
    { name: 'Vikram', image: z11, description: 'Relax by the beach in a serene and elegant environment with premium services.' },
    { name: 'Leo', image: z2, description: 'Relax by the beach in a serene and elegant environment with premium services.' },
    { name: 'Kaithi', image: z7, description: 'Relax by the beach in a serene and elegant environment with premium services.' },
    { name: 'Nayagn', image: z3, description: 'Relax by the beach in a serene and elegant environment with premium services.' }
  ];

  const filteredHotels = hotelData.filter((hotel) => hotel.name.toLowerCase().includes(query));

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <a className="navbar-brand" href="#">
            <img src={bl} alt="Hotel Booking Logo" />
            BOOK YOUR JOURNEY
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <form className="form-inline ml-3 search-bar" onSubmit={(e) => e.preventDefault()}>
              <input
                id="searchInput"
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={query}
                onChange={handleSearch}
              />
              <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Seaters
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">55 SEATERS</a>
                  <a className="dropdown-item" href="#">20 SEATERS</a>
                  <a className="dropdown-item" href="#">Seat 3</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">More Seats</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="container my-5">
        <div className="row" id="hotelList">
          {filteredHotels.map((hotel, index) => (
            <div key={index} className="col-md-4 mb-4 hotel-card" data-name={hotel.name}>
              <div className="card">
                <a href="#">
                  <img src={hotel.image} className="card-img-top hotel-image" alt={`Hotel ${hotel.name}`} />
                  <div className="card-body">
                    <h5 className="card-title">{hotel.name}</h5>
                    <p className="card-text">{hotel.description}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>About Us</h5>
              <p>We offer the best hotel deals and a wide range of options to suit every traveler's needs. Enjoy a seamless booking experience with us.</p>
            </div>
            <div className="col-md-6">
              <h5>Quick Links</h5>
              <div className="links">
                <a href="#">Privacy Policy</a> |
                <a href="#">Terms of Service</a> |
                <a href="#">FAQ</a>
              </div>
              <div className="social-icons mt-3">
                <a href="#" className="fab fa-facebook-f" aria-label="Facebook" target="_blank"></a>
                <a href="#" className="fab fa-twitter" aria-label="Twitter" target="_blank"></a>
                <a href="#" className="fab fa-instagram" aria-label="Instagram" target="_blank"></a>
                <a href="#" className="fab fa-linkedin-in" aria-label="LinkedIn" target="_blank"></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HotelBooking;
