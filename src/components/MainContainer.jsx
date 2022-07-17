import SideBar from "./Sidebar";

function MainContainer(props) {
    const { title, actions, children } = props;

    return (
        <>
            <SideBar />
            <div id="container">
                <main>
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