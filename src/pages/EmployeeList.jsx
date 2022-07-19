import IconButton from "../components/IconButton";
import MainContainer from "../components/MainContainer";
// import SelectField from "../components/SelectField";
import { useDeleteEmployeeMutation, useGetEmployeesQuery } from '../api';
import { useNavigate } from "react-router-dom";
import EmployeeTable from "../components/EmployeeTable";
import { useState } from "react";
import Popup from "../components/Popup";
import Button from "../components/Button";

function EmployeeList() {
    const {data, error, isLoading} = useGetEmployeesQuery();
    const [deleteEmployee] = useDeleteEmployeeMutation();
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const [idToDelete, setIdToDelete] = useState(null);

    const goToEditForm = (id) => {
        navigate('/edit', { state: { id }});
    }

    const goToEmployeeDetail = (id) => {
        navigate(`/employee/${id}`);
    }

    const confirmDelete = (id) => {
        setIdToDelete(id);
        setShowPopup(true);
    }

    const deleteButtonClick = () => {
        if(idToDelete) deleteEmployee(idToDelete);
        setShowPopup(false);
        setIdToDelete(null);
    }
    
    const cancelButtonClick = () => {
        setIdToDelete(null);
        setShowPopup(false);
    }

    const popupActions = [
        <Button 
            variant={'primary'} 
            label={'Confirm'} 
            handleClick={deleteButtonClick}
        />,

        <Button 
            variant={'outlined'} 
            label={'Cancel'}
            handleClick={cancelButtonClick}
        />
    ]

    const actions = [
        // (
        //     <div className="action-container filter" key="filter">
        //         <p>Filter By</p>
        //         <SelectField options={['Status']} />
        //     </div>
        // ),
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
        <>
            {showPopup && (
                <Popup 
                    title="Are you sure?"
                    body="Do you really want to delete employee"
                    actions={popupActions}
                    close={cancelButtonClick}
                />
            )}
            <MainContainer title="Employee List" actions={actions}>
                <EmployeeTable
                    data={data['data']}
                    tableHeaderItems={tableHeaderItems}
                    onEdit={goToEditForm}
                    onDelete={confirmDelete}
                    onClick={goToEmployeeDetail}
                />
            </MainContainer>
        </>
    ); 
}

export default EmployeeList;