import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormTodo from './FormTodo';
import Todo from './Todo';
import { Card } from 'react-bootstrap';

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Halay Çekilecek',
      isDone: false
    }

  ]);
  const addTodo = (text) =>{
    const newTodos = [...todos, {text, isDone: false}];
    setTodos(newTodos);
  }

  const markTodo = (index) =>{
    const newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
  }

  const deleteTodo = (index) =>{
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

    return (
        <div className="app">
            <div className='container'>
                <div className='d-flex justify-content-center'>
                    <h1 className='justify-content-center'>Todo List</h1>
                </div>
                <div className='d-flex justify-content-center'>
                    <FormTodo addTodo={addTodo}></FormTodo>
                    
                </div>
                <div className='d-flex justify-content-center flex-column d-row mt-3'>
                      {
                        todos.map((todo,index) => (
                          <Card className='mt-3'>
                            <Card.Body>
                              <Todo todo={todo} index={index} markTodo={markTodo} deleteTodo={deleteTodo} />
                            </Card.Body>
                          </Card>
                        ))
                      }
                    </div>
            </div>
        </div>
    );
}

export default App;
