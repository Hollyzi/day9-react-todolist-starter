import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import {useContext, useEffect, useState} from "react";
import {getTodos} from "../apis/todoAPI";
import {TodoContext} from "../App";
import TodoSearcher from "./TodoSearcher";
import {Pagination, Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

const TodoList = () => {
    const [loading, setLoading] = useState(false)
    const {dispatch,state} = useContext(TodoContext)
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(5)
    const [todos, setTodos] = useState([])

    const renderTodos = () => {
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize - 1;
        const TodoItemByPage = todos.slice(startIndex, endIndex);
        dispatch({type: 'INIT', payload: TodoItemByPage})
    }
    const handlePageChange = (event) => {
        setPage(event);
    }
    useEffect(() => {
        renderTodos()
    }, [todos, page])
    useEffect(() => {
        setLoading(true);
        getTodos().then((getTodos) => {
            setTodos(getTodos)
        }).finally(() => {
            setLoading(false)
        });
    }, []);

    return (
        <div>
            <h1>Todo List</h1>
            {loading ? <Spin indicator={<LoadingOutlined spin/>} size="large"/> : <TodoGroup></TodoGroup>}
            <Pagination defaultCurrent={1} total={50} align={"center"} pageSize={5} onChange={handlePageChange}/>
            <TodoGenerator></TodoGenerator>
            <TodoSearcher/>
        </div>
    );
}

export default TodoList