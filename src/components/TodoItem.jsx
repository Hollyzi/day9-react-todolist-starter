import {useContext, useState} from "react";
import {TodoContext} from "../App";
import "../style/line_through.css"
import {DONE, DELETE, INIT, SETALL} from "../context/todoReducer"
import {deleteTodo, getTodos, updateTodo} from "../apis/todoAPI";
import {Modal} from "antd";
import TextArea from "antd/es/input/TextArea";

const TodoItem = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [inputValue, setInputValue] = useState({text: props.todo.text});
    const {dispatch} = useContext(TodoContext)

    const handleDelete = () => {
        deleteTodo(props.todo.id).then((reponse) => console.log("delete successfully", reponse));
        dispatch({type: DELETE, payload: props.todo})
    }
    const handleDone = () => {
        updateTodo(props.todo.id,{done:!(props.todo.done)});
        dispatch({type: DONE, payload: props.todo})
    }
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleOk = () => {
        if (inputValue.text !== props.todo.text && inputValue.text.trim()) {
            updateTodo(props.todo.id, inputValue).then(() => {
                getTodos().then((getTodos) => {
                    dispatch({type:SETALL,payload:getTodos})
                })
            })
        }
        setIsModalOpen(false);
    };
    const handleChange = (event) => {
        if (event.target.value.trim()) {
            setInputValue
            ({
                text: (event.target.value)
            });
        }

    };
    return (
        <div>
            <div className="text-border" onClick={showModal}>
                <span onClick={handleDone} className={props.todo.done?"done-item":""}>
                    {props.todo.text}
                </span>
            </div>
            <button onClick={handleDelete}>X</button>
            <Modal title="update Todo" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <TextArea row={4} defaultValue={props.todo.text} maxLength={100} onChange={handleChange}></TextArea>
            </Modal>
        </div>
    )
}
export default TodoItem