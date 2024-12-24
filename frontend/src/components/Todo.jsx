import React, { useEffect, useState } from 'react'
import { Alltodo, addTodo } from '../api/Alltodo'
import { toast } from 'react-toastify'
import List from '../components/List'

const Todo = () => {
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    try {
      Alltodo().then((res) => {
        console.log(res.data.todolist)
        setTodos(res.data.todolist)
      })
    } catch (error) {
      console.error('Error fetching todos:', error)
    }
  }

  const handleAdd = (e) => {
    setTitle(e.target.value)
  }

  const handleAddSubmit = () => {
    addTodo({ title })
      .then((res) => {
        console.log(res)
        toast.success('Add todo success')
        fetchTodos()
      })
      .catch((error) => {
        console.error('Error adding todo:', error)
      })
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-5">
      <h1 className="text-3xl font-bold text-center mb-5">Pramote Todo List</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-5">
        <input
          type="text"
          name="title"
          placeholder="Enter task..."
          onChange={handleAdd}
          className="p-2 rounded-lg text-black"
        />
        <button
          onClick={handleAddSubmit}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg"
        >
          Add Task
        </button>
      </div>
      <div className="space-y-4">
        {todos.map((item, index) => (
          <List key={index} item={item} fetchTodos={fetchTodos} />
        ))}
      </div>
    </div>
  )
}

export default Todo