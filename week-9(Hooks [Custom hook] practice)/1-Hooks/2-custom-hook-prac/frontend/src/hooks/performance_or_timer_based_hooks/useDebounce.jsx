import { useState, useEffect } from "react";

const useDebounce=(value,delay)=>{
    const [debounceValue,setDebounceValue]=useState(value);
    useEffect(()=>{
        const timerId= setTimeout(()=>{
            setDebounceValue(value)
        },delay);
        return ()=>clearTimeout(timerId)
    },[value,delay]);
    return debounceValue;
}
export default useDebounce;

/*
useDebounce Hook
Purpose: Delays the execution of a function or updates a value only after a set period of inactivity, helping to prevent excessive function calls.
Usage in Search Bars: In search inputs like Amazon's, useDebounce waits for the user to stop typing (e.g., 300-500 ms) before triggering a search API request.
Benefits: Improves performance by reducing API calls, minimizes server load, and enhances user experience with a smoother and more responsive interface.
*/