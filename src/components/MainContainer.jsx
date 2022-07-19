import SideBar from "./Sidebar";

function MainContainer(props) {
    const { title, actions, children } = props;

    const navigationItems = [{ 
        route: '/employee', 
        imgSrc: '/assets/list.png', 
        alt: 'list icon', 
        label: 'Employee list' 
    }];

    return (
        <>
            <SideBar navigationItems={navigationItems} />
            <div id="container">
                <main className="main-container">
                    <section id="header">
                        <h1>{title}</h1>
                        <div className="actions flex">
                            {actions}
                        </div>
                    </section>

                    {children}
                </main>

            </div>
        </>
    );
}

export default MainContainer;