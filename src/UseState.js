import React from 'react'
import { useState } from 'react'

function UseState() {
    const [count,setCount] = useState(0)
  return (
    // <div>
    //     <button onClick={()=>setCount((prevState) => prevState+1)}>Click</button>
    //     <span>{count}</span>
    // </div>
    <div>
        <button onClick={()=>setCount((count) => count+1)}>Click</button>
        <span>{count}</span>
    </div>
  )
}

export default UseState