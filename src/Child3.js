import {UserContext} from "./UserContext2"
import UserContext2 from "./UserContext2";
import { useContext } from "react";
import Albums from "./Albums";
export default function Child3() {
  const {user,setUser} = useContext(UserContext);
  return (
    <>
      <h2>Hello {user} from Child component</h2>
      <button onClick={() => setUser((prev) => "Cathy")}>Change to Cathy</button>
      <button onClick={()=><Albums/>}>Click</button>
    </>
  );
}