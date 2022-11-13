import React, { useState } from 'react'

function HookCounter() {
    const [count, setCount] = useState(0)
    const clickHandler = ()=>{
      setCount(count+1)
    }
  return (
    <div>
      <button onClick={clickHandler}>{count}submit</button>
    </div>
  )
}

export default HookCounter


