import React from 'react'
import {UserContext} from "./UserContext2"
// import UserContext2 from "./UserContext2";
import { useContext } from "react";
import Home from './Home';
import Rigeter from './Rigeter';

function Login1() {
    const {user,setUser} = useContext(UserContext);
    const {flag,setFlag} = useContext(UserContext);
    if(flag ==1){
        <Home />
    }
    else if(flag==2){
        <Rigeter />
    }
    
  return (
    <div>
        <div>Login</div>
        <button onClick={() => setFlag((prev) =>1)}>Login</button>
        <button onClick={() => setFlag((prev) => 2)}>Register</button>
       
        
            {/* {flag === 0 && <Home />}
            {flag === 3 && <Rigeter />} */}

        
    </div>
  )
}

export default Login1

