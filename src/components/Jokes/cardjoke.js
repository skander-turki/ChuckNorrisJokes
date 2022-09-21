import "./cardjoke.css";
import React, { useState} from "react";

function Cardjoke(props) {
    const [joke , setjoke] = useState(props.Joke)
    return(
        <div className="card">   
            <div className="cardcontainer">
                <h4>{joke.categories}</h4>
                <p>{joke.value}</p>
            </div>
        </div>
    )
}
export default Cardjoke;