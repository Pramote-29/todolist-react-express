const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const todoolistRouter = require('./routes/todo');
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api', todoolistRouter);

app.listen(5001, () =>{
    console.log('Server started on http://localhost:5001');
})