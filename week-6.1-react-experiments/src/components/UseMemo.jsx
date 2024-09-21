//we can also make it using usesEffect (but still not that optimal)
import { useMemo, useState } from "react";

const UseMemo = function() {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState(1);
    let count = useMemo(()=>{
        let temp=0;
        for(let i=1;i<=inputValue;i++){
           temp+=i;
        }
        return temp;
    },[inputValue]);

    return (
        <div>
            <h1>2: useMemo example</h1>
            <input onChange={(e) => setInputValue(Number(e.target.value))} placeholder="Find sum from 1 to n"/>
            <p>Sum from 1 to {inputValue} is {count} </p> 
            <button onClick={()=>{setCounter(counter+1)}}>Counter {counter}</button>
        </div>
    );
}

export default UseMemo;
