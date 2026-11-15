
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard() {
    const navigate = useNavigate();

    return (
        <div className="admin-dashboard">

            {/* Sidebar */}
            <aside className="admin-sidebar">
                <h2>MedConnect</h2>
                <p className="admin-label">ADMIN PANEL</p>

                <nav>
                    <button className="admin-nav active">
                        Dashboard
                    </button>

                    <button
                        className="admin-nav"
                        onClick={() => navigate('/admin-doctors')}
                    >
                        Manage Doctors
                    </button>

                    <button
                        className="admin-nav"
                        onClick={() => navigate('/admin-students')}
                    >
                        Manage Students
                    </button>

                    <button
                        className="admin-nav"
                        onClick={() => navigate('/admin-appointments')}
                    >
                        Manage Appointments
                    </button>
                </nav>

                <button
    className="admin-logout"
    onClick={() => {
        localStorage.removeItem('adminLoggedIn');
        navigate('/admin-login');
    }}
>
    Logout
</button>
            </aside>

            {/* Main Content */}
            <main className="admin-main">

                <div className="admin-header">
                    <div>
                        <h1>Admin Dashboard</h1>
                        <p>Welcome to the MedConnect Admin Panel.</p>
                    </div>

                    <div className="admin-profile">
                        <span>👤</span>
                        <strong>Administrator</strong>
                    </div>
                </div>

                {/* Statistics */}
                <section className="admin-stats">

                    <div className="admin-stat-card">
                        <span>🎓</span>
                        <h3>Total Students</h3>
                        <h2>120</h2>
                    </div>

                    <div className="admin-stat-card">
                        <span>👨‍⚕️</span>
                        <h3>Total Doctors</h3>
                        <h2>15</h2>
                    </div>

                    <div className="admin-stat-card">
                        <span>📅</span>
                        <h3>Total Appointments</h3>
                        <h2>85</h2>
                    </div>

                    <div className="admin-stat-card">
                        <span>⏳</span>
                        <h3>Pending Appointments</h3>
                        <h2>12</h2>
                    </div>

                </section>

                {/* Management Sections */}
                <section className="admin-management">

                    <h2>Management</h2>

                    <div className="admin-management-grid">

                        <div className="admin-management-card">
                            <span>👨‍⚕️</span>
                            <h3>Doctor Management</h3>
                            <p>Add, view and manage doctors.</p>
                            <button onClick={() => navigate('/admin-doctors')}>
                                Manage Doctors
                            </button>
                        </div>

                        <div className="admin-management-card">
                            <span>🎓</span>
                            <h3>Student Management</h3>
                            <p>View and manage registered students.</p>
                            <button onClick={() => navigate('/admin-students')}>
                                Manage Students
                            </button>
                        </div>

                        <div className="admin-management-card">
                            <span>📋</span>
                            <h3>Appointment Management</h3>
                            <p>View and manage appointments.</p>
                            <button onClick={() => navigate('/admin-appointments')}>
                                Manage Appointments
                            </button>
                        </div>

                    </div>

                </section>

            </main>
        </div>
    );
}

export default AdminDashboard;
