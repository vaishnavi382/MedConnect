
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './AppointmentBooking.css';

function AppointmentBooking() {
    const location = useLocation();
    const navigate = useNavigate();

    const doctor = location.state?.doctor;

    const [appointmentDate, setAppointmentDate] = useState('');
    const [selectedSlot, setSelectedSlot] = useState('');

    // All available demo time slots
    const timeSlots = [
        '09:00 AM - 09:15 AM',
        '09:15 AM - 09:30 AM',
        '09:30 AM - 09:45 AM',
        '10:00 AM - 10:15 AM',
        '10:15 AM - 10:30 AM',
        '10:30 AM - 10:45 AM',
        '11:00 AM - 11:15 AM',
        '11:15 AM - 11:30 AM',
        '12:00 PM - 12:15 PM',
        '12:15 PM - 12:30 PM',
        '12:30 PM - 12:45 PM',
        '01:00 PM - 01:15 PM',
        '01:15 PM - 01:30 PM',
        '01:30 PM - 01:45 PM',
        '02:00 PM - 02:15 PM',
        '02:15 PM - 02:30 PM',
        '02:30 PM - 02:45 PM',
        '03:00 PM - 03:15 PM',
        '03:15 PM - 03:30 PM',
        '03:30 PM - 03:45 PM',
        '04:00 PM - 04:15 PM',
        '04:15 PM - 04:30 PM',
        '04:30 PM - 04:45 PM'
    ];

    // Check whether a slot has already passed
    const isSlotPast = (slot) => {
        if (!appointmentDate) return false;

        const startTime = slot.split(' - ')[0];
        const [time, period] = startTime.split(' ');
        let [hours, minutes] = time.split(':').map(Number);

        if (period === 'PM' && hours !== 12) {
            hours += 12;
        }

        if (period === 'AM' && hours === 12) {
            hours = 0;
        }

        const slotDateTime = new Date(
            `${appointmentDate}T${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00`
        );

        return slotDateTime <= new Date();
    };

    // Convert time into minutes for comparison
    const convertToMinutes = (timeString) => {
        const [time, period] = timeString.split(' ');
        let [hours, minutes] = time.split(':').map(Number);

        if (period === 'PM' && hours !== 12) {
            hours += 12;
        }

        if (period === 'AM' && hours === 12) {
            hours = 0;
        }

        return hours * 60 + minutes;
    };

    // Check whether the slot falls within doctor's consultation hours
    const isWithinDoctorHours = (slot) => {
        const [doctorStart, doctorEnd] = doctor.hours.split(' - ');
        const [slotStart, slotEnd] = slot.split(' - ');

        return (
            convertToMinutes(slotStart) >= convertToMinutes(doctorStart) &&
            convertToMinutes(slotEnd) <= convertToMinutes(doctorEnd)
        );
    };
    const isDoctorAvailableOnDate = (date) => {
        const selectedDay = new Date(`${date}T00:00:00`).toLocaleDateString(
            'en-US',
            { weekday: 'long' }
        );

        const [startDay, endDay] = doctor.days.split(' - ');

        const weekdays = [
            'Sunday', 'Monday', 'Tuesday', 'Wednesday',
            'Thursday', 'Friday', 'Saturday'
        ];

        const startIndex = weekdays.indexOf(startDay);
        const endIndex = weekdays.indexOf(endDay);
        const selectedIndex = weekdays.indexOf(selectedDay);

        if (startIndex <= endIndex) {
            return selectedIndex >= startIndex && selectedIndex <= endIndex;
        }

        return selectedIndex >= startIndex || selectedIndex <= endIndex;
    };

    const handleBooking = () => {
    if (!appointmentDate || !selectedSlot) {
        alert('Please select appointment date and time slot.');
        return;
    }

    if (!isDoctorAvailableOnDate(appointmentDate)) {
        alert(`Doctor is not available on this day. Available days: ${doctor.days}`);
        return;
    }

    if (!isWithinDoctorHours(selectedSlot)) {
        alert('Please select a slot within doctor consultation hours.');
        return;
    }

    if (isSlotPast(selectedSlot)) {
        alert('Please select a future time slot.');
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
                <p>Consultation Hours: {doctor.hours}</p>
            </div>

            <div className="booking-form">
                <label>Select Appointment Date</label>

                <input
                    type="date"
                    min={new Date().toLocaleDateString('en-CA')}
                    value={appointmentDate}
                    onKeyDown={(event) => event.preventDefault()}
                    onPaste={(event) => event.preventDefault()}
                    onChange={(event) => {
                        const selectedDate = event.target.value;

                        if (!selectedDate) {
                            setAppointmentDate('');
                            setSelectedSlot('');
                            return;
                        }

                        if (!isDoctorAvailableOnDate(selectedDate)) {
                            alert(`Doctor is not available on this day. Available days: ${doctor.days}`);
                            setAppointmentDate('');
                            setSelectedSlot('');
                            return;
                        }

                        setAppointmentDate(selectedDate);
                        setSelectedSlot('');
                    }}
                />

                <h3>Available Time Slots</h3>

                <div className="time-slots">
                    {timeSlots.filter(isWithinDoctorHours).map((slot) => {
                        const pastSlot = isSlotPast(slot);

                        return (
                            <button
                                key={slot}
                                disabled={pastSlot}
                                className={`${selectedSlot === slot ? 'selected' : ''} ${pastSlot ? 'disabled-slot' : ''
                                    }`}
                                onClick={() => setSelectedSlot(slot)}
                            >
                                {slot}
                                {pastSlot && ' (Unavailable)'}
                            </button>
                        );
                    })}
                </div>

                <button
                    className="confirm-booking-btn"
                    onClick={handleBooking}
                >
                    Continue to Confirmation
                </button>
            </div>
        </div>
    );
}

export default AppointmentBooking;
