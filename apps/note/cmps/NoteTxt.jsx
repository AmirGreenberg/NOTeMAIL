export function NoteTxt({cmpType, info, noteId, onContentChange}) {
    // const [title,setTitle] = useState('')
    // const [txt,setTitle] = useState('')


    return (
        <section>
   
            <h2 
            id="title" 
            className="content-editable-placeholder"
            contentEditable="true" 
            data-placeholder="I'm all new..."
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