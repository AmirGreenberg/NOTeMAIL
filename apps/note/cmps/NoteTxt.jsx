export function NoteTxt({ cmpType, info, noteId, onContentChange }) {

    return (
        <React.Fragment>

            <h3
                id="title"
                className="content-editable-placeholder notes-inner-txt"
                contentEditable="true"
                data-placeholder="I'm all new..."
                suppressContentEditableWarning={true}

                style={{ outline: "none" }}
                onBlur={(event) => onContentChange(event, noteId)}>
                {info.title}
            </h3>

            <h4
                id="txt"
                className="content-editable-placeholder notes-inner-txt"
                contentEditable="true"
                data-placeholder="txt here..."
                suppressContentEditableWarning={true}
                style={{ outline: "none" }}
                onBlur={(event) => onContentChange(event, noteId)}
            >
                {info.txt}
            </h4>

        </React.Fragment>
    )
}