import React from "react"
import Tenz from "./components/tenz/tenz"
import {nanoid} from "nanoid"
import "./index.css"

function App(){

    const [dice, setDice] = React.useState(generateNewNumbers())

    function generateNewNumbers(){
        const arr=[]
        
        for(let i=0;i<10;i++){
            let newNo=Math.floor(Math.random()*6)
            arr.push({value:newNo,isHeld:false,id: nanoid()})
        }

        return arr
       
    }
    // generateNewNumbers()

    let randomel=dice.map(randn=>(
        <Tenz key={randn.id} value={randn.value} isHeld={randn.isHeld} holdDice={() => holdDice(randn.id)}  />

    ))

    function randno(){
        setDice(generateNewNumbers())
    }

    function holdDice(id){
        setDice(oldvalue=>oldvalue.map(die=>{

            return die.id=== id  ? {...die, isHeld: !die.isHeld}: die
        }


        ))
    }


    function rollDice() {
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? 
                die :
                generateNewDie()
        }))
    }

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }

    return(
        

        <main>
        <div className="tenz-container" >
            {randomel}

        </div>
        <button className="roll-btn" onClick={rollDice}>Roll</button>

     </main>
    )
}

export default App