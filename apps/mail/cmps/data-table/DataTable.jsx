import { DataTableRow } from "./DataTableRow.jsx";

export function DataTable({ mails, onRemoveMail }) {
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>From</th>
                    <th>Subject</th>
                    <th>Body</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {mails.map(mail => <DataTableRow key={mail.id} mail={mail} onRemoveMail={onRemoveMail} />)}
            </tbody>
        </table>
    )
}
