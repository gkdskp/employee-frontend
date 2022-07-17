const SelectField = ({ label, options, handleChange }) => {
    return (
        <div className="input-field">
            <div className="input-field-container">
                <label htmlFor="" name="">{ label }</label>
                <select onChange={e => handleChange(e.target.value)}>
                    {options.map(option => <option key={option}>{ option }</option>)}
                </select>
            </div>
        </div>
    );
}

export default SelectField;