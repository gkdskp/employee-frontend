import { useState } from "react";
import IconButton from "../components/IconButton";
import MainContainer from "../components/MainContainer";
import SelectField from "../components/SelectField";
import Table from "../components/Table";
import employeeList from "../service/mockData";
import CreateEmployee from "./CreateEmployee";

function EmployeeList() {
    const [employees, setEmployees] = useState(employeeList);
    const [isCreateScreen, setIsCreateScreen] = useState(false);

    const addEmployee = newEmployee => {
        console.log(newEmployee);

        setEmployees([
            ...employees,
            newEmployee
        ]);
        setIsCreateScreen(false);
    }

    const toggleCreateScreen = () => {
        setIsCreateScreen(!isCreateScreen);
    }

    const actions = [
        (
            <div className="action-container filter">
                <p>Filter By</p>
                <SelectField options={['Status']} />
            </div>
        ),
        (
            <div className="action-container icon-button">
                <IconButton
                    iconContent={"+"}
                    label="Create employee"
                    handleClick={toggleCreateScreen}
                />
            </div>
        )
    ];

    const tableHeaderItems = [
        "Employee Name",
        "Employee ID",
        "Joining Date",
        "Role",
        "Status",
        "Experience",
        "Actions"
    ];

    return !isCreateScreen ? (
        <MainContainer title="Employee List" actions={actions}>
            <Table headerItems={tableHeaderItems}>
                {employees.map((data, index) => (
                    <tr className="card" key={index}>
                        <td>{data['name']}</td>
                        <td>{data['employeeID']}</td>
                        <td>{data['joiningDate']}</td>
                        <td>{data['role']}</td>
                        <td
                            className={`status status-${data['status']?.toLowerCase()}`}
                        ><div className="tag">{data['status']}</div></td>
                        <td>{data['experience']} Years</td>
                        <td></td>
                    </tr>
                ))}
            </Table>
        </MainContainer>) : (
        <MainContainer title="Create Employee">
            <CreateEmployee onSubmit={addEmployee} onCancel={toggleCreateScreen} />
        </MainContainer>
    )
}

export default EmployeeList;