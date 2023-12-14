import { ColorPicker } from "./ColorPicker.jsx"
const { useState} = React



export function EditorPanel({ noteId, onRemoveNote}) {
    
    const [isColorPicker, setIsColorPicker] = useState(false)
    

    function togglePicker(){
        setIsColorPicker(prevState => !prevState)
    }

    return (
        <section className="editor-panel">
            {isColorPicker &&  <ColorPicker/>}
            <button onClick={() => togglePicker()}>color</button>
            <button>duplicate</button>
            <button>to image</button>
            <button>to txt</button>
            <button>to list</button>
            <button onClick={() => onRemoveNote(noteId)}>Remove Note</button>
        </section>

    )
}