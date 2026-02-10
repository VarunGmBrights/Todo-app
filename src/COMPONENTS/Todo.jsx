import React, { useEffect, useRef, useState } from 'react'
import TodoList from './TodoList';
import '../CSS/Todo.css'

const Todo = () => {

let TodoInput = useRef();
let [todoList, setTodolist] = useState(localStorage.getItem("todos") ? 
        JSON.parse(localStorage.getItem("todos")) : [] )

let add = () => {
    let inputRes = TodoInput.current.value.trim()

    if(inputRes === ""){
        return null
    }
    
     let result = {
        id : Date.now(),
        text:inputRes,
        isComplete : false
     }

     setTodolist((prev)=> [...prev,result])
     TodoInput.current.value = " "

}

let deleteTodo = (id) => {
    
    setTodolist((Deltodo)=> {
         return Deltodo.filter((todo)=> todo.id !== id)
    }
    ) 
}

let toggle = (id) => {
  setTodolist((prevTodo)=> {
    return prevTodo.map((todo)=> {
      if(todo.id === id){
        return {...todo, isComplete: !todo.isComplete}
      }
      return todo;
    })
  })
}

useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todoList))
},[todoList])


  return (
    <>
           <div className="In">
           <input ref={TodoInput} type="text" placeholder='Enter your to-do List... :)'/>
           <button onClick={add} >Enter</button>
           </div>

          {
            todoList.map((elem,index)=> {
                return (
                    <>
                        <TodoList key={index} text={elem.text} id={elem.id} isComplete={elem.isComplete} deleteTodo={deleteTodo} toggle={toggle} />
                     </>
                )
            })
          }
    </>
  )
}

export default Todo