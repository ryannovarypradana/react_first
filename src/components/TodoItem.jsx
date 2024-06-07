import React from 'react';

const TodoItem = ({ todo, toggleCompleted, deleteTodo }) => {
  const getTodoTitleStyle = () => {
    return {
      textDecoration: todo.completed ? 'line-through' : 'none',
      margin: 0,
      flex: 1,
    };
  };

  return (
    <div style={styles.todoItem}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleCompleted(todo.id)}
        style={styles.checkbox}
      />
      <p style={getTodoTitleStyle()}>{todo.title}</p>
      <button onClick={() => deleteTodo(todo.id)} style={styles.button}>x</button>
    </div>
  );
};

const styles = {
  todoItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#4105f4',
    border: '1px solid #ddd',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '5px',
  },
  checkbox: {
    marginRight: '10px',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#BB0000',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '18px',
    width: '30px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '10px',
    
  },
};

export default TodoItem;
