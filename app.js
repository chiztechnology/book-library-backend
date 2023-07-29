require('dotenv').config();
const express = require('express');
const app = express();

// users endpoint
app.post('/api/users/signin', (req,res)=>{
  res.json({
    success:1,
    message: 'user logged in successfully'
  })
})

.post('/api/users/signup', (req,res)=>{

})

.post('/api/users/signout', (req, res)=>{

})

// books endpoint
.get('/api/books', (req, res)=>{

})

.get('/api/books/:book_id', (req,res)=>{

})

.post('/api/books', (req,res)=>{

})

.patch('/api/books/:book_id', (req,res)=>{

})

.delete('/api/books/:book_id', (req, res) =>{

})

.listen(process.env.APP_PORT ,()=>{
  console.log(`server started on port ${process.env.APP_PORT}`);
})