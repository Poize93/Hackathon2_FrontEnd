import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';




export default function Login(){




    const handleSubmit=async(e)=>{
        e.preventDefault();
       
        
    }
   return(
        <>
        <h3> Log In Page</h3>
        <form onSubmit={handleSubmit}>
        <div><TextField id="standard-basic" label="User Name" variant="standard" /></div><br/><br/>
        <div><TextField id="standard-basic" type="password" label="Password" variant="standard" /></div><br/><br/>
        <Button type="submit"  variant="outlined">Log In</Button>
        </form>
        </>
    )
}


