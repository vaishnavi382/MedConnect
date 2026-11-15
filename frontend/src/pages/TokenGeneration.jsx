
import { useLocation, useNavigate } from 'react-router-dom';
import './TokenGeneration.css';

function TokenGeneration() {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    doctor,
    appointmentDate,
    selectedSlot,
    appointmentId
  } = location.state || {};

  if (!doctor || !appointmentDate || !selectedSlot) {
    return (
      <div className="token-page">
        <h2>Appointment details not found!</h2>
        <button onClick={() => navigate('/student-dashboard')}>
          Go to Dashboard
        </button>
      </div>
    );
  }

  const tokenNumber = appointmentId
    ? `T-${appointmentId.slice(-6)}`
    : 'T-000001';

  const formattedDate = new Date(
    appointmentDate + 'T00:00:00'
  ).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="token-page">
      <div className="token-card">
        <div className="token-success-icon">✓</div>

        <h1>Your Token Is Generated!</h1>
        <p className="token-subtitle">
          Your appointment is successfully registered.
        </p>

        <div className="token-number-box">
          <span>Your Token Number</span>
          <strong>{tokenNumber}</strong>
        </div>

        <div className="token-details">
          <h2>Appointment Details</h2>

          <div className="token-detail-row">
            <span>Doctor</span>
            <strong>{doctor.name}</strong>
          </div>

          <div className="token-detail-row">
            <span>Specialization</span>
            <strong>{doctor.specialty}</strong>
          </div>

          <div className="token-detail-row">
            <span>Date</span>
            <strong>{formattedDate}</strong>
          </div>

          <div className="token-detail-row">
            <span>Time Slot</span>
            <strong>{selectedSlot}</strong>
          </div>

          <div className="token-detail-row">
            <span>Appointment ID</span>
            <strong>{appointmentId || 'Not available'}</strong>
          </div>

          <div className="token-detail-row">
            <span>Status</span>
            <strong className="token-status">Confirmed</strong>
          </div>
        </div>

        <div className="token-instructions">
          <h3>Important Instructions</h3>
          <p>Please arrive 10 minutes before your appointment.</p>
          <p>Carry your student ID and remember your token number.</p>
        </div>

        <button
          className="token-dashboard-btn"
          onClick={() => navigate('/student-dashboard')}
        >
          Go to Student Dashboard
        </button>
      </div>
    </div>
  );
}

export default TokenGeneration;
