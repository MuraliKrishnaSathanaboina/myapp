export default function App5(){
    let arr = ["Ankam", "GAnesh", "Nithin"]
    return(
        <div>
            <ul>
            {arr.map((e,i) =>(
                <li key="{i}">{e}</li>
    ))}
            </ul>
            
        </div>
    )
}