import {useContext} from "react";
import TodoItem from "./TodoItem";
import {TodoContext} from "../App";

const DoneList = () => {
    const {state} = useContext(TodoContext)
    const{all}=state
    let filterDone = all.filter(todo => todo.done);
    return (<div>
            {
                filterDone.map((value) => {
                    return <div key={value.id}>{value.text}</div>
                })
            }
        </div>

    )
}
export default DoneList