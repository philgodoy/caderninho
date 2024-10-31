import TodoCard from './TodoCard';

export default function TodoList({todo, handleRemoveName, handleEditName}) {

  return (
    <div className='todoList'>
        {
            todo.map((name, nameIndex) => (
                <TodoCard name={name} key={nameIndex} handleRemoveName={handleRemoveName} index={nameIndex}
                handleEditName={handleEditName}>  
                </TodoCard>
            ))
        }
    </div>
  )
}
