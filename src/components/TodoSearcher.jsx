import {useContext, useState} from "react";
import {TodoContext} from "../App";
import {ADD} from "../context/todoReducer"
import axios from "axios";
import {addTodo, getTodos, searchTodo} from "../apis/todoAPI";


const TodoSearcher = () => {
    const [text, setText] = useState("")
    const {dispatch} = useContext(TodoContext)
    const handleChange = (event) => {
        setText(event.target.value)
    }
    const handleSearch = async () => {
       const searchResult = await searchTodo(text);
       console.log("search.....",searchResult)
       dispatch({type:'INIT',payload:[searchResult]})

    }
    return (
        <div>
            <input  value={text} onChange={handleChange}/>
            <button onClick={handleSearch} className="blue-button">Search</button>
        </div>
    )
}
export default TodoSearcher