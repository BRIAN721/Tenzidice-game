import React from "react"
import "./tenz.css"

function Tenz(props){

    const styles={

        backgroundColor:props.isHeld? "#59E391" : "white"
    }
    return(
        <div>
             <div className="tenz-face" style={styles} onClick={props.holdDice}>
               <h2>{props.value}</h2>
             
             </div>

        </div>
    )
}

export default Tenz