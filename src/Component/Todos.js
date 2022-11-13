import React from 'react'
import { useState } from 'react'
import TodosList from './TodosList'

    function Todos() {

const [todo, setTodo] = useState('')
const [todoList, setTodoList] = useState([])

const ChangeHangler =(e)=>{  
    setTodo(e.target.value)
 
}
const SubmitHandler = (e)=>{
e.preventDefault()
let tempList = todoList
tempList.push(todo)
setTodoList(tempList)
console.log(todoList)
setTodo('')
}

const header = {
    textAlign: 'center'
}

  return (
    <div style={header}>
        <form  onSubmit={SubmitHandler}>
      <input value={todo} onChange={ChangeHangler} type='text'/>
      <button type='submit'>Add</button>
      </form>
      {todoList.map((item)=>(<TodosList key={item} name={item}></TodosList>))}
    </div>
  )
}

export default Todos
