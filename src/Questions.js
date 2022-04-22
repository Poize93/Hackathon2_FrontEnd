import React,{useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function Questions(){
    // useEffect(async()=>{
    //         try{
    //         var response=await axios.get("mongodb://localhost:27017/questions")
    //         console.log(response.data)
    //     }catch(err){
    //         console.log(err)
    //     }
        
    // },[]);
    return(
        <>
         
        <h3>Ask Questions</h3>
        <TextField fullWidth label="Your Query" id="fullWidth" /> <br/><br/>
        <Button type="submit"  variant="outlined">Ask..</Button> <br/><br/>
        <h4>Questions</h4>
        </>
    )
}