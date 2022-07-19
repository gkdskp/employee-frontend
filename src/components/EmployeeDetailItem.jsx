function EmployeeDetailItem(props) {
    const { label, content } = props;

    return (
        <div className="employee-detail-item">
            <div className="employee-detail-label">
                {label}
            </div>
            <div className="employee-detail-content">
                {content}
            </div>
        </div>
    )
}

export default EmployeeDetailItem;