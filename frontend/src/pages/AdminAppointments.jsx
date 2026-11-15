
import { useState } from 'react';
import './AdminAppointments.css';

function AdminAppointments() {
    const [appointments, setAppointments] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('appointments')) || [];
        } catch {
            return [];
        }
    });

    const [searchTerm, setSearchTerm] = useState('');

    const filteredAppointments = appointments.filter((appointment) =>
        `${appointment.appointmentId || ''} ${appointment.doctorName || ''} ${appointment.specialty || ''} ${appointment.status || ''}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    const handleCancel = (appointmentId) => {
        const confirmCancel = window.confirm(
            'Are you sure you want to cancel this appointment?'
        );

        if (!confirmCancel) return;

        const updatedAppointments = appointments.map((appointment) =>
            appointment.appointmentId === appointmentId
                ? { ...appointment, status: 'Cancelled' }
                : appointment
        );

        setAppointments(updatedAppointments);
        localStorage.setItem(
            'appointments',
            JSON.stringify(updatedAppointments)
        );
    };

    return (
        <div className="admin-appointments-page">

            <div className="admin-appointments-header">
                <div>
                    <h1>Appointment Management</h1>
                    <p>View and manage student appointments.</p>
                </div>
            </div>

            <div className="appointments-count">
                <div>
                    <h3>{appointments.length}</h3>
                    <p>Total Appointments</p>
                </div>
                <div>
                    <h3>
                        {appointments.filter(
                            (appointment) => appointment.status === 'Confirmed'
                        ).length}
                    </h3>
                    <p>Confirmed</p>
                </div>
                <div>
                    <h3>
                        {appointments.filter(
                            (appointment) => appointment.status === 'Cancelled'
                        ).length}
                    </h3>
                    <p>Cancelled</p>
                </div>
            </div>

            <div className="appointment-search">
                <input
                    type="text"
                    placeholder="Search by doctor, appointment ID or status..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="admin-appointments-list">
                {filteredAppointments.length > 0 ? (
                    filteredAppointments.map((appointment, index) => (
                        <div
                            className="admin-appointment-card"
                            key={appointment.appointmentId || index}
                        >
                            <div className="appointment-card-header">
                                <div>
                                    <h3>{appointment.doctorName}</h3>
                                    <p>{appointment.specialty}</p>
                                </div>

                                <span className={`appointment-status ${
                                    appointment.status === 'Cancelled'
                                        ? 'cancelled'
                                        : 'confirmed'
                                }`}>
                                    {appointment.status || 'Unknown'}
                                </span>
                            </div>

                            <div className="appointment-details">
                                <p>
                                    <strong>Appointment ID:</strong>{' '}
                                    {appointment.appointmentId || 'N/A'}
                                </p>
                                <p>
                                    <strong>Date:</strong>{' '}
                                    {appointment.appointmentDate || 'N/A'}
                                </p>
                                <p>
                                    <strong>Time:</strong>{' '}
                                    {appointment.selectedSlot || 'N/A'}
                                </p>
                                <p>
                                    <strong>Token Number:</strong>{' '}
                                    {appointment.tokenNumber || 'N/A'}
                                </p>
                            </div>

                            {appointment.status !== 'Cancelled' && (
                                <button
                                    className="cancel-appointment-btn"
                                    onClick={() =>
                                        handleCancel(appointment.appointmentId)
                                    }
                                >
                                    Cancel Appointment
                                </button>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="no-appointments">
                        No appointments found.
                    </p>
                )}
            </div>

        </div>
    );
}

export default AdminAppointments;
