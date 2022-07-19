import Table from "./Table";
import TrashIcon from "./TrashIcon";
import PencilIcon from "./PencilIcon";

function EmployeeTable(props) {
    const { tableHeaderItems, data, onDelete, onEdit } = props;

    return (
        <Table headerItems={tableHeaderItems}>
            {data.map((data, index) => (
                <tr className="card" key={index}>
                    <td>{data['name']}</td>
                    <td>{data['id']}</td>
                    <td>{data['joiningDate'].substring(0, 10)}</td>
                    <td>{data['role']}</td>
                    <td
                        className={`status status-${data['status']?.toLowerCase()}`}
                    ><div className="tag">{data['status']}</div></td>
                    <td>{data['experience']} Years</td>
                    <td>
                        <TrashIcon onClick={() => onDelete(data['id'])} />
                        <PencilIcon onClick={() => onEdit(data['id'])} />
                    </td>
                </tr>
            ))}
        </Table>
    );
}

export default EmployeeTable;