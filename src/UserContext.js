import React from 'react'
import { useState, createContext, useContext } from "react";
import Child from "./Child";
export const UserContext1 = createContext();
export default function UserContext() {
  const [user, setUser] = useState("John");
  const [email, setEmail] = useState("john@gmail.com")
  return (
    <>
    <UserContext1.Provider value={{user, email}}>
      <h2>Hello {user} from UserContext component</h2>
      <Child />
    </UserContext1.Provider>
    </>
  );
}