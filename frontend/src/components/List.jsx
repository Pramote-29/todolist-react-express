import React, { useState } from 'react'
import { removeqTodo, updateTodo } from '../api/Alltodo'
import { toast } from 'react-toastify'

const List = ({ item, fetchTodos }) => {
  const [edit, setEdit] = useState(false)
  const [title, setTitle] = useState(item.title)

  const handleDelete = async (id) => {
    removeqTodo(id)
      .then((res) => {
        console.log(res)
        toast.success('Delete todo success')
        fetchTodos()
      })
      .catch((error) => {
        console.error('Error deleting todo:', error)
      })
  }

  const handleEdit = (id) => {
    setEdit(!edit)
  }

  const handleUpdate = (e) => {
    setTitle(e.target.value)
  }

  const handleUpdateSubmit = (id) => {
    setEdit(!edit)
    updateTodo(id, { title })
      .then((res) => {
        console.log(res)
        toast.success('Update todo success')
        fetchTodos()
      })
      .catch((error) => {
        console.error('Error updating todo:', error)
      })
  }

  return (
    <div className="flex justify-between items-center bg-gray-800 p-3 rounded-lg shadow-md">
      {edit ? (
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleUpdate}
          className="p-2 rounded-lg text-black w-full mr-3"
        />
      ) : (
        <span className="text-lg">{item.title}</span>
      )}

      <div className="flex gap-2">
        {edit ? (
          <button
            onClick={() => handleUpdateSubmit(item.id)}
            className="px-3 py-2 bg-green-500 hover:bg-green-700 text-white rounded-lg"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => handleEdit(item.id)}
            className="px-3 py-2 bg-yellow-500 hover:bg-yellow-700 text-white rounded-lg"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => handleDelete(item.id)}
          className="px-3 py-2 bg-red-500 hover:bg-red-700 text-white rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default List