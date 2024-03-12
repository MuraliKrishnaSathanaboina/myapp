import React from 'react'
import {UserContext} from "./UserContext2"
// import UserContext2 from "./UserContext2";
import { useContext } from "react";
import Home from './Home';


function Rigeter() {
    const {user,setUser} = useContext(UserContext);
    const {flag,setFlag} = useContext(UserContext);
    if(flag ==3){
        <Home />
    }
   
    
  return (
    <div>
        <div>Register</div>
        <button onClick={() => setFlag((prev) =>3)}>Login</button>
        
       
        
            {/* {flag === 0 && <Home />}
            {flag === 3 && <Rigeter />} */}

        
    </div>
  )
}

export default Rigeter