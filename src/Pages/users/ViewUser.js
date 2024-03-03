import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ViewUser() {

    const [user,setUser]=useState({
        fname:"",
        lname:"",
        email:""
    });

    const {id}=useParams();

    useEffect(()=>{
        loadUser();
    },[]);

    const loadUser=async ()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    };

    return (
        <div className='container'>
            <div className='row mt-4'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2'>
                    <h2 className='text-center m-4'>User Details</h2>

                    <div className='card'>
                        <div className='card-header'>
                            Details of User id :{user.id}
                            
                            <ul className='List-group list-group-flush'>
                                
                                <li className='list-group-item mt-2 mb-2'>
                                    <b>First Name : </b> {user.fname}
                                </li>

                                <li className='list-group-item mt-2 mb-2'>
                                    <b>Last Name : </b>{user.lname}
                                </li>

                                <li className='list-group-item mt-2 mb-2'>
                                    <b>Email : </b>{user.email}
                                </li>
                            
                            </ul>
                        </div>
                    </div>
                    <Link className='btn btn-primary my-2' to={"/"}>Back to Home</Link>
                </div>
            </div>
        </div>
    );
}
