import "./Card3.mod.css";
function Card3(props){
    return(
        <div className="card">
            <img src={props.src} alt={props.alt}/>
            <p>{props.product}</p>
            <p>{props.desc}</p>
            <p>{props.price}</p>
        </div>
    );
}
export default Card3;