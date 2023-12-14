export function NoteTxt({cmpType, info, noteId, onContentChange}) {

    return (
        <section>
            <h2 
            id="title" 
            contentEditable="true" 
            suppressContentEditableWarning={true} 
            style={{ outline: "none" }} 
            onBlur={(event) => onContentChange(event, noteId)}>
                {info.title}
                </h2>

            <h3 
            id="txt" 
            contentEditable="true" 
            suppressContentEditableWarning={true}
            style={{ outline: "none" }} 
            onBlur={(event) => onContentChange(event, noteId)}
            >
                {info.txt}
                </h3>
        </section>
    )
}