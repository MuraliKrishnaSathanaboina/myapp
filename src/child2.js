import {UserContext} from "./UserContext2"
// import UserContext2 from "./UserContext2";
import { useContext } from "react";
export default function child2() {
  const {user,setUser} = useContext(UserContext);
  return (
    <>
      <h2>Hello {user} from Child component</h2>
      <button onClick={()=>setUser((prev)=>"cathy")}>Change to Cathy</button>
    </>
  );
}