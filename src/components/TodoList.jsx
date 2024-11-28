import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";

const TodoList = () => {
  return (
      <div>
          <h1>Todo List</h1>
        <TodoGroup></TodoGroup>
          <TodoGenerator></TodoGenerator>
      </div>

  );
}

export default TodoList