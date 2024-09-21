import axios from "axios";
import { useEffect, useState } from "react";

function useHook(){
    const [todo,setTodo]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/todos')
        .then((res)=>{
            setTodo(res.data.todo);
        })
    },[])
    return todo
}
export default useHook; 