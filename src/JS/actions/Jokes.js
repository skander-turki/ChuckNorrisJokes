import {
    GET_ALL_JOKES
} from "../actionTypes/Jokes";
import axios from "axios";

export const getAllJokes = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        const res = await axios.get("https://api.chucknorris.io/jokes/search?query=all", config);
        dispatch({ type: GET_ALL_JOKES, payload:  res.data.result }); //{msg,jokes}
    } catch (error) {
        console.log(error);
    }
};