import Button from '../components/Button';
import InputField from '../components/InputField';
import SelectField from '../components/SelectField';
import FileField from '../components/FileField';
import '../styles/style.css';
import { useState } from 'react';
import MainContainer from '../components/MainContainer';

function CreateEmployee(props) {
  const { onSubmit, onCancel } = props;
  const [newEmployee, setNewEmployee] = useState({});

  const handleChange = (name, value) => {
    console.log(newEmployee);
    setNewEmployee({
      ...newEmployee,
      [name]: value
    })
  }

  const inputFields = [
    { label: 'Employee Name', name: 'name' },
    { label: 'Employee Email', type: 'email', name: 'email' },
    { label: 'Employee ID', name: 'id' },
    { label: 'Joining Date', type: 'date', name: 'joiningDate' },
    { label: 'Experience', name: 'experience' },
    { label: 'Address', name: 'address' }
  ];

  return (
    <MainContainer title="Create Employee">
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
            />
            <SelectField
              label={'Status'}
              options={['Choose Status', 'Probation', 'Active', 'Inactive']}
              handleChange={value => handleChange('status', value)}
            />
            <FileField label={'Upload ID Proof'} />
          </div>
          <div id="form-buttons">
            <Button handleClick={() => {
              onSubmit(newEmployee);
            }}
              label={'Create'}
              variant="primary"
            />
            <Button
              handleClick={onCancel}
              label={'Cancel'}
              variant="outlined"
            />
          </div>
        </form>
      </section>
    </MainContainer>
  );
}

export default CreateEmployee;