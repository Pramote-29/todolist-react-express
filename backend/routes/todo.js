const express = require('express');
const router = express.Router();
const { createtodo,list,update,remove } = require('../controller/todo');
const app = express();


// 5001/api/todo
router.post('/todo', createtodo);
router.get('/todo', list); 
router.put('/todo/:id', update);
router.delete('/todo/:id', remove);

module.exports = router;