import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Login from './Login'
import useNavigation from  'react-router-dom';
import axios from 'axios';


export default function Registration(){
    
    return(
        <>
        <h3> Registration Page</h3>
        <form onSubmit={handleSubmit}>
        <div><TextField id="standard-basic" label="User Name" variant="standard" /></div><br/><br/>
        <div><TextField id="standard-basic" type="password" label="Password" variant="standard" /></div><br/><br/>
        <Button type="submit"  variant="outlined">Register</Button>
        </form>
        </>
    )
}

const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(e.target[0].value,"UserName")
    console.log(e.target[1].value,"Password")
    try{
        var response=await axios.post("mongodb://localhost:27017",{
            userName:e.target[0].value,
            password:e.target[1].value
        })
        console.log(response)
    }catch(err){
        console.log(err)
    }
    
}

