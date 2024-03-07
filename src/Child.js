import {UserContext1} from "./UserContext"
import { useContext} from "react";
export default function Child() {
  const {user, email} = useContext(UserContext1);
  return (
    <>
      <h2>Hello {user} from Child component</h2>
    </>
  );
}