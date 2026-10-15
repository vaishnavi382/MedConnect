
import { useState } from 'react';
import './DoctorDashboard.css';

const initialAppointments = [
  {
    id: 1,
    token: 'TOKEN #07',
    patient: 'Aarav Sharma',
    type: 'General Checkup',
    time: '09:00 AM',
    status: 'Confirmed',
    initials: 'AS',
    remarks: '',
  },
  {
    id: 2,
    token: 'TOKEN #08',
    patient: 'Ananya Gupta',
    type: 'Follow-up',
    time: '10:30 AM',
    status: 'Pending',
    initials: 'AG',
    remarks: '',
  },
  {
    id: 3,
    token: 'TOKEN #09',
    patient: 'Rohan Verma',
    type: 'Consultation',
    time: '12:00 PM',
    status: 'Confirmed',
    initials: 'RV',
    remarks: '',
  },
];

function DoctorDashboard() {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [available, setAvailable] = useState(true);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [remarks, setRemarks] = useState({});
  const [savedRemarks, setSavedRemarks] = useState({});
  const [message, setMessage] = useState('');

  const completedAppointments = appointments.filter(
    (appointment) => appointment.status === 'Completed'
  ).length;

  const remainingAppointments = appointments.filter(
    (appointment) =>
      appointment.status !== 'Completed' &&
      appointment.status !== 'Cancelled'
  ).length;

  function updateStatus(id, newStatus) {
    setAppointments((currentAppointments) =>
      currentAppointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status: newStatus }
          : appointment
      )
    );

    setMessage('Appointment status updated.');
  }

  function saveRemarks(id) {
    setSavedRemarks((currentRemarks) => ({
      ...currentRemarks,
      [id]: remarks[id] || '',
    }));

    setMessage('Medical remarks saved for this session.');
  }

  function togglePatientDetails(id) {
    setSelectedPatient((currentId) => (currentId === id ? null : id));
    setMessage('');
  }

  return (
    <div className="doctor-dashboard">
      <aside className="doctor-sidebar">
        <h2>
          Med<span>Connect</span>
        </h2>

        <p className="sidebar-label">WORKSPACE</p>

        <a className="sidebar-link active" href="#dashboard">
          ▦ Dashboard
        </a>
        <a className="sidebar-link" href="#appointments">
          ▣ Appointments
        </a>
        <a className="sidebar-link" href="#patients">
          ♙ Patients
        </a>
        <a className="sidebar-link" href="#availability">
          ◷ Availability
        </a>
        <a className="sidebar-link" href="#profile">
          ⚙ My Profile
        </a>

        <div className="sidebar-doctor" id="profile">
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
            <p className="dashboard-date">UNIVERSITY MEDICAL CENTRE</p>
            <h1>Good morning, Dr. Ananya 👋</h1>
            <p>Manage your appointments and daily patient queue.</p>
          </div>

          <button
            className="profile-button"
            onClick={() => togglePatientDetails('profile')}
          >
            My Profile
          </button>
        </header>

        <section className="dashboard-stats">
          <div className="stat-card">
            <span className="stat-icon blue">▣</span>
            <p>Total Appointments</p>
            <h2>{appointments.length}</h2>
            <small>Sample appointments</small>
          </div>

          <div className="stat-card">
            <span className="stat-icon green">♙</span>
            <p>Patients in Queue</p>
            <h2>{remainingAppointments}</h2>
            <small>Not completed or cancelled</small>
          </div>

          <div className="stat-card">
            <span className="stat-icon purple">✓</span>
            <p>Completed Appointments</p>
            <h2>{completedAppointments}</h2>
            <small>Marked completed</small>
          </div>
        </section>

        <section className="appointments-panel" id="appointments">
          <div className="panel-heading">
            <div>
              <h2>Today's Appointment Queue</h2>
              <p>Review patient visits and update appointment status.</p>
            </div>
          </div>

          {message && (
            <p className="dashboard-message" role="status">
              {message}
            </p>
          )}

          <div className="appointment-list">
            {appointments.map((appointment) => (
              <div key={appointment.id}>
                <div className="appointment-row">
                  <div className="patient-avatar">
                    {appointment.initials}
                  </div>

                  <div className="patient-info">
                    <strong>{appointment.patient}</strong>
                    <small>{appointment.type}</small>
                    <small className="token-number">
                      {appointment.token}
                    </small>
                  </div>

                  <span className="appointment-time">
                    {appointment.time}
                  </span>

                  <span
                    className={`appointment-status ${appointment.status.toLowerCase()}`}
                  >
                    {appointment.status}
                  </span>

                  <button
                    className="details-button"
                    onClick={() => togglePatientDetails(appointment.id)}
                  >
                    {selectedPatient === appointment.id
                      ? 'Close'
                      : 'Details'}
                  </button>
                </div>

                {selectedPatient === appointment.id && (
                  <div className="patient-details" id="patients">
                    <h3>Patient Details</h3>

                    <p>
                      <strong>Patient:</strong> {appointment.patient}
                    </p>
                    <p>
                      <strong>Token:</strong> {appointment.token}
                    </p>
                    <p>
                      <strong>Visit type:</strong> {appointment.type}
                    </p>
                    <p>
                      <strong>Appointment time:</strong> {appointment.time}
                    </p>

                    <label htmlFor={`status-${appointment.id}`}>
                      Appointment Status
                    </label>

                    <select
                      id={`status-${appointment.id}`}
                      value={appointment.status}
                      onChange={(event) =>
                        updateStatus(appointment.id, event.target.value)
                      }
                    >
                      <option value="Pending">Pending</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>

                    <label htmlFor={`remarks-${appointment.id}`}>
                      Brief Medical Remarks
                    </label>

                    <textarea
                      id={`remarks-${appointment.id}`}
                      rows={3}
                      placeholder="Enter relevant consultation remarks..."
                      value={remarks[appointment.id] ?? appointment.remarks}
                      onChange={(event) => {
                        setRemarks((currentRemarks) => ({
                          ...currentRemarks,
                          [appointment.id]: event.target.value,
                        }));
                      }}
                    />

                    <button
                      className="profile-button"
                      onClick={() => saveRemarks(appointment.id)}
                    >
                      Save Remarks
                    </button>

                    {savedRemarks[appointment.id] !== undefined && (
                      <p className="saved-remarks">
                        <strong>Saved remarks:</strong>{' '}
                        {savedRemarks[appointment.id] || 'No remarks added.'}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="availability-panel" id="availability">
          <div>
            <h2>Doctor Availability</h2>
            <p>
              Current status: {available ? 'Available' : 'Unavailable'}.
              This demo does not yet update student-facing slots.
            </p>
          </div>

          <button
            className={`availability-button ${
              available ? '' : 'unavailable'
            }`}
            onClick={() => setAvailable((current) => !current)}
          >
            {available ? 'Available' : 'Unavailable'}
          </button>
        </section>
      </main>
    </div>
  );
}

export default DoctorDashboard;
