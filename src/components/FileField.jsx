const FileField = ({ label }) => {
    return (
        <div className="input-field">
            <div className="input-field-container">
                <label htmlFor="" name="">{label}</label>
                <div className="input-dummy">
                    <label htmlFor="id-proof" name="" className="input">Choose file</label>
                </div>
                <input type="file" name="id-proof" id="id-proof" className="hidden" placeholder="Choose file" />
            </div>
        </div>
    );
}

export default FileField;