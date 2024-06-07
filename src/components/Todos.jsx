import React from 'react';
import TodoItem from './TodoItem';

const Todos = ({ todos, toggleCompleted, deleteTodo }) => {
  return (
    <div style={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

const styles = {
  todoList: {
    listStyle: 'none',
    padding: 0,
  },
};

export default Todos;
