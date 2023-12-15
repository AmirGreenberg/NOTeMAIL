import { ColorPicker } from "./ColorPicker.jsx"
const { useState} = React



export function EditorPanel({ noteId, onSaveNote, isNewNote, onRemoveNote,onSetBgColor,onDuplicate, onTypeChange }) {
    
    const [isColorPicker, setIsColorPicker] = useState(false)
    

    function toggleClrPicker(){
        setIsColorPicker(prevState => !prevState)
    }

    return (
        <section className="editor-panel">
            {isNewNote && <button className="clean-btn" onClick={onSaveNote}>Add</button>}
            {isColorPicker &&  <ColorPicker noteId={noteId} toggleClrPicker={toggleClrPicker} onSetBgColor={onSetBgColor}/>}
            <button className="clean-btn" onClick={() => toggleClrPicker()}> color <img src="./assets/icons/pallet.svg" alt=""/></button>
            <button className="clean-btn"onClick={() => onTypeChange('NoteImg',noteId)}>to image</button>
            <button className="clean-btn"onClick={() => onTypeChange('NoteTxt',noteId)}>to txt</button>
            <button className="clean-btn"onClick={() => onTypeChange('NoteTodos',noteId)}>to list</button>
            {!isNewNote && <button className="clean-btn" onClick={() => onDuplicate(noteId)}>duplicate</button>}
            {!isNewNote && <button className="clean-btn" onClick={() => onRemoveNote(noteId)}>Remove Note</button>}
            
        </section>

    )
}