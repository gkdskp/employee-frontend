const Button = ({ label, handleClick, variant }) => {
    return (
        <button onClick={(e) => { e.preventDefault(); handleClick(); }} className={variant}>
            {label}
        </button>
    );
}

export default Button;