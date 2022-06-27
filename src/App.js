import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { selectTodos, AddTodo, selectEntities } from './features/todos/todosSlice'
import TodoList from './features/todos/TodoList'
import Header from './features/header/Header'

function App() {
  const entities = useSelector(selectEntities)
  console.log('entities: ', entities)

  return (
    <div className="App">
      <Header/>
      <TodoList/>
    </div>
  )
}

export default App
