import React, { useEffect, useState } from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import AddForm from "./components/Add-form";
import Navbar from "./components/Navbar";
import TodoItem from "./components/TodoItem";
import Error from './components/Error';
import axios from 'axios';
import Modal from './components/Modal';
function App(props) {
    const navigate = useNavigate()
    const [posts,setPosts] = useState([])
    const [edit,setEdit] = useState([])
    function editItem(id,lname,username,phone){
       axios.put(`http://localhost:5000/posts/${id}`,{id,lname,username,phone})
       .then(res=>{
        navigate('/edit')
        console.log(res.data);
        setEdit(res.data)
        console.log(edit);
       })
    }
    useEffect(()=>{
        axios({
            method:'get',
            url:'http://localhost:5000/posts'
        }).then(res=>{
            setPosts(res.data)
        })
    },[posts])
    return (
        <div>
           
            <Routes>
                <Route path='/' element={<>
                    <Navbar />
                    <TodoItem posts={posts} editItem={editItem} />
                </>} />
                <Route path={'/Form'} element={<>
                    <Navbar />
                    <AddForm />
                    </>} />
                    <Route path='/edit' element={<Modal edit={edit} />} />
                <Route path={'*'} element={<Error />} />
            </Routes>
        </div>
    );
}

export default App;