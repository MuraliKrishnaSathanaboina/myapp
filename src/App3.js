export default function App3(props){

    App3.defaultProps = {
        name:"Murali"
    }

    // console.log(props.names)
    // console.log(props.students.names)
//  props.names.forEach(element => {
//     console.log(element)
//  });
    return(
        <div style={{color:'blue'}}> 
            Hello {props.name}
        </div>
    )
}
