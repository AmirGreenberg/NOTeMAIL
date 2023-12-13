import { DataTableRow } from "./DataTableRow.jsx";

export function DataTable({ mails }) {
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Vendor</th>
                    <th>Speed</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {mails.map(mail => <DataTableRow key={mail.id} mail={mail} />)}
            </tbody>
        </table>
    )
}
