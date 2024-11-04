import axios from "axios";
import { useEffect, useState } from "react";

export function useTodos(n){
    const [todos,setTodos]=useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
      const value = setInterval(()=>{
        axios.get("http://localhost:3000/todos")
        .then(res=>{ 
          setTodos(res.data.todos);
          setLoading(false);
        })
      },n*1000)
      axios.get("http://localhost:3000/todos")
        .then(res=>{ 
          setTodos(res.data.todos);
          setLoading(false);
        })
        return ()=>{
          clearInterval(value);
        }
    },[n]);
    return {todos,loading};
}