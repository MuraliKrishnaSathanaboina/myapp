import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function UseState2() {
    const [runs,setCount1] = useState(0)
    const [wickets,setCount2] = useState(0)

    useEffect(() =>{
        // if(wickets>0){
            console.log("better luck nextTime")
        // }
        
    },[wickets])
    return (
      // <div>
      //     <button onClick={()=>setCount((prevState) => prevState+1)}>Click</button>
      //     <span>{count}</span>
      // </div>
      <div>
          <button onClick={()=>setCount1((prevState) => prevState+1)}>Runs{runs}</button>
          <button onClick={()=>setCount2((prevState1) => prevState1+1)}>wickets{wickets}</button>
          {/* <span>{count}</span> */}
      </div>
    )
}

export default UseState2