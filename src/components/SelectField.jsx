const SelectField = ({ label, options }) => {
    return (
        <div className="input-field">
            <div className="input-field-container">
                <label htmlFor="" name="">{ label }</label>
                <select>
                    {options.map(option => <option>{ option }</option>)}
                </select>
            </div>
        </div>
    );
}

export default SelectField;