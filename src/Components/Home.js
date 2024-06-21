import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div>
            <nav className="navbar">
                <div className="logo">EventX</div>
                <div className="menu">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </nav>

            <div className="hero">
                <h1>Welcome to PSG's Event Management Portal!!</h1>
                <p className="description">
                    Discover the excitement of college events at PSG. Our event management portal provides a
                    comprehensive guide to all the upcoming events organized by various departments. Whether you're a student,
                    faculty member, or guest, you'll find everything you need to know right here.
                </p>
                <div className="cta-buttons">
                    <Link to="/login" className="button">Login <span className="arrow">→</span></Link>
                    <Link to="/register" className="button">Register now <span className="arrow">→</span></Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
