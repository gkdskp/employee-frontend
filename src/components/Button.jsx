function Button(props) {
    const { label, handleClick, variant } = props;
    
    return (
        <button 
            onClick={e => { 
                e.preventDefault(); 
                handleClick(); 
            }} 
            className={variant}
        > { label } </button>
    );
}

export default Button;