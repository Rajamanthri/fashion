// import React from 'react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddUser() {

    let navigate=useNavigate()

    const [user, setUser] = useState({
        fname: "",
        lname: "",
        email: ""
    });

    const { fname, lname, email } = user

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit =async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user);
        navigate("/");
    };

    return (
        <div className='container'>
            <div className='row mt-4'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2'>
                    <h2 className='text-center m-4'>Register User</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='Name' className='form-label'>First Name</label>
                            <input type={"text"} className='form-control' placeholder='Enter First Name' name='fname' value={fname} onChange={(e) => onInputChange(e)}></input>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Username' className='form-label'>Last Name</label>
                            <input type={"text"} className='form-control' placeholder='Enter Last Name' name='lname' value={lname} onChange={(e) => onInputChange(e)}></input>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Email' className='form-label'>Email</label>
                            <input type={"text"} className='form-control' placeholder='Enter Email' name='email' value={email} onChange={(e) => onInputChange(e)}></input>
                        </div>
                        <button type='submit' className='btn btn-outline-primary'>Submit</button>
                        <Link type='submit' className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
                    </form>
                </div>

            </div>

        </div>
    )
}
