import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [render,setRender]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setRender(false);
    },10000);
  },[])
  return (
    <div>
      {/* <MyComponent/> */}
      {render==true?<MyComponent/>:<div>Khaali hai</div>}
    </div>
  )
}
//1:- useState
// function MyComponent(){
//   const [count,setCount]=useState(0);
//   const incrementCount=()=>{
//     setCount(count+1);
//   }
//   return(
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={incrementCount}>Click</button>
//     </div>
//   );
// }

//2:- useEffect    (side effect)
function MyComponent(){
  useEffect(()=>{
    console.log("component mounted");
    return ()=>{
      console.log("component unmounted");
    }
  },[]);
  return <div>From inside my component...</div>
}

export default App
