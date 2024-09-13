// /* eslint-disable no-unused-vars */
// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

function App() {
  const [todos,setTodos]=useState([]);

  return (
    <div> 
      <CreateTodo setTodos={setTodos}/>
      <Todos todos={todos}/>
    </div>
  )
}

export default App
