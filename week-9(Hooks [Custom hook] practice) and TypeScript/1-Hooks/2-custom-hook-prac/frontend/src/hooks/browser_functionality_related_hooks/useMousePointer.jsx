import { useEffect, useState } from "react"

export const useMousePointer =()=>{
    const [position,setPosition]=useState({x:0,y:0});
    const handleMouseMove = (event) => {
        setPosition({x:event.clientX,y:event.clientY});
    }
    useEffect(()=>{
        window.addEventListener('mousemove',handleMouseMove);
        return ()=>{
            window.removeEventListener('mousemove',handleMouseMove);
        }
    },[]);
    return position;
};