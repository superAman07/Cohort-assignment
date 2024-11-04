const mongoose =require('mongoose')
const express =require('express');
const cors = require('cors')

const app = express();
const port = process.env.PORT||3000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
}));

mongoose.connect("mongodb+srv://superAman:superaman@cluster0.ggryr.mongodb.net/todos");
  
const todoSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    completed:{type:Boolean,default:false}
});
const Todo = mongoose.model("todos",todoSchema);
app.post('/addtodo',async function(req,res){
    const title=req.body.title;
    const description=req.body.description;
    const todo = new Todo({
        title:title,
        description:description
    })
    await todo.save();
    res.json({
        message:"Todo added successfully",
    })
});
app.get('/todos',async function(req,res){
    const todos = await Todo.find();
    res.json({
        todos:todos
    })
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})