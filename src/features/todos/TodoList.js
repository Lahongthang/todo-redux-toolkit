import { useSelector } from "react-redux"
import { selectTodoIds } from "./todosSlice"
import TodoListItem from "./TodoListItem"

const TodoList = () => {
    const todoIds = useSelector(selectTodoIds)
    console.log('todoIds: ', todoIds)

    const renderedListItem = todoIds.map(id => <TodoListItem key={id} id={id}/>)

    return (
        <div>
            <ul>{renderedListItem}</ul>
        </div>
    )
}

export default TodoList