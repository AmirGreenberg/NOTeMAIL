export function NoteTxt({cmpType, info, onContentChange}) {

console.log('insideTxt')
    return (
        <section>
            <h2 id="title" contentEditable="true" style={{ outline: "none" }} onBlur={onContentChange}>{info.title}</h2>
            <h4 id="txt" contentEditable="true" style={{ outline: "none" }} onBlur={onContentChange}>{info.txt}</h4>
        </section>
    )
}