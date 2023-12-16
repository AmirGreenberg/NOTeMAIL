export function NoteTodos({ cmpType, info, noteId, onTodoInputChange, onDoneToggle, onRemoveTodo, onContentChange }) {


    function onTodoInput(ev) {
        onTodoInputChange(ev.target.value, noteId)
        ev.target.value = ''
    }

    if (!info.todos) return <section>Loading...</section>
    return (
        <React.Fragment>
        <h3
            id="title"
            className="content-editable-placeholder notes-inner-txt"
            contentEditable="true"
            data-placeholder="Enter your title here..."
            suppressContentEditableWarning={true}
            onBlur={(event) => onContentChange(event, noteId)}
        >
            {info.title}
        </h3>

        <ul className="note-todos-ul">
            {info.todos.map((todo, idx) => {
                return (

                    <li key={idx} className="todo-li-row clean-list grid grid-auto-column ">
                        <div>
                        <input defaultChecked={todo.isDone} onClick={() => onDoneToggle(noteId, todo.id)} 
                        
                        type="checkbox" name="todoItem" />

                        <label className="to-do-label to-do-txt content-editable-placeholder notes-inner-txt"
                            style={{textDecorationLine: todo.isDone ? 'line-through' : 'none' }}
                            htmlFor="todoItem"
                            contentEditable="true"
                            suppressContentEditableWarning={true}>
                            {todo.txt}
                        </label>
                        </div>
                        <button className="todo-list-btn btn clean-btn"
                            onClick={() => onRemoveTodo(noteId, todo.id)}>
                            <img className="icon-remove-todo" src="./assets/icons/icon-remove.png" alt="" />
                        </button>
                    </li>
                )
            }
            )}
        </ul>

        <section className="todo-input-section flex align-center">
            <img className="icon-plus btn" src="./assets/icons/icon-plus.png" alt="" />

            <input className="to-do-input input-cleaner"
                onBlur={(event) => onTodoInput(event)}
                type="text"
                name="title"
                placeholder="To Do..."
                style={{ outline: "none" }} />
        </section>
        </React.Fragment>
    )


}

