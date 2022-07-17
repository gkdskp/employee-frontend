function Table(props) {
    const { headerItems, children } = props;

    return (
        <table>
            <thead className="card">
                <tr>
                    {headerItems.map(headerItem => (
                        <th>{headerItem}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    );
}

export default Table;