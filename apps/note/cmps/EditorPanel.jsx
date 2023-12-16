import { ColorPicker } from "./ColorPicker.jsx"
const { useState } = React



export function EditorPanel({ noteId, onSaveNote, isNewNote, onRemoveNote, onSetBgColor, onDuplicate, onTypeChange }) {

    const [isColorPicker, setIsColorPicker] = useState(false)


    function toggleClrPicker() {
        setIsColorPicker(prevState => !prevState)
    }

    return (
        <section className="editor-panel">
            {/* add */}
            {isNewNote && <button className="clean-btn btn" onClick={onSaveNote}>
                <img className="icon-add" src="./assets/icons/icon-add.png" alt="" />
                </button>}

            {/* color picker */}
            {isColorPicker && <ColorPicker 
            noteId={noteId} 
            toggleClrPicker={toggleClrPicker}
            onSetBgColor={onSetBgColor} 
            />}
            
            {/* pallet */}
            <button className="clean-btn btn" onClick={() => toggleClrPicker()}>
                 <img className="icon-pallet" src="./assets/icons/icon-pallet.png" alt="" />
                  </button>

            {/* img */}
            <button className="clean-btn btn" onClick={() => onTypeChange('NoteImg', noteId)}>
                <img className="icon-img" src="./assets/icons/icon-img.png" alt="" />
               </button>

            {/* txt */}
            <button className="clean-btn btn" onClick={() => onTypeChange('NoteTxt', noteId)}>
                <img className="icon-txt" src="./assets/icons/icon-txt.png" alt="" />
                </button>

            {/* list */}
            <button className="clean-btn btn" onClick={() => onTypeChange('NoteTodos', noteId)}>
                <img className="icon-list" src="./assets/icons/icon-list.png" alt="" />
                </button>

            {/* duplicate */}
            {!isNewNote && <button className="clean-btn btn" onClick={() => onDuplicate(noteId)}>
                <img className="icon-duplicate" src="./assets/icons/icon-duplicate.png" alt="" />
                </button>}

            {/* remove */}
            {!isNewNote && <button className="clean-btn btn" onClick={() => onRemoveNote(noteId)}>
                <img className="icon-remove" src="./assets/icons/icon-remove.png" alt="" />
                </button>}


        </section>

    )
}