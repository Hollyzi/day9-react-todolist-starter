import {useContext} from "react";
import TodoItem from "./TodoItem";
import {TodoContext} from "../App";

const DoneList = () => {
    const {state} = useContext(TodoContext)
    let filter = state.filter(todo => todo.done);
    console.log("state......",state)
    return (<div>
            {
                filter.map((value) => {
                    return <div>{value.text}</div>
                })
            }
        </div>

    )
}
export default DoneList