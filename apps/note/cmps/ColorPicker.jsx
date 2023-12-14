export function ColorPicker({noteId,SetBgColor,toggleClrPicker}) {


    const colors = [
        'var(--clrSecondery1)',
        'var(--clrSecondery2)',
        'var(--clrSecondery3)',
        'var(--clrSecondery4)',
        'var(--clrSecondery5)',
        'var(--clrSecondery6)']


function onColorSelect(selectedColor){

    SetBgColor(selectedColor,noteId)
    toggleClrPicker(noteId)
}

    return (
        <div className="color-picker">
            {colors.map(color => {
                return <div
                    key={color}
                    className="color-circle"
                    style={{ backgroundColor: color }}
                    onClick={() => onColorSelect(color)}
                >
                </div>
            })}
        </div>
    )
}