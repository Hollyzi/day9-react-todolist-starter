import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import {useContext, useEffect} from "react";
import {getTodos} from "../apis/todoAPI";
import {TodoContext} from "../App";
import TodoSearcher from "./TodoSearcher";

const TodoList = () => {
   const {dispatch}=useContext(TodoContext)
    useEffect(() => {
         getTodos().then((todos)=>{
             dispatch({type:'INIT',payload:todos})
         });
    }, []);

    return (
        <div>
            <h1>Todo List</h1>
            <TodoGroup></TodoGroup>
            <TodoGenerator></TodoGenerator>
            <TodoSearcher/>
        </div>

    );
}

export default TodoList