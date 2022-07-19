function SideBar(props) {
    const { navigationItems } = props;

    return (
        <aside>
            <div id="logo">
                <a href="/"><img src="/assets/logo.png" alt="KeyValue logo" /></a>
            </div>
            <nav id="side-nav">
                <ul>
                    {navigationItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.route} className="current">
                                <img src={item.imgSrc} alt={item.alt} />
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside >
    );
}

export default SideBar;