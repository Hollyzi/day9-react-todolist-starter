import {useContext} from "react";
import {TodoContext} from "../App";
import "../style/line_through.css"

const TodoItem=(props)=>{
    const {dispatch}=useContext(TodoContext)
    const handleDelete=()=>{
        dispatch({type:'DELETE',payload:props.todo})
    }
    const handleDone=(event)=>{
        dispatch({type:'DONE',payload:props.todo})
        event.target.className="done"
    }
    return (
        <div onClick={handleDone}>
            {props.todo.text}
        <button onClick={handleDelete}>X</button>
        </div>
    )
}
export  default TodoItem