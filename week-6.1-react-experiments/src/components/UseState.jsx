import { useState } from "react";
import Header from "./Header";

export default function HeaderWithButton() {
    let [number, setNumber] = useState("First header");
    function RandomNum() {
        setNumber(Math.random())
    }
    return (
        <>
            <Header title ={number}/>
            <button onClick={RandomNum}>Click to update</button>
        </>

    );
}