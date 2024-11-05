
interface TodoInput{
    title:string;
    description:string;
    done ?:boolean
}

function Todo(props:TodoInput){
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
            <h3>{props.done}</h3>
        </div>
    );
}











//old way to do

// function Todo(){
//   const [todos,setTodos]=useState([""]);
//   const [todo,setTodo]=useState("");
//   function addTodo(){
//     setTodos([...todos,todo]);
//     setTodo("");
//   }
//   return (
//     <div>
//       <input onChange={e=>setTodo(e.target.value)} placeholder='input field' type="text"/>
//       <button onClick={addTodo}>Add todo</button> 
//       {todos.map((value,index)=>(
//         <div key={index}>{value}</div>
//       ))}
//     </div>
//   )
// }
export default Todo;