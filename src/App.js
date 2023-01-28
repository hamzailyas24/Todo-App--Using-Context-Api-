import { useState, useContext } from "react"
import "./App.css"
import TodosContext from './store/todoContext'
import Form from "./components/Form"
import TodoList from "./components/TodoList"

export default function App() {
    const todoContext = useContext(TodosContext)
    const [newTodo, setNewTodo] = useState('')

    return (
        <div>
            <h1>Todo App</h1>
            <Form newTodo={newTodo} setNewTodo={setNewTodo} addTodo={todoContext.addTodo}/>
            <TodoList todos = {todoContext.todos} handleChange = {todoContext.handleChange} 
                updateTodo = {todoContext.updateTodo} editTodo = {todoContext.editTodo}
                deleteTodo = {todoContext.deleteTodo}
            />
        </div>
    )
}