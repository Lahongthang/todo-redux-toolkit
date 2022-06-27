import {createEntityAdapter, createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const todosAdapter = createEntityAdapter()

const initialState = todosAdapter.getInitialState({
    status: 'idle',
    links: {},
    meta: {}
})

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await fetch('http://localhost:8000/api/todos?pageSize=3')
        .then(res => res.json())
    console.log('response: ', response)
    return response
})

export const AddTodo = createAsyncThunk('todos/addTodo', async newTodo => {
    const response = await fetch(`http://localhost:8000/api/todos?text=${newTodo}`, {method: 'POST'})
        .then(res => res.json())
    console.log('add response: ', response)
    return response
})

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchTodos.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                console.log('payload: ', action.payload)
                state.status = 'idle'
                state.links = action.payload.links
                state.meta = action.payload.meta
                todosAdapter.upsertMany(state, action.payload.data)
            })
            .addCase(AddTodo.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(AddTodo.fulfilled, (state, action) => {
                state.status = 'idle'
                todosAdapter.addOne(state, action.payload.data)
            })
    }
})

export const {
    selectAll: selectTodos,
    selectById: selectTodoById,
    selectIds: selectTodoIds
} = todosAdapter.getSelectors(state => state.todos)

export default todosSlice.reducer