import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const Modal = ({edit}) => {
    const navigation = useNavigate()
console.log(edit);
function submit(e){

    e.preventDefault()
    const users = {
        name: e.target[0].value,
        email: e.target[2].value,
        phone: e.target[4].value
    }
    if(users.name == '' || users.email == '' || users.phone == ''){
      toast.error('no input')
    }else{
        axios.put(`http://localhost:5000/posts/${edit.id}`,{lname:users.name,username:users.email,phone:users.phone}).then(res=>{
            console.log('success');
            toast.success('successfull')
            setTimeout(()=>{
                navigation('/')
            },3000)
            
           }).catch(err=>{
            console.log(err.message);
            
           })
    }

   console.log(users);
   console.log(edit.id);


}
  return (
    <Container>
        <ToastContainer /><br/>
        <Typography variant='h3' align='center'>Edit User</Typography>
        <Grid sx={{marginTop:10}}>
            <form onSubmit={submit}>
                <TextField fullWidth type={'text'}  placeholder='name' /><br/><br/>
                <TextField fullWidth type={'text'}  placeholder='email' /><br/><br/>
                <TextField fullWidth type={'text'}  placeholder='phone' /><br/><br/>
                <Button variant='contained' type='submit' fullWidth>edit</Button>
            </form>
        </Grid>
    </Container>
  )
}

export default Modal