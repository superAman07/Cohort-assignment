import { useEffect, useState } from 'react';
import './App.css';
// import Todo from './components/Todo';

function App() {
  const [todos,setTodos]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(async function(res){
      const json = await res.json();
      setTodos(json);
    })
  },[]);


  return (
    <div className='App'>
    {todos.map(todo =><Todo key={todo.id} title={todo.title} description={todo.description}/>)}
    </div>
  )
}
function Todo({title,description}){
  return <div>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </div>
}

export default App;
