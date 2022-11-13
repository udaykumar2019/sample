// import React, { useState,useEffect } from 'react'

// function HookCounterOne() {
//     const [count, setCount]= useState(0)
//     const [name, setName] = useState('')
//     useEffect(()=>{
//       console.log('useEffect - updating document title')
//         document.title = `You clicked ${count} time`
//     },[count])
//   return ( 
//     <div>
//       <input type='text' value={name} onChange = {e=> setName(e.target.value)}/>
//       <button onClick={()=> setCount(count+1)}>click{count} times</button>
//     </div>
//   )
// }

// export default HookCounterOne

import React, { useState,useEffect } from 'react'

function HookCounterOne() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const onChangeHandler =() =>{
    setCount(count+1)
  }
  const Handler = (e) =>{
    setName(e.target.value)
  }
  useEffect(()=>{
    console.log('hi uday')
    document.title = `you clicked on title ${count}`
  },[count])
  return (
    <div>
      <input type='text' value={name} onChange={Handler}/>
      <button onClick={onChangeHandler}>click {count}times</button>
    </div>
  )
}

export default HookCounterOne
