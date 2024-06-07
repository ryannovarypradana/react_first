import React from 'react'
import { useState } from 'react';

// Menerima function addTodo sebagai props
const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        addTodo(title) // Teruskan "title" sebagai argument
        setTitle('')
    }

       // Definisikan function "handleChangeTitle"
       const handleChangeTitle = (event) => {
        setTitle(event.target.value)
      }
    console.log(title)
    return (
      <div style={styles.container}>
        <form
          // Panggil function addTodo ketika form dikirimkan
          onSubmit={(event) => {
            handleSubmit(event)
          }}
        >
          <input
            type="text"
            placeholder="Add your Todo"
            style={styles.formInput}
            // Tambahkan event handler "onChange"
            onChange={(event) => {
              handleChangeTitle(event)
              }}
              value={title}
          />
          <button style={styles.button}>Add Todo</button>
        </form>
      </div>
  )
}

const styles = {
  container: {
    marginBottom: '32px',
    
  },
  formInput: {
    height: '66px',
    width: '40%',
    fontSize: '16px',
    padding: '0 16px',
    
  },
  button: {
    height: '72px',
    fontSize: '16px',
  },
}

export default TodoForm