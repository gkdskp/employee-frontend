function Popup(props) {
    const { title, body, actions } = props;

    return (
        <>
            <div className="overlay"></div>
            <div className="popup-container">
                <span className="popup-title">{title}</span>
                <span className="popup-body">{body}</span>
                <div className="form-buttons">
                    {actions}
                </div>
            </div>

        </>
    )
}

export default Popup;