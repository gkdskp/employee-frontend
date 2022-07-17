function SideBar(props) {
    // const { navigationItems } = props;

    return (
        <aside>
            <div id="logo">
                <a href="/"><img src="assets/logo.png" alt="KeyValue logo" /></a>
            </div>
            <nav id="side-nav">
                <ul>
                    <li>
                        <a href="/" className="current">
                            <img src="assets/list.png" alt="list icon" />
                            Employee list
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default SideBar;