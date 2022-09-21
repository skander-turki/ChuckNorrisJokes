import {
    GET_ALL_JOKES 
} from "../actionTypes/Jokes";

const initialState = {
    joke: [],
    errors: [],
    show: false,
};
const jokeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_JOKES :
            return { ...state, joke: payload };
        
        default:
            return state;
    }
};
export default jokeReducer;