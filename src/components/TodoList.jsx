import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";

const TodoList = () => {
  return (
      <div>This is the TodoList Component.
        <TodoGroup></TodoGroup>
          <TodoGenerator></TodoGenerator>
      </div>

  );
}

export default TodoList