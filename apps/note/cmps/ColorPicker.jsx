export function ColorPicker({noteId,onSetBgColor,toggleClrPicker}) {


    const colors = [
        'var(--clrBase)',
        'var(--clrSecondery1)',
        'var(--clrSecondery2)',
        'var(--clrSecondery3)',
        'var(--clrSecondery4)',
        'var(--clrSecondery5)',
        'var(--clrSecondery6)']


function onColorSelect(selectedColor){
    onSetBgColor(selectedColor,noteId)
    toggleClrPicker()
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