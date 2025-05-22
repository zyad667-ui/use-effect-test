import React, { useState } from 'react';
import loginUser from './loginApi';

const modalStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0,0,0,0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
};

const modalContentStyles = {
    background: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    minWidth: '320px',
    boxShadow: '0 2px 16px rgba(0,0,0,0.15)'
};

export default function LoginModal({ isOpen, onClose, onLoginSuccess }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [result, setResult] = useState(null);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setResult(null);
        try {
            const res = await loginUser(email, password);
            setResult(res);
            if (onLoginSuccess) onLoginSuccess(res);
        } catch (err) {
            setError(err.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={modalStyles} onClick={onClose}>
            <div style={modalContentStyles} onClick={e => e.stopPropagation()}>
                <button onClick={onClose} style={{ float: 'right', fontWeight: 'bold', background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer' }}>&times;</button>
                <h3>Login</h3>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" disabled={loading} style={{ padding: '0.5rem', fontWeight: 'bold' }}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                {error && <p style={{ color: 'red' }}>Error: {error}</p>}
                {result && (
                    <pre style={{ background: '#f6f6f6', padding: '1rem', borderRadius: '6px', marginTop: '1rem' }}>{result}</pre>
                )}
            </div>
        </div>
    );
} 