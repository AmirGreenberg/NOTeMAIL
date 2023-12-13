import { DataTableRow } from './DataTableRow.jsx'

export function DataTable({ mails, onRemoveMail }) {
    return (
        <table border="1">
            <tbody>
                {mails.map((mail) => (
                    <DataTableRow
                        key={mail.id}
                        mail={mail}
                        onRemoveMail={onRemoveMail}
                    />
                ))}
            </tbody>
        </table>
    )
}
