const InputField = ({
    label,
    placeholder,
    value = "",
    handleChange = () => null,
    type = "text"
    // value
}) => {
    return (
        <div className="input-field">
            <div className="input-field-container">
                <label htmlFor="" name="">{ label }</label>
                <input 
                    type={type} 
                    name="name" 
                    placeholder={placeholder ?? label}
                    value={value}
                    onChange={e => handleChange(e.target.value)}
                />
            </div>
        </div>
    );
}

export default InputField;