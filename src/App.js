import React, {useEffect, useState} from 'react';
import Header from './Header.js';
import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';

function App() {

  const [todo, setTodo] = useState(() => {
    const savedTodos = localStorage.getItem('todo');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [input, setInput] = useState('');

  function handleAddName(newName){
    if(newName !== ''){
      if(!todo.includes(newName)){
          const newTodo = [...todo, newName]
          setTodo(newTodo);
        }
      else{
        window.alert("Este nome já está no caderninho")
      }
      }
  }

  function handleRemoveName(index){
    const newTodo = todo.filter((name, nameIndex) => (index !== nameIndex));
    setTodo(newTodo);
  }

  function handleEditName(index){
    const nameTodo = todo.filter((name, nameIndex) => (index === nameIndex));
    setInput(nameTodo);
    handleRemoveName(index);
  }

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <Header />
      <TodoInput handleAddName={handleAddName} setInput={setInput} input={input}/>
      <TodoList todo={todo} handleRemoveName={handleRemoveName} handleEditName={handleEditName}/>
    </>
  );
}

export default App;
