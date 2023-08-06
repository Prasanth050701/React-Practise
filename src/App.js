import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my react app!</h1>
        <h2>{pras()}</h2>
      </header>
    </div>
  );
  function pras(){
    return ("Hellooo Prass This is React!!");
  }
}

export default App;
