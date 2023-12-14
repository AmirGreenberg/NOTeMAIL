export function NoteTodos({ cmpType, info }) {

console.log('inside todos')

    if (!info.todos) return <section>Loading...</section>
    return (
        <ul className="note-todos">
           {info.todos.map((todo,idx) => 
            <React.Fragment>
            <li key={idx} className = "todo">
            <input onClick={()=>onMarkDone(todo.id)}type="checkbox" />
             {todo.txt}
            <button onClick={()=>onRemoveTodo(todo.id)}>remove</button>
            </li>
            </React.Fragment>
            )}
        </ul>
    )
}




// <ul className="note-list">
//     {notes.map(note =>
//         <li className="clean-list" key={note.id}>
//             <div className="note"
//                 style={{ backgroundColor: note.style.backgroundColor }}
//             >
//                 <NotePreview note={note} onUpdateNote={onUpdateNote} />
//                 <section>
//                     <button onClick={() => onRemoveNote(note.id)}>Remove Note</button>
//                 </section>
//             </div>
//         </li>
//     )}
// </ul>



// }
