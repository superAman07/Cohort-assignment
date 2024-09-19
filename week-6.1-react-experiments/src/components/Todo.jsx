import { useState } from "react";

function Todo(){
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [todo,setTodo]=useState([]);
    function addItem(){
        setTodo([...todo,{title,description}]);
        setTitle("");
        setDescription(""); 
    }
    return (
        <div>
            <input placeholder="Title" onChange={(e)=>{
                const res=e.target.value;
                setTitle(res);
            }}/>
            <input placeholder="Description" onChange={(e)=>{
                const res=e.target.value;
                setDescription(res);
            }}/>
            <button onClick={addItem}>Click to add</button>
            <div> 
                {todo.map((value,key)=>(
                    <div key={key}>
                    <b>{value.title}</b>:{value.description}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Todo;