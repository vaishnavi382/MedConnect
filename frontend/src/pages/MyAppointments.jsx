
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyAppointments.css';

function MyAppointments() {
    const navigate = useNavigate();

    const [appointments, setAppointments] = useState([]);

    // Load appointments from localStorage
    useEffect(() => {
        const savedAppointments = JSON.parse(
            localStorage.getItem('appointments') || '[]'
        );

        setAppointments(savedAppointments);
    }, []);

    // Format appointment date
    const formatDate = (date) => {
        return new Date(date + 'T00:00:00').toLocaleDateString(
            'en-IN',
            {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            }
        );
    };

    return (
        <div className="my-appointments-page">

            <h1>My Appointments</h1>
            <p>View and manage your medical appointments.</p>

            {appointments.length === 0 ? (
                <div className="no-appointments">
                    <div className="empty-icon">📅</div>

                    <h2>No Appointments Yet</h2>

                    <p>
                        You have not booked any appointments yet.
                        Find a doctor and book your first appointment.
                    </p>

                    <button onClick={() => navigate('/student-doctors')}>
                        Find a Doctor
                    </button>
                </div>
            ) : (
                <div className="appointments-list">

                    {appointments.map((appointment) => (
                        <div
                            className="appointment-card"
                            key={appointment.appointmentId}
                        >

                            <div className="appointment-card-header">
                                <div>
                                    <h2>{appointment.doctorName}</h2>
                                    <p>{appointment.specialty}</p>
                                </div>

                                <span className="appointment-status">
                                    {appointment.status}
                                </span>
                            </div>

                            <div className="appointment-card-details">

                                <div>
                                    <span>Appointment Date</span>
                                    <strong>
                                        {formatDate(appointment.appointmentDate)}
                                    </strong>
                                </div>

                                <div>
                                    <span>Time Slot</span>
                                    <strong>{appointment.selectedSlot}</strong>
                                </div>

                                <div>
                                    <span>Appointment ID</span>
                                    <strong>{appointment.appointmentId}</strong>
                                </div>

                                <div>
                                    <span>Token Number</span>
                                    <strong>{appointment.tokenNumber}</strong>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>
            )}

        </div>
    );
}

export default MyAppointments;
