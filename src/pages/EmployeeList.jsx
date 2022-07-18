import { useEffect, useState } from "react";
import IconButton from "../components/IconButton";
import MainContainer from "../components/MainContainer";
import SelectField from "../components/SelectField";
import Table from "../components/Table";
import employeeList from "../service/mockData";
import CreateEmployee from "./CreateEmployee";
import { useGetEmployeesQuery } from '../api';

function EmployeeList() {
    // const [employees, setEmployees] = useState(employeeList);
    const [isCreateScreen, setIsCreateScreen] = useState(false);
    const {data, error, isLoading} = useGetEmployeesQuery();

    useEffect(() => {
        console.log(data);
    }, [data])

    const addEmployee = newEmployee => {
        console.log(newEmployee);

        // setEmployees([
        //     ...employees,
        //     newEmployee
        // ]);
        // setIsCreateScreen(false);
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

    if(isCreateScreen) return (
        <MainContainer title="Create Employee">
            <CreateEmployee 
                onSubmit={addEmployee} 
                onCancel={toggleCreateScreen} 
            />
        </MainContainer>
    );

    if(isLoading) return (<p>Loading</p>);

    if(error) return (<p>error</p>);

    return (
        <MainContainer title="Employee List" actions={actions}>
            <Table headerItems={tableHeaderItems}>
                {data['data'].map((data, index) => (
                    <tr className="card" key={index}>
                        <td>{data['name']}</td>
                        <td>{data['id']}</td>
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
        </MainContainer>
    ); 
}

export default EmployeeList;