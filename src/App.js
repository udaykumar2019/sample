import React from 'react'
import { useState } from 'react'

import Form from './Component/ToDosApp/Form'

import Header from './Component/ToDosApp/Header'

import TodoList from './Component/ToDosApp/TodoList'


// import Todos from './Component/Todos'
// import ComponentC from './Component/ComponentC'
// import FocusInput from './Component/FocusInput'
// import DataFetching from './Component/DataFetching'
// import IntervalClassCounter from './HooksComponents/IntervalClassCounter'
// import IntervalHookCounter from './HooksComponents/IntervalHookCounter'



// import HookMouse from './HooksComponents/HookMouse'
// import MouseContainer from './HooksComponents/MouseContainer'
// import ClassMouse from './HooksComponents/ClassMouse'
// import ClassHookCounterOne from './HooksComponents/ClassHookCounterOne'
// import HookCounterOne from './HooksComponents/HookCounterOne'
// import HouukCounterFour from './HooksComponents/HouukCounterFour'
// import HookCounterThree from './HooksComponents/HookCounterThree'


// import PostForm from './Component/PostForm'
// import ClassCounter from './HooksComponents/ClassCounter'
// import HookCounter from './HooksComponents/HookCounter'
// import HookCounterTwo from './HooksComponents/HookCounterTwo'
// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()


function App() {
const [todo, setTodo] = useState('')
const [todoList, setTodoList] = useState([])
 

  return(
    <div>  

{/* <PostForm/> */}
{/* <ClassCounter/> */}
{/* <HookCounter/> */}
{/* <HookCounterTwo/> */}
{/* <HookCounterThree/> */}
{/* <HouukCounterFour/> */}
{/* <HookCounterOne/> */}
{/* <ClassHookCounterOne/> */}
{/* <ClassMouse/> */}
{/* <HookMouse/> */}
{/* <MouseContainer/> */}
{/* <IntervalClassCounter/>
<IntervalHookCounter/> */}
{/* <DataFetching/> */}

{/* <UserContext.Provider value={'uday'}>
  <ChannelContext.Provider value={'pradeep'}>
<ComponentC/>
</ChannelContext.Provider>
</UserContext.Provider> */}
{/* <FocusInput name={'uday'} lastName={'kumar'}/> */}
{/* <Todos/> */}
 <Header/>
<Form todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}/>
<TodoList setTodoList={setTodoList} todoList={todoList}/> 

    </div>
  )
}

export default App