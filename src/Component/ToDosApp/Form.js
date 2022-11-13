import React from 'react'
import styles from "./style.module.css"
import shortid from 'shortid'

const Form = ({todo,setTodo,todoList, setTodoList}) => {
    const handleChange = (e) =>{
        setTodo(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setTodoList([...todoList, {name:todo, id:shortid.generate()}])
        setTodo('')
    }
    return (
        <div className={styles.todoform}>
            <form onSubmit={handleSubmit}>
                <input value={todo} onChange={handleChange} className={styles.todoinput} placeholder='Add ToDo Item'></input>
                <button className={styles.todobutton}>Add</button>
            </form>
        </div>
    
    )
}
export default  Form;
