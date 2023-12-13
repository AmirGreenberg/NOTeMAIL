export function NotePreview({ note }) {
    return (
        <article className="note-preview">
            <h2>{note.info.title || note.info.txt}</h2> 
            <h4>{note.info.txt}</h4>   
            
        </article>
    )
}