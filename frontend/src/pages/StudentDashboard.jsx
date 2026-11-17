
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './StudentDashboard.css';

function StudentDashboard() {
    const [activeSection, setActiveSection] = useState('Dashboard');

    const navigate = useNavigate();

    // Temporary demo student data
    const student = {
        name: 'Demo Student',
        studentId: 'STU2026001',
        email: 'student@medconnect.com',
        department: 'Computer Science',
        year: '3rd Year',
    };

    function handleLogout() {
        const confirmLogout = window.confirm(
            'Are you sure you want to logout?'
        );

        if (confirmLogout) {
            navigate('/student-login');
        }
    }

    return (
        <div className="student-dashboard">

            {/* Sidebar */}
            <aside className="student-sidebar">

                <Link to="/" className="dashboard-brand">
                    Med<span>Connect</span>
                </Link>

                <div className="student-sidebar-profile">
                    <div className="student-avatar">
                        {student.name.charAt(0)}
                    </div>

                    <h3>{student.name}</h3>
                    <p>Student</p>
                </div>

                <nav className="student-sidebar-nav">

                    <button
                        className={activeSection === 'Dashboard' ? 'active' : ''}
                        onClick={() => setActiveSection('Dashboard')}
                    >
                        <span>⌂</span> Dashboard
                    </button>

                    <button
                        className={activeSection === 'Find Doctors' ? 'active' : ''}
                        onClick={() => navigate('/student-doctors')}
                    >
                        <span>⚕</span> Find Doctors
                    </button>

                    <button
                        className={activeSection === 'My Appointments' ? 'active' : ''}
                        onClick={() => navigate('/my-appointments')}
                    >
                        <span>▣</span> My Appointments
                    </button>

                    <button
                        className={activeSection === 'My Profile' ? 'active' : ''}
                        onClick={() => setActiveSection('My Profile')}
                    >
                        <span>◉</span> My Profile
                    </button>

                </nav>

                <button
                    className="student-logout-button"
                    onClick={handleLogout}
                >
                    ↪ Logout
                </button>

            </aside>

            {/* Main Content */}
            <main className="student-dashboard-main">

                <header className="student-dashboard-header">
                    <div>
                        <h1>{activeSection}</h1>
                        <p>MedConnect / {activeSection}</p>
                    </div>

                    <div className="dashboard-header-user">
                        <div className="header-user-avatar">
                            {student.name.charAt(0)}
                        </div>

                        <div>
                            <h4>{student.name}</h4>
                            <p>Student Account</p>
                        </div>
                    </div>
                </header>

                {activeSection === 'Dashboard' && (
                    <section className="student-dashboard-content">

                        <div className="student-welcome-card">
                            <div>
                                <p>WELCOME BACK!</p>
                                <h2>Hello, {student.name} 👋</h2>
                                <span>
                                    Manage your health and appointments with MedConnect.
                                </span>
                            </div>

                            <div className="welcome-medical-icon">✚</div>
                        </div>

                        <h2 className="dashboard-section-title">
                            Dashboard Overview
                        </h2>

                        <div className="student-stats-grid">

                            <div className="student-stat-card">
                                <div className="stat-icon blue">▣</div>
                                <div>
                                    <p>Total Appointments</p>
                                    <h2>0</h2>
                                </div>
                            </div>

                            <div className="student-stat-card">
                                <div className="stat-icon green">✓</div>
                                <div>
                                    <p>Completed Appointments</p>
                                    <h2>0</h2>
                                </div>
                            </div>

                            <div className="student-stat-card">
                                <div className="stat-icon orange">◷</div>
                                <div>
                                    <p>Upcoming Appointments</p>
                                    <h2>0</h2>
                                </div>
                            </div>

                        </div>

                        <div className="student-dashboard-bottom">

                            <div className="student-quick-card">
                                <h3>Quick Actions</h3>
                                <p>What would you like to do today?</p>

                                <button
                                    onClick={() => navigate('/student-doctors')}
                                >
                                    ⚕ Find a Doctor →
                                </button>

                                <button
                                    onClick={() => navigate('/my-appointments')}
                                >
                                    ▣ View My Appointments →
                                </button>
                            </div>

                            <div className="student-info-card">
                                <h3>Student Information</h3>

                                <p><strong>Student ID:</strong> {student.studentId}</p>
                                <p><strong>Email:</strong> {student.email}</p>
                                <p><strong>Department:</strong> {student.department}</p>
                                <p><strong>Year:</strong> {student.year}</p>
                            </div>

                        </div>

                    </section>
                )}

                {activeSection === 'Find Doctors' && (
                    <section className="student-placeholder-section">
                        <h2>Find Doctors</h2>
                        <p>Doctor selection feature will be added in the next step.</p>
                    </section>
                )}

                {activeSection === 'My Profile' && (
                    <section className="student-placeholder-section">
                        <h2>My Profile</h2>
                        <p>Student profile details will be added here.</p>
                    </section>
                )}

            </main>

        </div>
    );
}

export default StudentDashboard;
