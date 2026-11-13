
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './StudentRegister.css';

function StudentRegister() {
  const [formData, setFormData] = useState({
    fullName: '',
    studentId: '',
    email: '',
    phone: '',
    department: '',
    year: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleRegister(event) {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Password and Confirm Password do not match!');
      return;
    }

    if (formData.password.length < 6) {
      alert('Password must contain at least 6 characters.');
      return;
    }

    alert('Student registration successful!');

    console.log('Registered Student:', formData);

    // Login page par redirect
    navigate('/student-login');
  }

  return (
    <div className="student-register-page">

      <header className="register-navbar">
        <Link to="/" className="register-brand">
          Med<span>Connect</span>
        </Link>

        <Link to="/" className="register-home-link">
          ← Back to Home
        </Link>
      </header>

      <main className="register-content">
        <section className="register-card">

          <div className="register-icon">✚</div>

          <p className="register-eyebrow">
            UNIVERSITY MEDICAL CENTRE
          </p>

          <h1>Create Student Account</h1>

          <p className="register-subtitle">
            Register to book appointments and connect with doctors.
          </p>

          <form onSubmit={handleRegister}>

            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <label>Student ID / Roll Number</label>
            <input
              type="text"
              name="studentId"
              placeholder="Enter your student ID"
              value={formData.studentId}
              onChange={handleChange}
              required
            />

            <label>University Email</label>
            <input
              type="email"
              name="email"
              placeholder="yourname@university.edu"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              maxLength="10"
              required
            />

            <label>Department</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value="">Select Department</option>
              <option value="CSE">Computer Science</option>
              <option value="IT">Information Technology</option>
              <option value="ECE">Electronics and Communication</option>
              <option value="ME">Mechanical Engineering</option>
              <option value="CE">Civil Engineering</option>
              <option value="Other">Other</option>
            </select>

            <label>Year of Study</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            >
              <option value="">Select Year</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>

            <label>Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label>Confirm Password</label>
            <div className="register-password-field">
              <input
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="register-password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>

            <button
              type="submit"
              className="register-submit-button"
            >
              Create Account →
            </button>

          </form>

          <p className="register-login-note">
            Already have an account?{' '}
            <Link to="/student-login">Login here</Link>
          </p>

        </section>
      </main>
    </div>
  );
}

export default StudentRegister;
