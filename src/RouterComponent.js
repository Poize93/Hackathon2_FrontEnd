import React from 'react';
import Login from './Login';
import Registration from './Registration'
import Homepage from './Homepage'
import Company from './Company'
import Tag from './Tag'
import Questions from './Questions'
import Profile from './Profile'

import {
    BrowserRouter,
    Routes, 
    Route,
    useNavigate,
    Link,
  } from 'react-router-dom';
import Button from '@mui/material/Button';


export default function RouterComponent(){
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/Registration" element={<Registration />}></Route>
            <Route path="/Homepage" element={<Homepage />}/>
            <Route  path="/Company" element={<Company />}/>
            <Route path="/Profile" element={<Profile />}/>
            <Route path="/Questions" element={<Questions />}/>
            <Route path="/Tag" element={<Tag />}/>
            </Routes>
            
        </BrowserRouter>
                
           
                
        
        
        

      </>  
      );
}



function App(){
    const navigate =useNavigate();
    return(
    
    <div>
        <div> <Button onClick={() => navigate('/login')}  variant="outlined">Log In</Button> </div>
        <div><Button onClick={() => navigate('/Registration')}  variant="outlined">Registration</Button></div>
        <div><Button onClick={() => navigate('/Homepage')}  variant="outlined">Homepage</Button></div>
        
    </div>
   )
    
}