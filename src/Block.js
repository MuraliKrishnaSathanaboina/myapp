// import kerala from './Kerala.jpg';
// import pondi from './pondi.jfif';
// import coorg from './coorag.jpg';
function Block(){
    let arr = [
        {image:'./src/images/Kerala.jpg'},
        {image:'/images/pondi.jfif'},
        {image:'/images/coorag.jpg'}
    ]

    return (
    <div className="main-cont">
        <div className="block1">
            <img src={arr[0].image} alt="Kerala" height="200px" width="250px"></img>
            <h3>Kerala</h3>
            <p>2days-10k</p>
            <button className="btn">Book the Ticket</button>
        </div>
        <div className="block2">
        <img src={arr[1].image} alt="Pondicherry" height="200px" width="250px"></img>
            <h3>Pondicherry</h3>
            <p>3days-8k</p>
            <button className="btn">Book the Ticket</button>
        </div>
        <div className="block3">
        <img src={arr[2].image} alt="Coorg" height="200px" width="250px"></img>
            <h3>Coorg</h3>
            <p>3days-7k</p>
            <button className="btn">Book the Ticket</button>
        </div>
    </div>)
}
export default Block