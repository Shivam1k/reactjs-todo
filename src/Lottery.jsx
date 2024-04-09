import {useState} from "react";
import { genTicket , sum } from "./helper";
import Ticket from "./Ticket";
export default function Lottery( {n , winningSum}){

    let [ticket , setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket) === winningSum;

    let buyTicket = () => {
        setTicket(genTicket(n));
    }

    return(
        <div>
            <h1>
                Lottery Game!
            </h1>
            <Ticket ticket={ticket}/>
            <h3>{isWinning && "Congratulation , you won ! "}</h3>
            
            <button onClick={buyTicket}>Buy New Ticket</button>
        </div>
    );
}