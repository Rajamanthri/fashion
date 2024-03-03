import React, { useState } from 'react';
import axios from 'axios';

const UserRegistrationComponent = () => {
    const [user, setUser] = useState({ username: '', email: '', password: '' });

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/users/register', user);
            console.log(response.data); 
        } catch (error) {
            console.error(error); 
        }
    };

    return (
        <div>
            <h2>User Registration</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default UserRegistrationComponent;

