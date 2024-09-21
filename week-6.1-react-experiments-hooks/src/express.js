import express from 'express';
const app = express();
import cors from 'cors';

app.use(cors());
app.get('/todos', (req, res) => {
    const todos = [
        { id: 1, title: "Learn Express", completed: false, description: "Learn how to use Express.js" },
        { id: 2, title: "Build a REST API", completed: true, description: "Create a REST API using Express.js" },
        { id: 3, title: "Build a REST API three", completed: true, description: "Extend the REST API further" },
    ];

    res.json(todos);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
