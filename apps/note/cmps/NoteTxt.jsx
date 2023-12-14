export function NoteTxt({cmpType, info, onContentChange}) {

    return (
        <section>
            <h2 id="title" contentEditable="true" suppressContentEditableWarning={true} style={{ outline: "none" }} onBlur={onContentChange}>{info.title}</h2>
            <h4 id="txt" contentEditable="true" suppressContentEditableWarning={true} style={{ outline: "none" }} onBlur={onContentChange}>{info.txt}</h4>
        </section>
    )
}