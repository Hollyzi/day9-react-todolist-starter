import {createContext, useReducer} from "react";
import './App.css';
import TodoList from "./components/TodoList";
import {allTodoState, initialState, todoReducer} from "./context/todoReducer";
import {BrowserRouter as Router, Link, Navigate, Route, Routes} from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import DoneList from "./components/DoneList";
import HelpPage from "./components/HelpPage";
import HardStop from "./components/HardStop";

export const TodoContext = createContext();

function App() {
    const [state, dispatch] = useReducer(todoReducer, {init: initialState, all: allTodoState});

    return (
        <div className="App">
            <TodoContext.Provider value={{state, dispatch}}>
                <Router>
                    <nav>
                        <Link to={"/"}>Home</Link> | <Link to={"/done-list"}>DoneList</Link> | <Link
                        to={"/help"}>Help</Link>
                    </nav>
                    <Routes>
                        <Route path={"/"} element={<Navigate to="/todo-list"/>}></Route>
                        <Route path={"/todo-list"} element={<TodoList/>}></Route>
                        <Route path={"/done-list"} element={<DoneList/>}></Route>
                        <Route path={"/help"} element={<HelpPage/>}></Route>
                        <Route path={"/hard-stop"} element={<HardStop/>}></Route>
                        <Route path={"*"} element={<NotFoundPage/>}></Route>

                    </Routes>
                </Router>
            </TodoContext.Provider>
        </div>
    );
}

export default App;
