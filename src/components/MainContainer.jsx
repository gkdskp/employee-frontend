import SideBar from "./Sidebar";

function MainContainer(props) {
    const { title, actions, children } = props;

    return (
        <>
            <SideBar />
            <div id="container">
                <main className="main-container">
                    <section id="header">
                        <h1>{ title }</h1>
                        <div className="actions flex">
                            { actions }
                        </div>
                    </section>

                    { children }
                </main>
                
            </div>
        </>
    );
}

export default MainContainer;