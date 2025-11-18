import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './LoginForm.css';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        const success = login(email, password);
        if (!success) {
            setError('Invalid email or password');
        }
    };

    const handleDemoLogin = () => {
        setEmail('parent@saplingdemo.com');
        setPassword('sapling321!');
    };

    const handleEducatorLogin = () => {
        setEmail('educator@saplingdemo.com');
        setPassword('sapling123!');
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h1>🌱 Sapling</h1>
                    <p>Parent Portal Demo</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="parent@saplingdemo.com"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="sapling321!"
                            required
                        />
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button type="submit" className="btn-primary">
                        Log In
                    </button>

                    <button
                        type="button"
                        onClick={handleDemoLogin}
                        className="btn-secondary"
                    >
                        Use Demo Credentials
                    </button>
                    <button
                        type="button"
                        onClick={handleEducatorLogin}
                        className="btn-secondary"
                    >
                        Educator Demo Login
                    </button>
                </form>

                <div className="demo-info">
                    <p><strong>Demo Credentials:</strong></p>
                    <p><strong>Parent:</strong> parent@saplingdemo.com / sapling321!</p>
                    <p><strong>Educator:</strong> educator@saplingdemo.com / sapling123!</p>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;