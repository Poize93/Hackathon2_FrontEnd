import React from 'react';
import Button from '@mui/material/Button';
import './Homepage.css';
import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate,
    Link,
  } from 'react-router-dom';


export default function Homepage(){
    const navigate=useNavigate();
    return(
        <>
        
        <h3> Welcome to the HomePage</h3>
        <div className="homeNavigate">
        <div><Button  onClick={() => navigate("/profile")} variant="outlined">User Profile</Button></div>
        <div><Button  onClick={() => navigate("/questions")} variant="outlined">Questions</Button></div>
        <div><Button  onClick={() => navigate("/company")} variant="outlined">Company</Button></div>
        <div><Button  onClick={() => navigate("/Tag")} variant="outlined">Tag</Button></div>
        </div>
        
        
        </>
    )
}

