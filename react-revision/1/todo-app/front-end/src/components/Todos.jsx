export default function Todos({todos}){     //we are passing map here and also we can use props
    return (
        <div>
        {todos.map((todo)=>{
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed==true?"Completed":"Mark as Complete"}</button>
            </div>
        })}
        </div>
    );
}