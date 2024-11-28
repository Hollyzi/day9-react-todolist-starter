//get context data
import {useContext} from "react";
import {TodoContext} from "../App";
import TodoItem from "./TodoItem";

const TodoGroup = () => {
    const {state} = useContext(TodoContext)
    const todoItems = (
        <div>
            {
                state.map((value, index) => {
                    return <TodoItem key={value.id + index} todo={value}></TodoItem>
                })
            }
        </div>
    )
    const emptyOutput = (
        <div>Add things you to do today</div>
    )
    return (
        state.length ? todoItems : emptyOutput
    )
}
export default TodoGroup