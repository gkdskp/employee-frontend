import './App.css';
import InputField from './components/InputField';
import Button from './components/Button';

function App() {
  // const onClick = () => {
  //   const val = prompt('Enter name');
  //   console.log(val);
  // }

  return (
    <div className="App">
      <InputField label='User Name'></InputField>
      <InputField label='Password'></InputField>
      <Button label={'Login'} handleClick={() => {}} />
    </div>
  );
}

export default App;
