import {useContext} from "react";
import {TodoContext} from "../App";
import TodoItem from "./TodoItem";

const TodoGroup = () => {
    const {state} = useContext(TodoContext)
    const {init, all} = state
    const TodoItems = init.map((value, index) => {
        return <TodoItem key={value.id + index} todo={value}></TodoItem>
    });

    const todoItems = (
        <div>
            {
                TodoItems
            }
        </div>
    )
    const emptyOutput = (
        <div>Add things you to do today</div>
    )
    return (
        init&&init.length ? todoItems : emptyOutput
    )
}
export default TodoGroup