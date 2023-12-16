import { ColorPicker } from "./ColorPicker.jsx"
const { useState } = React

export function EditorPanel({ noteId, onSaveNote, isNewNote, onRemoveNote, onSetBgColor, onDuplicate, onTypeChange }) {

    const [isColorPicker, setIsColorPicker] = useState(false)

    function toggleClrPicker() {
        setIsColorPicker(prevState => !prevState)
    }
    
    // function closeClrPicker() {
    //     setIsColorPicker(false)
    // }

    return (
        <section className="editor-panel">
            {/* add */}
            {isNewNote && <button className="clean-btn btn" onClick={onSaveNote} title="Add">
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
            <button className="clean-btn btn" onClick={() => onTypeChange('NoteImg', noteId)} title="New image note">
                <img className="icon-img" src="./assets/icons/icon-img.png" alt="" />
               </button>

            {/* txt */}
            <button className="clean-btn btn" onClick={() => onTypeChange('NoteTxt', noteId)} title="New text note">
                <img className="icon-txt" src="./assets/icons/icon-txt.png" alt="" />
                </button>

            {/* list */}
            <button className="clean-btn btn" onClick={() => onTypeChange('NoteTodos', noteId)} title="New list note">
                <img className="icon-list" src="./assets/icons/icon-list.png" alt="" />
                </button>

            {/* duplicate */}
            {!isNewNote && <button className="clean-btn btn" onClick={() => onDuplicate(noteId)} title="Duplicate note">
                <img className="icon-duplicate" src="./assets/icons/icon-duplicate.png" alt="" />
                </button>}

            {/* remove */}
            {!isNewNote && <button className="clean-btn btn" onClick={() => onRemoveNote(noteId)} title="Remove note">
                <img className="icon-remove" src="./assets/icons/icon-remove.png" alt="" />
                </button>}


        </section>

    )
}