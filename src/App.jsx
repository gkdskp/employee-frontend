import './styles/style.css';
import InputField from './components/InputField';
import Button from './components/Button';
import './styles/style.css';
import { useEffect, useState } from 'react';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showMessage, setShowMessage] = useState(false);

  // const onUsernameChange = (value)
  useEffect(() => {
    console.log(username);
  }, [username]);

  return (
    <div className="App">
      <main>
        <section id="form">
          <InputField 
            label='User Name' 
            value={username}
            handleChange={setUsername}
          ></InputField>

          <InputField 
            label='Password'
            value={password}
            handleChange={setPassword}
          ></InputField>

          <Button label={'Login'} handleClick={() => {
            setShowMessage(!showMessage);
          }} />

          {showMessage && <p>{username}</p>}
        </section>
      </main>
    </div>
  );
}

export default App;
