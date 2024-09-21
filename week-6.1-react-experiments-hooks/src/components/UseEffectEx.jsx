import { useEffect, useState } from 'react'; 
import axios from 'axios';

function Todo({ id }) {  
  const [todo, setTodo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:3000/todos')
      .then(response => {
        const todoItem = response.data.find(item => item.id === id);
        if (todoItem) {
          setTodo(todoItem);
        } else {
          console.error('Todo not found');
        }
      })
      .catch(error => {
        console.error("There was an error fetching the todos!", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>{todo.title ? todo.title : "Todo not found"}</h1>
      <h3>{todo.description ? todo.description : "No description available"}</h3>
    </div>
  );
}

export default Todo;
