import {useContext} from "react";
import {TodoContext} from "../App";
import "../style/line_through.css"
import {DONE, DELETE} from "../context/todoReducer"

const TodoItem = (props) => {
    const {dispatch} = useContext(TodoContext)
    const handleDelete = () => {
        dispatch({type: DELETE, payload: props.todo})
    }
    const handleDone = (event) => {
        dispatch({type: DONE, payload: props.todo})
        event.target.className = "done-item"
    }
    return (
        <div>
            <div className="text-border">
                <span onClick={handleDone}>
                    {props.todo.text}
                </span>
            </div>
            <button onClick={handleDelete}>X</button>
        </div>
    )
}
export default TodoItem