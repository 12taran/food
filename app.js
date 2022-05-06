const express = require ("express");

const app =  express();
const port = 80;
app.use('/static' , express.static('static'));

app.get("/" , (req ,res) =>{
res.status(200).send(" this  is the first express app with harry")
});
app.get("/about" , (req ,res) =>{
res.status(200).send(" this  is the first about of my express app with harry")
});

app .listen(port , ()=>{
    console.log(` port has been started on or listen ${port}`);
});