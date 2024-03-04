import Sqr from "./Sqr"
export default function App4(){
    const SqrRoot = (num) =>{
            return num*num
    }
    return (<div><Sqr n={5} f={SqrRoot}/></div>)
}