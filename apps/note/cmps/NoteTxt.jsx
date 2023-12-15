export function NoteTxt({cmpType, info, noteId, onContentChange}) {

    return (
        <section>
            <h2 
            id="title" 
            className="content-editable-placeholder"
            contentEditable="true" 
            data-placeholder="title here..."
            suppressContentEditableWarning={true} 
            
            style={{ outline: "none"}} 
            onBlur={(event) => onContentChange(event, noteId)}>
                {info.title}
                </h2>

            <h3 
            id="txt" 
            className="content-editable-placeholder"
            contentEditable="true" 
            data-placeholder="txt here..."
            suppressContentEditableWarning={true}
            style={{ outline: "none" }} 
            onBlur={(event) => onContentChange(event, noteId)}
            >
                {info.txt}
                </h3>
        </section>
    )
}