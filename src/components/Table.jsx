function Table(props) {
    const { headerItems, children } = props;

    return (
        <table>
            <thead className="card">
                <tr>
                    {headerItems.map(headerItem => (
                        <th key={headerItem}>{ headerItem }</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                { children }
            </tbody>
        </table>
    );
}

export default Table;