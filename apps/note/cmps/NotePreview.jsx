export function NotePreview({ note }) {
    return (
        <article className="note-preview">
            <h2>Note title: {note.info.title || note.info.txt}</h2>    
            <button onClick={()=>{}}>Delete</button> 
        </article>
    )
}