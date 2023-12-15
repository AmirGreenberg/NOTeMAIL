export function NoteTodos({ cmpType, info, noteId, onTodoInputChange, onDoneToggle, onRemoveTodo, onContentChange }) {


    function onTodoInput(ev) {
        onTodoInputChange(ev.target.value, noteId)
        ev.target.value = ''
    }

    if (!info.todos) return <section>Loading...</section>
    return (<React.Fragment>
        <h2
            id="title"
            className="content-editable-placeholder"
            contentEditable="true" 
            data-placeholder="Enter your title here..."
            suppressContentEditableWarning={true}
            style={{ outline: "none" }}
            onBlur={(event) => onContentChange(event, noteId)}
        >
            {info.title}
        </h2>

        <ul className="note-todos">
            {info.todos.map((todo, idx) => {
                return (

                    <li key={idx} className="todo clean-list">
                        <input defaultChecked={todo.isDone} onClick={() => onDoneToggle(noteId, todo.id)} type="checkbox" name="todoItem" />
                        <label
                            style={{ outline: "none", textDecorationLine: todo.isDone ? 'line-through' : 'none' }}
                            htmlFor="todoItem"
                            contentEditable="true"
                            suppressContentEditableWarning={true}>
                            {todo.txt}
                        </label>
                        <button onClick={() => onRemoveTodo(noteId, todo.id)}>remove</button>
                    </li>
                )
            }
            )}
        </ul>

        <input
            onBlur={(event) => onTodoInput(event)}
            type="text"
            name="title"
            placeholder="To Do..."
            style={{ outline: "none" }} />
        <img className="add-todo-icon btn" src="../../assets/icons/asset 43.svg" alt="" />
    </React.Fragment>
    )


}

