import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DoctorDashboard from './pages/DoctorDashboard.jsx';
import DoctorLogin from './pages/DoctorLogin.jsx';
import './App.css';

const doctors = [
  { name: 'Dr. Ananya Sharma', specialty: 'Cardiologist', experience: '8 years experience', days: 'Monday – Friday', hours: '09:00 AM – 01:00 PM', initials: 'AS' },
  { name: 'Dr. Rahul Verma', specialty: 'Dermatologist', experience: '6 years experience', days: 'Monday – Friday', hours: '10:00 AM – 02:00 PM', initials: 'RV' },
  { name: 'Dr. Priya Singh', specialty: 'Neurologist', experience: '10 years experience', days: 'Monday – Friday', hours: '09:30 AM – 01:30 PM', initials: 'PS' },
  { name: 'Dr. Arjun Mehta', specialty: 'Orthopedic', experience: '9 years experience', days: 'Monday – Saturday', hours: '10:00 AM – 01:00 PM', initials: 'AM' },
  { name: 'Dr. Neha Kapoor', specialty: 'Pediatrician', experience: '7 years experience', days: 'Monday – Friday', hours: '09:00 AM – 12:00 PM', initials: 'NK' },
  { name: 'Dr. Karan Malhotra', specialty: 'General Physician', experience: '12 years experience', days: 'Monday – Saturday', hours: '11:00 AM – 02:00 PM', initials: 'KM' },
  { name: 'Dr. Meera Joshi', specialty: 'Gynecologist', experience: '8 years experience', days: 'Monday – Friday', hours: '10:00 AM – 01:00 PM', initials: 'MJ' },
  { name: 'Dr. Aditya Rao', specialty: 'ENT Specialist', experience: '5 years experience', days: 'Tuesday – Saturday', hours: '02:00 PM – 05:00 PM', initials: 'AR' },
  { name: 'Dr. Simran Kaur', specialty: 'Ophthalmologist', experience: '6 years experience', days: 'Monday – Friday', hours: '09:00 AM – 12:00 PM', initials: 'SK' },
];

const staff = [
  { name: 'Medical Officers', role: 'Patient consultations and clinical care', icon: '✚' },
  { name: 'Nursing Staff', role: 'Patient support and nursing assistance', icon: '♡' },
  { name: 'Reception Team', role: 'Appointments and visitor assistance', icon: '▤' },
  { name: 'Pharmacy Support', role: 'Medicine-related assistance', icon: '+' },
  { name: 'Laboratory Team', role: 'Diagnostic and test coordination', icon: '⚕' },
  { name: 'Emergency Support', role: 'Urgent care coordination', icon: '✚' },
];

function HomePage() {
  const [search, setSearch] = useState('');

  const filteredDoctors = doctors.filter((doctor) =>
    `${doctor.name} ${doctor.specialty}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="app" id="home">
      <nav className="navbar">
        <a className="logo" href="#home">
          <span className="logo-icon">✚</span>
          <span>MedConnect<small>PEOPLE · HEALTH · TOGETHER</small></span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#doctors">Find Doctors</a>
          <a href="#medical-support">Medical Support</a>
          <a href="#contact">Contact</a>
        </div>

        
<div className="nav-actions">
  <Link className="doctor-login-link" to="/doctor-login">
    Doctor Login
  </Link>

  <a className="primary-btn" href="#doctors">
    Book an Appointment
  </a>
</div>

      </nav>

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">YOUR HEALTH · OUR PRIORITY</span>
            <h1>Healthcare, <span>made easier.</span></h1>
            <p>Find trusted doctors and explore consultation hours to plan your visit with confidence.</p>

            <form className="search-box" onSubmit={(event) => {
              event.preventDefault();
              document.getElementById('doctors')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <span>⌕</span>
              <input
                type="search"
                placeholder="Search doctor or specialization..."
                aria-label="Search doctors"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
              <button className="primary-btn" type="submit">Search</button>
            </form>

            <div className="hero-points">
              <span>✓ Trusted Doctors</span>
              <span>♡ Easy Appointments</span>
              <span>✚ Better Care</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-doctor">👩‍⚕️</div>
            <div className="floating-note">
              <span className="note-icon">✚</span>
              <div>
                <strong>Care you can count on</strong>
                <p>Your health matters to us.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits">
          <div><span>♡</span><p><strong>Trusted Doctors</strong><small>Experienced specialists</small></p></div>
          <div><span>▦</span><p><strong>Easy Appointments</strong><small>Simple appointment process</small></p></div>
          <div><span>✚</span><p><strong>Better Healthcare</strong><small>Care for every patient</small></p></div>
        </section>

        <section className="doctors-section" id="doctors">
          <div className="section-heading">
            <div>
              <span className="eyebrow">OUR MEDICAL TEAM</span>
              <h2>Doctors &amp; Consultation Hours</h2>
              <p>Meet our doctors and explore their consultation schedules.</p>
            </div>
            <span className="doctor-count">{filteredDoctors.length} Doctors</span>
          </div>

          <div className="doctor-grid">
            {filteredDoctors.map((doctor, index) => (
              <article className="doctor-card" key={doctor.name}>
                <div className={`doctor-profile avatar-${index % 3}`}>
                  <span>{doctor.initials}</span>
                </div>

                <div className="doctor-info">
                  <span className="specialty">{doctor.specialty}</span>
                  <h3>{doctor.name}</h3>
                  <p>{doctor.experience}</p>
                  <span className="availability"><i /> Schedule listed</span>
                </div>

                <div className="consultation-hours">
                  <h4>▦ &nbsp; CONSULTATION HOURS</h4>
                  <div><span>{doctor.days}</span><strong>{doctor.hours}</strong></div>
                  <div><span>Sunday</span><strong className="closed">Closed</strong></div>
                </div>

                <button
                  className="book-btn"
                  onClick={() => alert(`Appointment booking for ${doctor.name} will be connected next.`)}
                >
                  View Profile <span>→</span>
                </button>
              </article>
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <p className="no-results">No doctors found. Try another name or specialization.</p>
          )}
        </section>

        <section className="medical-support" id="medical-support">
          <div className="support-heading">
            <span className="eyebrow">HERE FOR YOUR HEALTH</span>
            <h2>Medical Support</h2>
            <p>Our medical and support teams are here to assist you.</p>
          </div>

          <div className="staff-grid">
            {staff.map((member) => (
              <article className="staff-card" key={member.name}>
                <span className="staff-icon">{member.icon}</span>
                <div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-intro">
            <span className="eyebrow">GET IN TOUCH</span>
            <h2>Contact &amp; Emergency Information</h2>
            <p>Contact details below are sample placeholders. Replace them with your team's verified project information.</p>
          </div>

          <div className="contact-grid">
            <article className="contact-card">
              <span className="contact-icon">⌖</span>
              <h3>Visit Us</h3>
              <p>MedConnect Medical Centre</p>
              <small>Address to be added</small>
            </article>

            <article className="contact-card">
              <span className="contact-icon">☎</span>
              <h3>General Enquiries</h3>
              <p>Contact number to be added</p>
              <small>Email to be added</small>
            </article>

            <article className="contact-card emergency-card">
              <span className="contact-icon">!</span>
              <h3>Emergency Contact</h3>
              <p>Use your local emergency service for urgent medical help.</p>
              <small>Add a verified emergency contact before publishing.</small>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home"><span className="logo-icon">✚</span> MedConnect</a>
        <p>People · Health · Together</p>
        <span>© 2026 MedConnect · Academic Project</span>
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
        <Route path="/doctor-login" element={<DoctorLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;