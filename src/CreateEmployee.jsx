import Button from './components/Button';
import InputField from './components/InputField';
import SelectField from './components/SelectField';
import FileField from './components/FileField';
// import Button from './components/Button';

function CreateEmployee() {
    const inputFields = [{
        label: 'Employee Name'
    }, {
        label: 'Employee Email',
        type: 'email'
    }, {
        label: 'Employee ID',
    }, {
        label: 'Joining Date',
        type: 'date'
    }, {
        label: 'Experience'
    }, {
        label: 'Address'
    }];

    return (
        <div id="container">
            <main>
                <section id="header">
                    <h1>Create Employee</h1>
                </section>

                <section id="form">
                    <form id="employee-form">
                        <div id="form-container">
                            {inputFields.map(
                                inputField => 
                                    <InputField 
                                        key={inputField.label} 
                                        label={inputField.label} 
                                        type={inputField.type} 
                                    />
                            )}
                            <SelectField label={'Role'} options={['Choose Role']} />
                            <SelectField label={'Status'} options={['Choose Status']} />
                            <FileField label={'Upload ID Proof'} />
                        </div>
                        <div id="form-buttons">
                            <Button handleClick={() => { }} label={'Create'} />
                            <Button handleClick={() => { }} label={'Cancel'} />
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default CreateEmployee;