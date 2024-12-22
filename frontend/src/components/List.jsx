import React from 'react'

const List = ({item}) => {

    const List = ({item}) => {
        const handleDelete = (id) =>{
            console.log(id)
        }
    }

  return (
    <>
    <div className='text-white'>{item.title}<button onClick={() => handleDelete(item.id)} className='px-3 py-2 bg-white text-black rounded-2xl'>Delete</button></div>
    </>
  )
}
export default List 