import {addTodo, getTodos} from "../apis/todoAPI";
import {useContext} from "react";
import {TodoContext} from "../App";

export const initialState = [];
export const allTodoState=[];

export const ADD = "ADD";
export const DELETE = "DELETE";
export const DONE = "DONE";
export const SETALL = "SETALL";
export const INIT = "INIT";
export const UPDATE = "UPDATE";
export const todoReducer = (state, action) => {
    const{init,all}=state
    if (action.type === ADD) {
        return {init,all:[...all,action.payload]}
    }
    if (action.type === DELETE) {
        return {init,all:[...all].filter(e => e.id !== action.payload.id)}
    }
    if (action.type === DONE) {
        const updatedAll = all.map(e => {
            if (e.id === action.payload.id) {
                return { ...e, done: !e.done };
            }
            return e;
        });
        return {init,all:updatedAll};
    }
    if(action.type===INIT){
        return {init:action.payload,all}
    }
    if(action.type= SETALL){
        return{init,all: action.payload}
    }
    return init;
};