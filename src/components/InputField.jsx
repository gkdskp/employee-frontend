function InputField(props) {
    const {
        label,
        placeholder,
        value = "",
        handleChange = () => null,
        type = "text",
        name
    } = props;

    return (
        <div className="input-field">
            <div className="input-field-container">
                <label htmlFor="" name="">{ label }</label>
                <input 
                    type={type} 
                    name={name}
                    placeholder={placeholder ?? label}
                    value={value}
                    onChange={e => handleChange(e.target.value)}
                />
            </div>
        </div>
    );
}

export default InputField;