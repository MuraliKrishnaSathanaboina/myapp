import React from "react";
import Pass from "./Pass";
import Fail from "./Fail";
function Result(props){
    
        if (props.marks >=60){
            return <Pass />;
        }
        else{
            return <Fail/>;
        }
    
}
export default Result;
