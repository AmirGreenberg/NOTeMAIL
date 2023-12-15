export function NoteImg({cmpType, info, noteId, onContentChange}) {

    return(
       <section className="note-img">
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
        <img src={info.url} alt=""  />
       </section>
    )
}