import { useLoaderData } from "react-router-dom"
import { getTodos } from "../api/todos"
import { TodoItem } from "../components/TodoItem"

function TodoList() {
    const todos = useLoaderData()

    return <>
        <h1 className="page-title">Todos</h1>
      <ul>
        {todos.map(todos => (
            <TodoItem key={todos.id} {...todos} />
        ))}
      </ul>
    </>
}

function loader({ request: { signal }}) {
    return getTodos({ signal })
}

export const TodoListRouter = {
    loader,
    element: <TodoList /> 
}