export function NoteImg({cmpType, info, noteId, onContentChange}) {

    return(
       <section className="note-img width100" >
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
        <img className="width100" src={info.url} alt=""  />
       
        <h3 
            id="url" 
            className="content-editable-placeholder"
            contentEditable="true" 
            data-placeholder="URL here..."
            suppressContentEditableWarning={true}
            style={{ outline: "none" }} 
            onBlur={(event) => onContentChange(event, noteId)}
            >
                {info.url}
                </h3>
       
       </section>
    )
}