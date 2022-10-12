import React from 'react'
import {Button, Form} from 'react-bootstrap';

const todocss = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',
    fontSize: '18px'
}
const todo_button = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '10px',
  fontSize: '18px'
}

function Todo({todo, index, markTodo, deleteTodo}) {
  const {text, isDone} = todo;
    return (
        <div style={todocss}>
            <span style={{textDecoration: isDone ? 'line-through' : ''}}>{todo.text}</span>
            <div style={todo_button}>
                <Button onClick={() => markTodo(index)}>{isDone ? 'Yaptım' : 'Yapmadım'}</Button>
                <Button variant='danger' onClick={() => deleteTodo(index)}>Sil</Button>
            </div>
        </div>
    )
}

export default Todo