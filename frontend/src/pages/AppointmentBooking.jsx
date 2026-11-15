
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './AppointmentBooking.css';

function AppointmentBooking() {
  const location = useLocation();
  const navigate = useNavigate();

  const doctor = location.state?.doctor;

  const [appointmentDate, setAppointmentDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');

  const timeSlots = [
    '09:00 AM - 09:15 AM',
    '09:15 AM - 09:30 AM',
    '09:30 AM - 09:45 AM',
    '10:00 AM - 10:15 AM',
    '10:15 AM - 10:30 AM',
    '10:30 AM - 10:45 AM',
    '11:00 AM - 11:15 AM',
    '11:15 AM - 11:30 AM'
  ];

  const handleBooking = () => {
    if (!appointmentDate || !selectedSlot) {
      alert('Please select appointment date and time slot.');
      return;
    }

    navigate('/appointment-confirmation', {
      state: {
        doctor,
        appointmentDate,
        selectedSlot
      }
    });
  };

  if (!doctor) {
    return (
      <div className="booking-page">
        <h2>No doctor selected</h2>
        <button onClick={() => navigate('/student-doctors')}>
          Find a Doctor
        </button>
      </div>
    );
  }

  return (
    <div className="booking-page">
      <h1>Book Your Appointment</h1>
      <p>Select your preferred date and time slot.</p>

      <div className="booking-doctor-card">
        <h2>{doctor.name}</h2>
        <p>{doctor.specialty}</p>
        <p>{doctor.experience}</p>
      </div>

      <div className="booking-form">
        <label>Select Appointment Date</label>
        <input
          type="date"
          value={appointmentDate}
          onChange={(event) => setAppointmentDate(event.target.value)}
        />

        <h3>Available Time Slots</h3>

        <div className="time-slots">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              className={selectedSlot === slot ? 'selected' : ''}
              onClick={() => setSelectedSlot(slot)}
            >
              {slot}
            </button>
          ))}
        </div>

        <button className="confirm-booking-btn" onClick={handleBooking}>
          Continue to Confirmation
        </button>
      </div>
    </div>
  );
}

export default AppointmentBooking;
