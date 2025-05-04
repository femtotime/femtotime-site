
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const getBookingComPrice = async () => {
  const bookingComPrice = 100;
  return (bookingComPrice * 0.9).toFixed(2);
};

const Navbar = () => (
  <nav className="flex justify-between items-center p-4 bg-gray-100 shadow">
    <h1 className="text-xl font-bold">Sunlit Elegance Escape</h1>
    <div className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/booking">Booking</Link>
    </div>
  </nav>
);

const Home = () => (
  <div className="p-6">
    <h2 className="text-2xl font-semibold mb-4">Welcome to Sunlit Elegance Escape</h2>
    <p>Enjoy your stay in our beautifully designed apartment located in the heart of Varna. Ideal for couples or solo travelers.</p>
    <div className="mt-4">
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.4624969631125!2d27.920498076684167!3d43.214050479137906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a454c39939fc9b%3A0x9f2a74a865d30293!2sVarna!5e0!3m2!1sen!2sbg!4v1700000000000"
        width="100%"
        height="300"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
);

const About = () => (
  <div className="p-6">
    <h2 className="text-2xl font-semibold mb-4">About the Apartment</h2>
    <p>This 1-bedroom flat features a modern kitchen, cozy living space, and a sunlit balcony. Amenities include WiFi, air conditioning, and a smart TV.</p>
  </div>
);

const Gallery = () => (
  <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
    {[1, 2, 3, 4, 5].map((img) => (
      <img
        key={img}
        src={`https://via.placeholder.com/400x300?text=Photo+${img}`}
        alt={`Flat image ${img}`}
        className="rounded-xl shadow"
      />
    ))}
  </div>
);

const Booking = () => {
  const [price, setPrice] = React.useState(null);
  React.useEffect(() => {
    getBookingComPrice().then(setPrice);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Book Your Stay</h2>
      <p className="mb-2">Our price: <span className="font-bold">€{price || '...'}</span> per night (10% cheaper than Booking.com)</p>
      <a
        href="https://www.booking.com/hotel/bg/sunlit-elegance-escape-apartment.en-gb.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View on Booking.com</button>
      </a>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
}
