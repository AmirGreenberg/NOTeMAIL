export function NoteTodos({ cmpType, info, noteId, onInputChange, onDoneToggle, onRemoveTodo }) {


    function onInput(ev) {
        onInputChange(ev.target.value, noteId)
        ev.target.value = ''
    }

    if (!info.todos) return <section>Loading...</section>
    return (<React.Fragment>
        <ul className="note-todos">
            {info.todos.map((todo, idx) => {
                return (
                    <li key={idx} className="todo clean-list">
                        <input defaultChecked={todo.isDone} onClick={() => onDoneToggle(noteId, todo.id)} type="checkbox" name="todoItem" />
                        <label style={{ textDecorationLine: todo.isDone ? 'line-through' : 'none' }} htmlFor="todoItem" contentEditable="true" suppressContentEditableWarning={true}>{todo.txt}</label>  
                        <button onClick={() => onRemoveTodo(noteId, todo.id)}>remove</button>
                    </li>
                )
            }
            )}
        </ul>

        <input onBlur={(event) => onInput(event)} type="text" name="title" placeholder="To Do..." /> <img src="../../assets/icons/asset 43.svg" alt=""  />
    </React.Fragment>
    )


}

