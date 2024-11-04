import { useEffect, useState } from 'react';
import './App.css'
import { useMousePointer } from './hooks/browser_functionality_related_hooks/useMousePointer'
import useInterval from './hooks/performance_or_timer_based_hooks/useInterval';
import useDebounce from './hooks/performance_or_timer_based_hooks/useDebounce';
// import useIsOnline from './hooks/useIsOnline'
// import { useTodos } from './hooks/useTodos';

function App() {
  // const {todos,loading}=useTodos(5);
  // return (
  //   loading==true?<div>Loading...</div>:
  //   <div>
  //      {todos.map((todo,index)=><Track key={index} todo={todo}/>)}
  //   </div>
  // )

  // for useIsOnline();
  // const isOnline = useIsOnline();
  // if(isOnline){
  //   return "You are online...";
  // }else return "Check your connection";

  //for useMousePointer
  // const mousePointer =useMousePointer();
  // return (
  //   <div>
  //     Your mouse position is {mousePointer.x} {mousePointer.y};
  //   </div>
  // )

  //for useInterval
  // const [count,setCount]=useState(0);
  // useInterval(()=>{
  //     setCount(c=>c+1);
  // },1000)
  // return <>Timer is at {count}</>

  //for useDebounce 
  const [inputValue,setInputValue]=useState('');
  const debounceValue= useDebounce(inputValue,500);
  useEffect(() => {
    if (debounceValue) {
      console.log("Searching for:", debounceValue); 
    }
  }, [debounceValue]);
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        placeholder="Search"
      />
      Denounced value is {debounceValue}.
    </>
  );
}
// function Track({todo}){
//   return (
//     <div>
//       <h1>{todo.title}</h1>
//       <p>{todo.description}</p>
//     </div>
//   )
// }
export default App
