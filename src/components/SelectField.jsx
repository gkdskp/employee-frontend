function SelectField(props) {
    const { label, options, handleChange, value } = props;

    return (
        <div className="input-field">
            <div className="input-field-container">
                <label htmlFor="" name="">{ label }</label>
                <select 
                    onChange={e => handleChange(e.target.value)}
                    value={value}
                >
                    {options.map(option => 
                        <option key={option}>{ option }</option>
                    )}
                </select>
            </div>
        </div>
    );
}

export default SelectField;