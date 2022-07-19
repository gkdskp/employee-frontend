import Button from '../components/Button';
import InputField from '../components/InputField';
import SelectField from '../components/SelectField';
import FileField from '../components/FileField';
import '../styles/style.css';
import { useEffect, useState } from 'react';
import MainContainer from '../components/MainContainer';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCreateEmployeeMutation, useEditEmployeeMutation, useGetEmployeeByIdQuery } from '../api';
import { inputFields } from '../utils';


function EmployeeForm() {
  const { state } = useLocation();
  const [newEmployee, setNewEmployee] = useState({});
  const navigate = useNavigate();
  const { data } = useGetEmployeeByIdQuery(state?.id, { skip: !state?.id });
  const [createEmployee] = useCreateEmployeeMutation();
  const [editEmployee] = useEditEmployeeMutation();

  useEffect(() => {
    if(state?.id && data) {
      const fetchedEmployee = data['data']
      setNewEmployee({
        name: fetchedEmployee.name ?? '',
        email: fetchedEmployee.email ?? '',
        id: fetchedEmployee.id ?? '',
        joiningDate: fetchedEmployee.joiningDate.substring(0, 10),
        experience: fetchedEmployee.experience ?? 0,
        address: fetchedEmployee.address ?? '',
        role: fetchedEmployee.role ?? 'Choose Role',
        status: fetchedEmployee.status ?? 'Choose Status'
      });
    }
  }, [data, state?.id])

  const handleChange = (name, value) => {
    setNewEmployee({
      ...newEmployee,
      [name]: value
    })
  }

  const onSubmit = () => {
    if(! state?.id) { createEmployee(newEmployee); }
    else { 
      editEmployee({ id: state?.id, newEmployee }); 
    }   
    goToDashboard();
  }

  const goToDashboard = () => {
    navigate('/employee')
  }



  return (
    <MainContainer 
      title={`${state?.id ? "Edit": "Create"} Employee`}>
      <section id="form">
        <form id="employee-form">
          <div id="form-container">
            {inputFields.map(
              inputField =>
                <InputField
                  key={inputField.label}
                  label={inputField.label}
                  type={inputField.type}
                  value={newEmployee[`${inputField.name}`]}
                  handleChange={value => handleChange(inputField.name, value)}
                />
            )}
            <SelectField
              label={'Role'}
              options={['Choose Role', 'Developer', 'DevOps', 'QA']}
              handleChange={value => handleChange('role', value)}
              value={newEmployee['role']}
            />
            <SelectField
              label={'Status'}
              options={['Choose Status', 'Probation', 'Active', 'Inactive']}
              handleChange={value => handleChange('status', value)}
              value={newEmployee['status']}
            />
            <FileField label={'Upload ID Proof'} />
          </div>
          <div id="form-buttons">
            <Button handleClick={onSubmit}
              label={`${state?.id ? "Edit": "Create"}`}
              variant="primary"
            />
            <Button
              handleClick={goToDashboard}
              label={'Cancel'}
              variant="outlined"
            />
          </div>
        </form>
      </section>
    </MainContainer>
  );
}

export default EmployeeForm;