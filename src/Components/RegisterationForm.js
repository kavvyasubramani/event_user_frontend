import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationForm.css'; // Import your custom CSS file here

function RegistrationForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        department: '',
        year: ''
    });

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
              const response = await fetch('http://localhost:5000/register', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(formData)
              });
      
              if (response.ok) {
                  const data = await response.json();
                  console.log(data); // Check response from the server
                  // Redirect or show success message as needed
              } else {
                  console.error('Registration failed');
                  // Handle error cases
              }
          } catch (error) {
              console.error('Error during registration:', error);
              // Handle network or other errors
          }
      };
      

    return (
        <div className="container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Name:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
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

                <label htmlFor="department">Department:</label>
                <input
                    type="text"
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="year">Year of Study:</label>
                <input
                    type="text"
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    required
                />

                <input type="submit" value="Register" />
            </form>
            <p>
                Already have an account? <a href="/login">Login</a>
            </p>
        </div>
    );
}

export default RegistrationForm;
