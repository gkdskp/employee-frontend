import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function HomePage() {
    const navigate = useNavigate();
    
    const goToLogin = () => {
        navigate('/login')
    }

    return (
        <main>
            <header>
                <div className="home-container">
                    <div id="logo">
                        <a href="/"><img src="assets/logo.png" alt="KeyValue logo" /></a>
                    </div>
                </div>
            </header>

            <div className="center">
                <span className="logo-title">Keyvalue</span>
                <span className="app-title">Employee Application</span>
                <span className="home-login-button">
                    <Button 
                        variant={'primary'} 
                        label={'Log In'} 
                        handleClick={goToLogin}
                    />
                </span>
            </div>
        </main>
    )
}

export default HomePage;