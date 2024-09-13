const express= require('express');
const { createTodo } = require('./types');
const app = express();
const {todo} = require('./db')
const port = 3000|| process.env.PORT;
const cors = require("cors");


app.use(express.json());
// app.use(cors());
app.use(cors({
    origin: '*', // Allow all origins for testing, change this in production
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}));

app.post('/todo', async (req, res) => {
    try {
        const createPayload = req.body;
        const parsedPayload = createTodo.safeParse(createPayload);

        if (!parsedPayload.success) {
            res.status(400).json({
                msg: "Invalid input.",
            });
            return;
        }
        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false, // no need for default in schema
        });

        res.status(201).json({
            msg: "Todo created successfully",
        });
    } catch (error) {
        console.error("Error in POST /todo:", error); // log error to see what's going wrong
        res.status(500).json({
            msg: "Server error, please try again later.",
        });
    }
});

app.get('/todos',async (req,res)=>{
    const todos =await todo.find({});
    res.json({
        todos
    })
})
app.put('/completed',async (req,res)=>{
    const updatePayload = req.body;
    const parsedPayload= createTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong input.",
        })
        return;
    }
    // await todo.update({
    //     _id:req.body.id,
    // },{
    //     completed:true,
    // })
    await todo.findByIdAndUpdate(req.body.id, {
        completed: true,
    });
    res.json({
        msg:"todo marked as completed!",
    })
})


app.listen({port},()=>{
    console.log(`server is running on port ${port}`);
})