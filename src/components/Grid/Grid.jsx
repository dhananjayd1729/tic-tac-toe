import { useState } from "react";
import Card from "../Card/Card";
import isWinner from "../../helper/helper";
import { ToastContainer, toast } from 'react-toastify';

import "./Grid.css";
import 'react-toastify/dist/ReactToastify.css';
function Grid({ numberOfCards }){
   const [turn, setTurn] = useState(true);
   const [board, setBoard] = useState(Array(numberOfCards).fill(""));
   const [winner, setWinner] = useState(null);

   function play(index){
    if(turn === true){
        board[index] = 'O';
    }else{
        board[index] = 'X'
    }
    const win = isWinner(board, turn ? 'O' : 'X');
    if(win){
        setWinner(win);
        toast.success(`Congratulations ${win}. You won the game!!`, {position: 'top-center'});
    }
    setBoard(board);
    setTurn(!turn);
   }

   function resetGame(){
    setBoard(Array(numberOfCards).fill(""));
    setWinner(null);
    setTurn(true);
   }

   return (
    <div className="grid-wrapper">
        { winner && (
            <>
               <h1 className="turn-highlight">Winner is {winner}</h1>
               <ToastContainer position="top-center" />
               <button className="reset-button" onClick={resetGame}>Reset game</button>
            </>
               
        )}
        <h1 className="turn-highlight">Current player : {(turn) ? "O" : "X"}</h1>
        <div className="grid">
                {board.map((value, idx) => 
                    <Card gameEnd = {winner ? true : false} key={idx} onPlay = {play} index={idx} player={value}/>)
                }
        </div>
    </div>
     
   )
}
export default Grid;