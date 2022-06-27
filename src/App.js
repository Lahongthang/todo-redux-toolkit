import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { selectTodos, AddTodo } from './features/todos/todosSlice'

function App() {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  console.log('state: ', state)
  const todos = useSelector(selectTodos)
  console.log('todos: ', todos)

  useEffect(() => {
    dispatch(AddTodo('Something'))
  }, [])

  return (
    <div className="App">
      
    </div>
  )
}

export default App
