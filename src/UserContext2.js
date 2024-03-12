import { useState, createContext, useContext } from "react";
import Child3 from "./Child3";
import Login1 from "./Login1";
import Rigeter from "./Rigeter";
import Home from "./Home";

export const UserContext = createContext();
export default function UserContext2(props) {
  // const a = props.User
  const [user, setUser] = useState("Jhon");
  const [flag, setFlag] =  useState(0)
  return (
    <>
      <UserContext.Provider value={{ user, setUser , flag, setFlag}}>
        {/* <h2>Hello {user} from App13 component</h2>
        <Child3/> */}
      {!flag?<Login1/>:flag==1?<Home/>:flag==2?<Rigeter/>:<Home/>}
      {/* <Login1/> */}
      </UserContext.Provider>
    </>
  );
}