import React, { useEffect, useState } from 'react'
import axios from 'axios'
import List from '../components/List'
const apiurl = 'http://localhost:5001/api/todo'


const Todo = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        fetchTodos()
    },[])
    const fetchTodos = async () => {
        try {
            await axios.get(apiurl).then((res) =>{
                console.log(res.data.todolist)
                setTodos(res.data.todolist)
            }) // เรียก API
          
        } catch (error) {
          console.error('Error fetching todos:', error); // แจ้ง error
        }
      };
  return (
    <>
    <h1 className='text-white'>Todo List</h1>
    <div>
        {todos.map((item,index) => (
            <List key={index} item={item} />
        ))}
    </div>
    </>
  )
}
export default Todo