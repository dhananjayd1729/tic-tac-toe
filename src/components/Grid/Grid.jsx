import Card from "../Card/Card";
import "./Grid.css"
function Grid({ numberOfCards }){
   return (
     <div className="grid">
       {Array(numberOfCards).fill("").map((idx) => <Card key={idx} />)}
     </div>
   )
}
export default Grid;