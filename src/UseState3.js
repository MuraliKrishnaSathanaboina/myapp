import React from 'react'
import ExpComp from "./ExpComp";
import { useState } from "react";

function UseState3() {
    const [count, setCount] = useState(0);
  return (
    <div><ExpComp count={count} setCount={setCount} />
    <button onClick={() => setCount((prevState) => prevState + 1)}>
      Count{count}
    </button></div>
  )
}

export default UseState3