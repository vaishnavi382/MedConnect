
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './AppointmentConfirmation.css';

function AppointmentConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();

  const { doctor, appointmentDate, selectedSlot } = location.state || {};

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [appointmentId, setAppointmentId] = useState('');

  if (!doctor || !appointmentDate || !selectedSlot) {
    return (
      <div className="confirmation-page">
        <h2>Appointment details not found!</h2>
        <button onClick={() => navigate('/student-doctors')}>
          Find a Doctor
        </button>
      </div>
    );
  }

  const formattedDate = new Date(
    appointmentDate + 'T00:00:00'
  ).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const handleConfirmation = () => {
    const newId = 'MED' + Date.now();
    setAppointmentId(newId);
    setIsConfirmed(true);
  };

  return (
    <div className="confirmation-page">
      <div className="confirmation-card">

        <div className="confirmation-icon">
          {isConfirmed ? '✓' : '📋'}
        </div>

        <h1>
          {isConfirmed
            ? 'Appointment Confirmed!'
            : 'Review Your Appointment'}
        </h1>

        <p className="confirmation-subtitle">
          {isConfirmed
            ? 'Your appointment has been successfully booked.'
            : 'Please check your appointment details before confirming.'}
        </p>

        {isConfirmed && (
          <div className="appointment-id">
            <span>Appointment ID</span>
            <strong>{appointmentId}</strong>
          </div>
        )}

        <div className="confirmation-details">
          <h2>Appointment Details</h2>

          <div className="detail-row">
            <span>Doctor Name</span>
            <strong>{doctor.name}</strong>
          </div>

          <div className="detail-row">
            <span>Specialization</span>
            <strong>{doctor.specialty}</strong>
          </div>

          <div className="detail-row">
            <span>Experience</span>
            <strong>{doctor.experience}</strong>
          </div>

          <div className="detail-row">
            <span>Appointment Date</span>
            <strong>{formattedDate}</strong>
          </div>

          <div className="detail-row">
            <span>Time Slot</span>
            <strong>{selectedSlot}</strong>
          </div>

          <div className="detail-row">
            <span>Booking Status</span>
            <strong className={isConfirmed ? 'confirmed-status' : 'pending-status'}>
              {isConfirmed ? 'Confirmed' : 'Pending Confirmation'}
            </strong>
          </div>
        </div>

        <div className="confirmation-instructions">
          <h3>Important Instructions</h3>
          <ul>
            <li>Arrive 10 minutes before your appointment.</li>
            <li>Carry your student ID card.</li>
            <li>Keep your appointment details for reference.</li>
          </ul>
        </div>

        {!isConfirmed ? (
          <button
            className="final-confirm-btn"
            onClick={handleConfirmation}
          >
            Confirm Appointment
          </button>
        ) : (
          <button
            className="final-confirm-btn"
            onClick={() => navigate('/student-dashboard')}
          >
            Back to Student Dashboard
          </button>
        )}

      </div>
    </div>
  );
}

export default AppointmentConfirmation;
