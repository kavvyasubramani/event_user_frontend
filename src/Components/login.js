import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Import your custom CSS file here

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/login', formData);
            if (response.status === 200) {
                window.location.href = '/home'; // Redirect to home page after successful login
            } else {
                setError('Invalid email or password. Please try again.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('Error during login. Please try again later.');
        }
    };

    return (
        <div className="container">
            <h1>Login</h1>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default Login;
