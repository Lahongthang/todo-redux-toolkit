import { useSelector, useDispatch } from "react-redux"
import { selectTodoById, updateTodo } from "./todosSlice"

const TodoListItem = ({id}) => {
    const dispatch = useDispatch()
    const todo = useSelector(state => selectTodoById(state, id))

    const {text, completed, color} = todo

    const handleChanged = () => {
        dispatch(updateTodo({id, completed}))
    }

    return (
        <li>
            <div>
                <input
                    type='checkbox'
                    checked={completed}
                    onChange={handleChanged}
                />
            </div>
        </li>
    )
}

export default TodoListItem