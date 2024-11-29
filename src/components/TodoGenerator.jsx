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
        let newTodo = {id: Date.now(), text: text, done: false};
        await addTodo(newTodo).then((response)=>
            console.log("add success",response));
        await getTodos().then((todos)=>{
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