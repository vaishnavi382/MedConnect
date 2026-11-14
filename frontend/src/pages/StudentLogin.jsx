
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './StudentLogin.css';

function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();

    // Temporary demo student login
    const demoStudent = {
      email: 'student@medconnect.com',
      password: 'student123',
      name: 'Demo Student',
    };

    if (
  email.trim().toLowerCase() === demoStudent.email &&
  password === demoStudent.password
) {
  alert('Student login successful!');
  navigate('/student-dashboard');
} else {
  alert('Invalid email or password. Please try again.');
}
  }

  return (
    <div className="student-login-page">

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

          <h1>Student Login</h1>

          <p className="login-subtitle">
            Login to find doctors and manage your appointments.
          </p>

          <form onSubmit={handleLogin}>

            <label htmlFor="student-email">
              Student Email Address
            </label>

            <input
              id="student-email"
              type="email"
              placeholder="student@university.edu"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <label htmlFor="student-password">
              Password
            </label>

            <div className="password-field">
              <input
                id="student-password"
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
              className="student-login-button"
            >
              Login to Account →
            </button>

          </form>

          <p className="login-demo-note">
            Demo Email: student@medconnect.com
            <br />
            Demo Password: student123
          </p>
          <p className="register-account-note">
  Don't have an account?{' '}
  <Link to="/student-register">Register here</Link>
</p>

        </section>
      </main>
    </div>
  );
}

export default StudentLogin;
