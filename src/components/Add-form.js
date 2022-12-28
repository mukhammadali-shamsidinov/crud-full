import React, { useState } from 'react';
import {Typography,Box,TextField, Grid, Button} from "@mui/material";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
function AddForm(props) {
    const [user,setUser] = useState('')
    const [email,setEmail] = useState('')
    const [number,setNumber] = useState('')
    const navigate = useNavigate()

    const handlerSbmit = () => {
        if(user === '' || email === '' || number === Number()){
            toast.error('no input')
        }else{
            axios.post('http://localhost:5000/posts',{lname:user,phone:`+${number}`,fname:number,username:email,avatar:'https://www.melivecode.com/users/1.png'})
            .then(res=>{
                setTimeout(() => {
                    navigate('/')
                }, 5000);
                toast.success('success')    
                console.log('success');
            })
        }

    }
    return (
        <div>
            <ToastContainer />
            <Grid spacing={3}>
                <Grid item container sx={{width:500}} margin={'20px auto'}>
                <TextField value={user} onChange={e=>setUser(e.target.value)}  fullWidth label="user" id="fullWidth" />
                </Grid>
                <Grid item container sx={{width:500}} margin={'20px auto'}>
                <TextField value={email} onChange={e=>setEmail(e.target.value)} fullWidth label="email" id="fullWidth" />
                </Grid>
                <Grid item container sx={{width:500}} margin={'20px auto'}>
                <TextField value={number} onChange={e=>setNumber(e.target.value)} type={'number'} fullWidth label="phone" id="fullWidth" />
                </Grid>
                <Grid item container sx={{width:500}} margin={'20px auto'}>
                <Button onClick={handlerSbmit} type='submit' variant='contained' fullWidth>save</Button>
                </Grid>

            </Grid>
         

        </div>
    );
}

export default AddForm;