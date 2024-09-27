import { useContext, useState } from 'react';
import './App.css'
import { CountContext } from './ContextAPI';

function App() {
  const [count,setCount] = useState(0);
  //wrap anyone that wants to use the teleported value inside the provider...
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount}/>
      </CountContext.Provider>
    </div>
  )
}
function Count({setCount}){
  return (
    <div>
      <CountRenderer/>
      <Buttons setCount={setCount}/>
    </div>
  );
}
function CountRenderer(){
  const count = useContext(CountContext)
  return <div>
  {count}
  </div>
}
function Buttons({setCount}){
  const count = useContext(CountContext);
  return (
    <div>
    <button onClick={()=>{
      setCount(count=>count+1)
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count=>count-1)
    }}>Decrease</button>
    </div>
  );
}

export default App
