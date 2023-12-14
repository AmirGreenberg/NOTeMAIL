import { ColorPicker } from "./ColorPicker.jsx"
const { useState} = React



export function EditorPanel({ noteId, onRemoveNote,onSetBgColor,onDuplicate, onTypeChange }) {
    
    const [isColorPicker, setIsColorPicker] = useState(false)
    

    function toggleClrPicker(){
        setIsColorPicker(prevState => !prevState)
    }

    return (
        <section className="editor-panel">
            {isColorPicker &&  <ColorPicker noteId={noteId} toggleClrPicker={toggleClrPicker} onSetBgColor={onSetBgColor}/>}
            <button onClick={() => toggleClrPicker()}>color</button>
            <button onClick={() => onDuplicate(noteId)}>duplicate</button>
            <button onClick={() => onTypeChange('NoteImg',noteId)}>to image</button>
            <button onClick={() => onTypeChange('NoteTxt',noteId)}>to txt</button>
            <button onClick={() => onTypeChange('NoteTodos',noteId)}>to list</button>
            <button onClick={() => onRemoveNote(noteId)}>Remove Note</button>
        </section>

    )
}