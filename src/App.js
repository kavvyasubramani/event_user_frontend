import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import RegistrationForm from './Components/RegisterationForm';
import Login from './Components/login';
import './App.css';  // Include any global styles if needed

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<RegistrationForm />} />
                    <Route path="/login" element={<Login />} />
                    {/* Add other routes here */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
