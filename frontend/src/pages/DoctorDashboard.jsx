
import './DoctorDashboard.css';

const appointments = [
  {
    id: 1,
    patient: 'Aarav Sharma',
    type: 'General Checkup',
    time: '09:00 AM',
    status: 'Confirmed',
    initials: 'AS',
  },
  {
    id: 2,
    patient: 'Ananya Gupta',
    type: 'Follow-up',
    time: '10:30 AM',
    status: 'Pending',
    initials: 'AG',
  },
  {
    id: 3,
    patient: 'Rohan Verma',
    type: 'Consultation',
    time: '12:00 PM',
    status: 'Confirmed',
    initials: 'RV',
  },
];

function DoctorDashboard() {
  return (
    <div className="doctor-dashboard">
      <aside className="doctor-sidebar">
        <h2>Med<span>Connect</span></h2>
        <p className="sidebar-label">WORKSPACE</p>

        <a className="sidebar-link active" href="#dashboard">▦ Dashboard</a>
        <a className="sidebar-link" href="#appointments">▣ Appointments</a>
        <a className="sidebar-link" href="#patients">♙ Patients</a>
        <a className="sidebar-link" href="#availability">◷ Availability</a>
        <a className="sidebar-link" href="#profile">⚙ My Profile</a>

        <div className="sidebar-doctor">
          <div className="doctor-avatar">DR</div>
          <div>
            <strong>Dr. Ananya Sharma</strong>
            <small>Cardiologist</small>
          </div>
        </div>
      </aside>

      <main className="doctor-main" id="dashboard">
        <header className="dashboard-header">
          <div>
            <p className="dashboard-date">DOCTOR WORKSPACE</p>
            <h1>Good morning, Dr. Ananya 👋</h1>
            <p>Here’s what’s happening with your practice today.</p>
          </div>
          <button className="profile-button" onClick={() => alert('Profile settings will be added next.')}>
            My Profile
          </button>
        </header>

        <section className="dashboard-stats">
          <div className="stat-card">
            <span className="stat-icon blue">▣</span>
            <p>Total Appointments</p>
            <h2>24</h2>
            <small>This week</small>
          </div>
          <div className="stat-card">
            <span className="stat-icon green">♙</span>
            <p>Total Patients</p>
            <h2>128</h2>
            <small>Registered patients</small>
          </div>
          <div className="stat-card">
            <span className="stat-icon purple">◷</span>
            <p>Today's Appointments</p>
            <h2>8</h2>
            <small>3 appointments remaining</small>
          </div>
        </section>

        <section className="appointments-panel" id="appointments">
          <div className="panel-heading">
            <div>
              <h2>Today's Appointments</h2>
              <p>Manage your upcoming patient visits.</p>
            </div>
            <button onClick={() => alert('Full appointment management will be added next.')}>
              View All
            </button>
          </div>

          <div className="appointment-list">
            {appointments.map((appointment) => (
              <div className="appointment-row" key={appointment.id}>
                <div className="patient-avatar">{appointment.initials}</div>
                <div className="patient-info">
                  <strong>{appointment.patient}</strong>
                  <small>{appointment.type}</small>
                </div>
                <span className="appointment-time">{appointment.time}</span>
                <span className={`appointment-status ${appointment.status.toLowerCase()}`}>
                  {appointment.status}
                </span>
                <button
                  className="details-button"
                  onClick={() => alert(`Appointment details for ${appointment.patient}`)}
                >
                  Details
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="availability-panel" id="availability">
          <div>
            <h2>Availability</h2>
            <p>Let patients know whether you're available for appointments.</p>
          </div>
          <button
            className="availability-button"
            onClick={(event) => {
              const available = event.currentTarget.textContent === 'Available';
              event.currentTarget.textContent = available ? 'Unavailable' : 'Available';
              event.currentTarget.classList.toggle('unavailable', available);
            }}
          >
            Available
          </button>
        </section>
      </main>
    </div>
  );
}

export default DoctorDashboard;
