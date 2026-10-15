
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './DoctorLogin.css';

function DoctorLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();

    // Temporary demo login.
    // Later, this will connect to the backend API.
    const demoDoctors = [
      {
        email: 'ananya@medconnect.com',
        password: 'ananya123',
        name: 'Dr. Ananya Sharma',
        specialty: 'Cardiologist',
      },
      {
        email: 'rahul@medconnect.com',
        password: 'rahul123',
        name: 'Dr. Rahul Verma',
        specialty: 'Dermatologist',
      },
    ];

    const doctor = demoDoctors.find(
      (item) =>
        item.email === email.trim().toLowerCase() &&
        item.password === password
    );

    if (doctor) {
      navigate('/doctor-dashboard', {
        state: { doctor },
      });
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }

  return (
    <div className="doctor-login-page">
      <header className="login-navbar">
        <Link to="/" className="login-brand">
          Med<span>Connect</span>
        </Link>

        <Link to="/" className="back-home-link">
          ← Back to Home
        </Link>
      </header>

      <main className="login-content">
        <section className="login-card">
          <div className="login-icon">✚</div>

          <p className="login-eyebrow">
            UNIVERSITY MEDICAL CENTRE
          </p>

          <h1>Doctor Login</h1>

          <p className="login-subtitle">
            Sign in to manage your appointments and patient queue.
          </p>

          <form onSubmit={handleLogin}>
            <label htmlFor="doctor-email">
              Email Address
            </label>

            <input
              id="doctor-email"
              type="email"
              placeholder="doctor@university.edu"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <label htmlFor="doctor-password">
              Password
            </label>

            <div className="password-field">
              <input
                id="doctor-password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword((current) => !current)
                }
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>

            <button
              type="submit"
              className="doctor-login-button"
            >
              Login to Dashboard →
            </button>
          </form>

          <p className="login-demo-note">
            Demo mode: credentials are not verified by a server.
          </p>
        </section>
      </main>
    </div>
  );
}

export default DoctorLogin;
