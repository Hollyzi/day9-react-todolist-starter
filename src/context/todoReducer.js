import {addTodo, getTodos} from "../apis/todoAPI";
import {useContext} from "react";
import {TodoContext} from "../App";

export const initialState = [];

export const ADD = "ADD";
export const DELETE = "DELETE";
export const DONE = "DONE";
export const todoReducer = (state, action) => {
    if (action.type === ADD) {
        return [...state, action.payload]
    }
    if (action.type === DELETE) {
        return [...state].filter(e => e.id !== action.payload.id)
    }
    if (action.type === DONE) {
        state.forEach(e => {
                if (e.id === action.payload.id) {
                    // e.done = e.done?false:true
                    e.done=true
                }
            }
        )
        console.log("done state..",state)
        return state;
    }
    if(action.type==="INIT"){
        return action.payload
    }
    return state;
};