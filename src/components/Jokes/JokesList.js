import { useDispatch, useSelector } from "react-redux";
import React, { useEffect , useState }  from "react";
import { getAllJokes } from "../../JS/actions/Jokes";
import "./Jokes.css";
import Cardjoke from "./cardjoke"
import ReactPaginate from 'react-paginate';
import Pagination from "../pagination/Pagination";

function JokesList  ()  {
    const jokes = useSelector((state) => state.jokeReducer.joke);
    const [val, setvalue] = React.useState("all");
    const [filteredJokes, setfilteredJokes] = React.useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [jokesPerPage, setjokesPerPage] = useState(9);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllJokes());
    });
    
        useEffect (() => {
            setfilteredJokes( jokes?.filter((joke) => {
                if (val === "")
                {
                    return joke.categories.length === 0
                }
                else if (val === "all")
                {
                    return true;
                }
                else if( joke.categories.length > 0 &&  joke.categories.includes(val))
                {
                return true;
                }
            }))
        } ,[val])
    const changevalue = ( value) => {
        setvalue(value);
        setfilteredJokes([])
        
        
    }
    //Get current jokes
    const indexOfLastJoke = currentPage * jokesPerPage;
    const indexOfFirstJoke = indexOfLastJoke - jokesPerPage;
    const currentJokes = filteredJokes.slice(indexOfFirstJoke, indexOfLastJoke);
    //Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return(
        <div className="joklistcontainer" >
        <div className="buttons">
            <button type="button" onClick={() => changevalue("animal")}>animal</button>
            <button type="button" onClick={() =>changevalue("career")}>career</button>
            <button type="button" onClick={() =>changevalue("celebrity")}>celebrity</button>
            <button type="button" onClick={() =>changevalue("dev")}>dev</button>
            <button type="button" onClick={() =>changevalue("explicit")}>explicit</button>
            <button type="button" onClick={() =>changevalue("fashion")}>fashion</button>
            <button type="button" onClick={() =>changevalue("food")}>food</button>
            <button type="button" onClick={() =>changevalue("history")}>history</button>
            <button type="button" onClick={() =>changevalue("money")}>money</button>
            <button type="button" onClick={() =>changevalue("movie")}>movie</button>
            <button type="button" onClick={() =>changevalue("music")}>music</button>
            <button type="button" onClick={() =>changevalue("political")}>political</button>
            <button type="button" onClick={() =>changevalue("religion")}>religion</button>
            <button type="button" onClick={() =>changevalue("science")}>science</button>
            <button type="button" onClick={() =>changevalue("sport")}>sport</button>
            <button type="button" onClick={() =>changevalue("travel")}>travel</button>
            <button type="button" onClick={() =>changevalue("all")}>view all</button>
        </div>
            <div className="listcontainer">
            {currentJokes && currentJokes.map((joke,index) =>(<Cardjoke key={index} Joke={joke}  />))}
            <Pagination 
                jokesPerPage={jokesPerPage} 
                totalJokes={filteredJokes.length } 
                paginate={paginate}
            />
            </div>
        </div>
    );
}

export default JokesList;
