export function NoteImg({ cmpType, info, noteId, onContentChange }) {

    return (
        <React.Fragment>
            <h3
                id="title"
                className="content-editable-placeholder"
                contentEditable="true"
                spellcheck="false" 
                data-placeholder="Enter your title here..."
                suppressContentEditableWarning={true}
                onBlur={(event) => onContentChange(event, noteId)}
            >
                {info.title}
            </h3>
            <img className="width100 note-img notes-inner-txt" src={info.url} alt="" />

            <div className="url-txt flex align-baseline">
                                
                {/* <img className="icon-link" src="./assets/icons/icon-link.png" alt="" /> */}
                <i className="icon-link fa-solid fa-link"> </i>
                <h4
                    id="url"
                    className=" content-editable-placeholder notes-inner-txt "
                    contentEditable="true"
                    spellcheck="false"
                    data-placeholder="URL here..."
                    suppressContentEditableWarning={true}
                    onBlur={(event) => onContentChange(event, noteId)}
                >
                    {info.url}
                </h4>
            </div>
        </React.Fragment>
    )
}