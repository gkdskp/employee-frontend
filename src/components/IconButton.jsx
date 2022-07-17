function IconButton({ iconContent, label, handleClick }) {
    return (
        <div className="icon-button flex" onClick={handleClick}>
            <div className="circle flex">
                { iconContent }
            </div>
            <div className="icon-button-text">
                { label }
            </div>
        </div>
    );
}

export default IconButton;