import XICon from "./XIcon";

function Popup(props) {
    const { title, body, actions, close } = props;

    return (
        <>
            <div className="overlay"></div>
            <div className="popup-container">
                <div className="popup-close-icon">
                    <XICon onClick={close} />
                </div>
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