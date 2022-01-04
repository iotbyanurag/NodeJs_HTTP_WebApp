const express = require('express');

const app = express();

// ROutes Middleware

// start listening to server
app.get('/',(req,res) =>{
    res.send('we are on home')
});

// we are on posts

app.get('/post',(req,res) =>{
    res.send('we are on posts')
});
app.listen(8080);