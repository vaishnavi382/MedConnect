
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

function AdminLogin() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        if (
            email === 'admin@medconnect.com' &&
            password === 'admin123'
        ) {
            localStorage.setItem('adminLoggedIn', 'true');
            navigate('/admin-dashboard');
        } else {
            setError('Invalid email or password!');
        }
    };

    return (
        <div className="admin-login-page">

            <div className="admin-login-card">

                <div className="admin-login-icon">✚</div>

                <h1>Admin Login</h1>
                <p>Sign in to access the MedConnect Admin Panel.</p>

                <form onSubmit={handleLogin}>

                    <label>Email Address</label>
                    <input
                        type="email"
                        placeholder="Enter admin email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    {error && (
                        <p className="admin-login-error">{error}</p>
                    )}

                    <button type="submit">
                        Login to Dashboard
                    </button>

                </form>

                <button
                    className="admin-back-btn"
                    onClick={() => navigate('/')}
                >
                    Back to Home
                </button>

            </div>

        </div>
    );
}

export default AdminLogin;
