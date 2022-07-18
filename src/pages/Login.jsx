import { useState } from "react";
import "../styles/style.css";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [userCredentials, setUserCredentials] = useState({
        username: '',
        password: ''
    });

    const handleUsernameChange = (value) => {
        setUserCredentials({
            username: value,
            password: userCredentials.password
        });
    }

    const handlePasswordChange = (value) => {
        setUserCredentials({
            username: userCredentials.username,
            password: value
        });
    }

    return (<>
        <aside className="login-aside">

        </aside>
        <main className="login-main">
            <section id="form" className="vertical-fields login-section">
                <div className="flex flex-columns flex-start">
                    <div id="logo">
                        <a href="/"><img src="assets/logo.png" alt="KeyValue logo" /></a>
                    </div>
                    <form id="employee-form">
                        <div id="form-container">
                            <InputField
                                label={'Username'}
                                handleChange={handleUsernameChange}
                                value={userCredentials.username}
                            />
                            <InputField
                                label={'Password'}
                                handleChange={handlePasswordChange}
                                value={userCredentials.password}
                            />
                        </div>
                        <div id="form-buttons">
                            <Button
                                handleClick={() => { navigate('/dashboard'); }}
                                label={'Log In'}
                                variant="primary full-width"
                            />
                        </div>
                    </form>
                </div>
            </section>
        </main>
    </>
    );
}

export default Login;