// import Login from "./Login";
// import Registration from "./Registration";
function App2(props){

    return props.userName ==="" && (<div>
                     <h1>Login</h1>
             <label>UserName:</label>
             <input type="text"/><br></br>
             <label>PassWord:</label>
             <input type="password"/><br></br>
            <button>Login</button>
                </div>)
    // if(props.userName === "John"){
    //     return(
    //         <div>
    //             <h1>Home {props.userName}</h1>
    //         </div>
    //     )
    // }
    // else{
    //     return(
    //         <div>
    //             <h1>Login</h1>
    //     <label>UserName:</label>
    //     <input type="text"/><br></br>
    //     <label>PassWord:</label>
    //     <input type="password"/><br></br>
    //     <button>Login</button>
    //         </div>
    //     )
    // }

    // return(props.userName ===""?<Login/>:<Registration User={props.userName}/>)
    // if(props.userName == "John"){
    //     return <Login/>
    // }
    // else{
    //     return <Registration User={props.userName}/>
    // }
}

export default App2;