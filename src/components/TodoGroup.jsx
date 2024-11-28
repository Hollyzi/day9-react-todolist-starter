//get context data
import {useContext} from "react";
import {TodoContext} from "../App";
import TodoItem from "./TodoItem";

const TodoGroup=()=>{
    const {state} = useContext(TodoContext)
    console.log("state-------", {state})
    return (

        <div>
            {
                state.map(
                    (value,index)=>{
                return <TodoItem key={value.id+index} todo={value}></TodoItem>
            })
            }
        </div>
    )
}
export default TodoGroup