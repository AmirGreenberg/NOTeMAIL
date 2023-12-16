import { ColorPicker } from "./ColorPicker.jsx"
const { useState } = React

export function EditorPanel({ noteId, cmpType, onSaveNote, isNewNote, onRemoveNote, onSetBgColor, onDuplicate, onTypeChange }) {

    const [isColorPicker, setIsColorPicker] = useState(false)

    function toggleClrPicker() {
        setIsColorPicker(prevState => !prevState)
    }

    return (
        <section className="editor-panel">
            {/* add */}
            {isNewNote && <button className="clean-btn btn" onClick={onSaveNote} title="Add the Note">
                <img className="icon-add" src="./assets/icons/icon-add.png" alt="" />
                </button>}

            {/* color picker */}
            {isColorPicker && <ColorPicker 
            noteId={noteId} 
            toggleClrPicker={toggleClrPicker}
            onSetBgColor={onSetBgColor} 
            />}
            
            {/* pallet */}
            <button className="clean-btn btn" onClick={() => toggleClrPicker()} title="Background color">
                 <img className="icon-pallet" src="./assets/icons/icon-pallet.png" alt="" />
                  </button>

            {/* img */}
            { cmpType !== 'NoteImg' &&
            <button className="clean-btn btn" onClick={() => onTypeChange('NoteImg', noteId)} title="Image Note">
                <img className="icon-img" src="./assets/icons/icon-img.png" alt="" />
               </button>}

            {/* txt */}
            { cmpType !== 'NoteTxt' &&
            <button className="clean-btn btn" onClick={() => onTypeChange('NoteTxt', noteId)} title="Text Note">
                <img className="icon-txt" src="./assets/icons/icon-txt.png" alt="" />
                </button>}

            {/* list */}
            { cmpType !== 'NoteTodo' &&
            <button className="clean-btn btn" onClick={() => onTypeChange('NoteTodos', noteId)} title="List Note">
                <img className="icon-list" src="./assets/icons/icon-list.png" alt="" />
                </button>}

            {/* duplicate */}
            {!isNewNote && <button className="clean-btn btn" onClick={() => onDuplicate(noteId)} title="Duplicate Note">
                <img className="icon-duplicate" src="./assets/icons/icon-duplicate.png" alt="" />
                </button>}

            {/* remove */}
            {!isNewNote && <button className="clean-btn btn" onClick={() => onRemoveNote(noteId)} title="Remove Note">
                <img className="icon-remove" src="./assets/icons/icon-remove.png" alt="" />
                </button>}


        </section>

    )
}