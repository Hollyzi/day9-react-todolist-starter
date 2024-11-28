import {useContext} from "react";
import {TodoContext} from "../App";

const TodoItem=(props)=>{
    const {dispatch}=useContext(TodoContext)
    const handleDelete=()=>{
        dispatch({type:'DELETE',payload:props.todo})
    }
    return (
        <div>
            {props.todo.text}
        <button onClick={handleDelete}>X</button>
        </div>
    )
}
export  default TodoItem