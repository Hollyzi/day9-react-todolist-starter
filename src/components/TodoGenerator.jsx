import {useContext, useState} from "react";
import {TodoContext} from "../App";
import {ADD} from "../context/todoReducer"
import axios from "axios";
import {addTodo, getTodos} from "../apis/todoAPI";


const TodoGenerator = () => {
    const [text, setText] = useState("")
    const {dispatch} = useContext(TodoContext)
    const handleChange = (event) => {
        setText(event.target.value)
    }
    const handleAdd = async () => {
        let newTodo = {text: text, done: false};
        const addResult = await addTodo(newTodo);
        console.log("add success",addResult);
        getTodos().then((todos)=>{
            dispatch({type:'INIT',payload:todos})
        });
        // if (text) {
        //     dispatch({type: ADD, payload: newTodo})
        // }
    }
    return (
        <div>
            <input name="inputTodo" value={text} onChange={handleChange}/>
            <button onClick={handleAdd} className="blue-button">add</button>
        </div>
    )
}
export default TodoGenerator