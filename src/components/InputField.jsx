const InputField = ({
    label,
    placeholder,
    type = "text"
    // value
}) => {
    return (
        <div className="input-field">
            <div className="input-field-container">
                <label htmlFor="" name="">{ label }</label>
                <input type={type} name="name" placeholder={placeholder ?? label} />
            </div>
        </div>
    );
}

export default InputField;