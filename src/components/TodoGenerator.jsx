import {useContext, useState} from "react";
import {TodoContext} from "../App";
import {ADD} from "../context/todoReducer"


const TodoGenerator = () => {
    const [text, setText] = useState("")
    const {dispatch} = useContext(TodoContext)
    const handleChange = (event) => {
        setText(event.target.value)
    }
    const handleAdd = () => {
        if (text) {
            dispatch({type: ADD, payload: text})
        }
    }
    return (
        <div>
            <input name="inputTodo" value={text} onChange={handleChange}/>
            <button onClick={handleAdd} className="blue-button">add</button>
        </div>
    )
}
export default TodoGenerator