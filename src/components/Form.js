export default function Form({newTodo,setNewTodo, addTodo}) {
    return (
        <div>
            <input type="text" placeholder="Enter Your Todo Item" value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={() => addTodo(newTodo, setNewTodo)}>Add Todo</button>
        </div>
    )
}