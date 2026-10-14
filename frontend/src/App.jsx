
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DoctorDashboard from './pages/DoctorDashboard.jsx';
import './App.css';

const doctors = [
  { name: 'Dr. Ananya Sharma', specialty: 'Cardiologist', experience: '8 years experience', rating: '4.9', fee: '₹600', initials: 'AS', color: '#dbeafe' },
  { name: 'Dr. Rahul Verma', specialty: 'Dermatologist', experience: '6 years experience', rating: '4.8', fee: '₹500', initials: 'RV', color: '#dcfce7' },
  { name: 'Dr. Priya Singh', specialty: 'Neurologist', experience: '10 years experience', rating: '4.9', fee: '₹800', initials: 'PS', color: '#fce7f3' },
];

function HomePage() {
  return (
    <div className="app">
      <nav className="navbar">
        <a className="logo" href="#home">
          <span className="logo-icon">✚</span> MedConnect
        </a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#doctors">Find Doctors</a>
          <a href="#how-it-works">How It Works</a>
        </div>
        <div className="nav-actions">
          <button className="login-btn">Login</button>
          <button className="primary-btn">Sign Up</button>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">YOUR HEALTH, OUR PRIORITY</span>
            <h1>Find the right doctor.<span> Feel better, faster.</span></h1>
            <p>Book appointments with trusted doctors near you. Quality healthcare made simple and accessible.</p>
            <form className="search-box" onSubmit={(event) => {
              event.preventDefault();
              document.getElementById('doctors')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <span>⌕</span>
              <input type="search" placeholder="Search doctor or specialty..." aria-label="Search doctors" />
              <button className="primary-btn" type="submit">Find Doctors</button>
            </form>
            <div className="hero-points">
              <span>✓ Trusted doctors</span>
              <span>✓ Easy booking</span>
              <span>✓ Patient-first care</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="medical-symbol">✚</div>
            <div className="hero-card">
              <div className="doctor-avatar hero-avatar">👩‍⚕️</div>
              <div><strong>Your health matters</strong><p>Care you can count on.</p></div>
              <span className="verified">✓</span>
            </div>
            <div className="floating-note">
              <span>💙</span>
              <div><strong>Healthcare, simplified</strong><p>Book your visit in minutes</p></div>
            </div>
          </div>
        </section>

        <section className="stats">
          <div><strong>Easy</strong><span>Appointment booking</span></div>
          <div><strong>Trusted</strong><span>Healthcare professionals</span></div>
          <div><strong>Simple</strong><span>Patient experience</span></div>
        </section>

        <section className="doctors-section" id="doctors">
          <div className="section-heading">
            <div>
              <span className="eyebrow">MEET OUR SPECIALISTS</span>
              <h2>Find your doctor</h2>
              <p>Explore our featured healthcare professionals.</p>
            </div>
            <a href="#doctors" className="view-all">View all doctors →</a>
          </div>

          <div className="doctor-grid">
            {doctors.map((doctor) => (
              <article className="doctor-card" key={doctor.name}>
                <div className="doctor-profile" style={{ backgroundColor: doctor.color }}>
                  <span>{doctor.initials}</span>
                  <span className="online-dot" />
                </div>
                <div className="doctor-info">
                  <span className="specialty">{doctor.specialty}</span>
                  <h3>{doctor.name}</h3>
                  <p>{doctor.experience}</p>
                  <div className="doctor-meta">
                    <span>⭐ {doctor.rating}</span>
                    <strong>{doctor.fee}</strong>
                  </div>
                  <button className="book-btn" onClick={() =>
                    alert(`Appointment booking for ${doctor.name} will be implemented next.`)
                  }>
                    Book Appointment
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="how-section" id="how-it-works">
          <span className="eyebrow">SIMPLE AND CONVENIENT</span>
          <h2>Healthcare in three steps</h2>
          <div className="steps-grid">
            <div><span>01</span><h3>Find a doctor</h3><p>Explore doctors by their medical specialty.</p></div>
            <div><span>02</span><h3>Book an appointment</h3><p>Choose a doctor and continue to booking.</p></div>
            <div><span>03</span><h3>Get the care you need</h3><p>Manage your visit with MedConnect.</p></div>
          </div>
        </section>
      </main>

      <footer>
        <a className="logo" href="#home"><span className="logo-icon">✚</span> MedConnect</a>
        <p>Connecting patients with better healthcare.</p>
        <span>© 2026 MedConnect · Academic project</span>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
