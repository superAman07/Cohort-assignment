/* eslint-disable no-unused-vars */
// import React from 'react';
import { useState } from 'react';
import './CreateTodo.css';

const CreateTodo = () => {
    const [title,setTitle]=useState("");         //instead of using document.getElement...(DOM) we use react hook
    const [description,setDescription]=useState("");  
        return (
        <div className="create-todo-container">
            <input
                id='title'
                type="text"
                placeholder="title"
                className="create-todo-input"
                onChange={(e)=>{
                    const value = e.target.value;
                    setTitle(value);
                }}
            />
            <input
                id='desc'
                type="text"
                placeholder="description"
                className="create-todo-input"
                onChange={(e)=>{
                    const value = e.target.value;
                    setDescription(value);
                }}
            />
            <button className="create-todo-button" onClick={()=>{
                fetch("http://localhost:3000/todo",{
                    method:"POST",
                    body:JSON.stringify({    // stringify is important because fetch doesn't tell backend ki this is json data app.use(express.jason()) checks the header  thats why we do in next line a header object of Content-Type key and application/json value...
                        title:title,
                        description:description
                    }),
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
                .then(async function(res){
                    const json =await res.json();
                    alert("Todo added!")
                })
            }}>
                Add a Todo
            </button>
        </div>
    );
};

export default CreateTodo;
