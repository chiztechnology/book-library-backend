require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./api/users/user.router');
const bookRouter = require('./api/books/book.router');

app.use(express.json())
.use('/api/users', userRouter)
.use('/api/books', bookRouter)


.listen(process.env.APP_PORT ,()=>{
  console.log(`server started on port ${process.env.APP_PORT}`);
})