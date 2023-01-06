const express=require('express');
const app=express();

const port=3001;
app.get('/', (req, res)=>{
    res.send("Server is running on port "+port)
})
app.get('/random',(req,res)=>{
    res.send(""+Math.random())
})

app.post('/create',(req,res)=>{
    console.log (req.body);
    res.send("User created");
})
app.listen(port, ()=>
{
    console.log("Server running on port "+port);
})