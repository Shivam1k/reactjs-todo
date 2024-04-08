import {useState} from "react";
export default function Ludoboard(){

let [move , setMove] = useState({ blue: 0, red:0 , yellow:0 , green:0 });
let [arr, SetArr] = useState(["no move"]);

let updateBlue = ()=>{
    // setMove((preMove)=> {
    //     return {...preMove, blue: preMove.blue+1};
    // });

    SetArr((prevArr) => {
        return [...prevArr,  "blue moves"];
    });
    console.log(arr);
};


let updateyellow = ()=>{
   
    setMove((preMove)=> {
        return {...preMove, yellow: preMove.yellow+1};
    })
}

let updatered = ()=>{
  
    setMove((preMove)=> {
        return {...preMove, red: preMove.red+1};
    })
}

let updategreen = ()=>{
  
    setMove((preMove)=> {
        return {...preMove, green: preMove.green+1};
    })
}


    return (
        <div>
            <p>Games Begins!</p>
            <p>{arr}</p>
            <div className="board">
                <p>Blue moves = {move.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>
                    +1
                </button>
                <p>Yellow moves = {move.yellow}</p>
                <button style={{backgroundColor:"yellow"}} onClick={updateyellow}>
                    +1
                    </button>
                <p>Red moves = {move.red}</p>
                <button style={{backgroundColor:"red"}} onClick={updatered}>
                    +1
                    </button>
                <p>Green moves = {move.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updategreen}>
                    +1
                    </button>
            </div>
        </div>
    );
}