import '../styles/App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h3>REACT CALCULATOR</h3>
        </header>
        <Display result="5 * 5" />
        <ButtonPanel />
      </div>
    </>
  );
}

export default App;
