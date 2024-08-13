import Icon from "../Icon/Icon.jsx";
import "./Card.css";
function Card({ iconName }){
    return (
        <div className="card">
           <span> <Icon name={iconName}/> </span>
        </div>
    )
}

export default Card;