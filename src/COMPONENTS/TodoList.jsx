import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import del from '../assets/delete.png'
import '../CSS/List.css'

const TodoList = ({text,id,deleteTodo,isComplete,toggle}) => {
  return (
    <>
      <div className='List' onClick={()=>toggle(id)} style={isComplete ? {textDecoration:'Line-through green'} : {}}>
             <img src={isComplete ? tick : not_tick} alt="" className='tick'  />
             <p >{text}</p>
             <img src={del} alt="" onClick={()=> deleteTodo(id)} className='del' />
      </div>
    </>
  )
}

export default TodoList