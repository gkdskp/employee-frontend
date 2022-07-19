import IconButton from "../components/IconButton";
import MainContainer from "../components/MainContainer";
import SelectField from "../components/SelectField";
import { useDeleteEmployeeMutation, useGetEmployeesQuery } from '../api';
import { useNavigate } from "react-router-dom";
import EmployeeTable from "../components/EmployeeTable";

function EmployeeList() {
    const {data, error, isLoading} = useGetEmployeesQuery();
    const [deleteEmployee] = useDeleteEmployeeMutation();
    const navigate = useNavigate();

    const goToEditForm = (id) => {
        console.log("Hi");
        navigate('/edit', { state: { id }});
    }

    const actions = [
        (
            <div className="action-container filter" key="filter">
                <p>Filter By</p>
                <SelectField options={['Status']} />
            </div>
        ),
        (
            <div className="action-container icon-button" key="icon-button">
                <IconButton
                    iconContent={"+"}
                    label="Create employee"
                    handleClick={() => navigate('/edit')}
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

    if(isLoading) return (<p>Loading</p>);

    if(error) return (<p>error</p>);

    return (
        <MainContainer title="Employee List" actions={actions}>
            <EmployeeTable
                data={data['data']}
                tableHeaderItems={tableHeaderItems}
                onEdit={goToEditForm}
                onDelete={deleteEmployee}
            />
        </MainContainer>
    ); 
}

export default EmployeeList;