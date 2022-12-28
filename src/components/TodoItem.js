import { Table, TableContainer, TableHead, TableRow, TableCell, Button,TableBody, Avatar, Typography } from '@mui/material';
import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import ModeIcon from '@mui/icons-material/Mode';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
function TodoItem({posts,editItem}) {
const [toggle,setToggle] = useState(true)
    function deleteItem(id){
        axios.delete(`http://localhost:5000/posts/${id}`).then(res=>{
            console.log(res.status);
        })
    }
    return (
        <div>
            <TableContainer component={Paper} sx={{width:750,margin:'50px auto'}}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                        <TableCell>Avatar</TableCell>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">user</TableCell>
                            <TableCell align="right">email</TableCell>
                            <TableCell align="right">phone</TableCell>
                            <TableCell align="right">action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
            {
                toggle ?   posts.length && posts.map((item,idx)=>(
                    <TableRow
                      key={idx+1}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                                    <TableCell component="th" scope="row">
                   <Avatar src={`https://placeimg.com/640/480/animals/grayscale${idx+1}`} />
                    </TableCell>
                    <TableCell component="th" scope="row">
                    {idx+1}
                    </TableCell>
                    <TableCell align="right">{item.lname}</TableCell>
                    <TableCell align="right">{item.username}</TableCell>
                    <TableCell align="right">{item.phone}</TableCell>
                    <TableCell align="right">
                      <Button variant='outlined' color='primary' onClick={()=>editItem(item.id,item.lname,item.username,item.phone)}>
                      <ModeIcon />
                      </Button>&nbsp;
                      <Button onClick={()=>deleteItem(item.id)} variant='outlined' color='error'>
                          <DeleteIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
           : <Typography variant='h5' fullWidth align='justify' color={'purple'}>Not Users</Typography> }
        

        </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
}

export default TodoItem;