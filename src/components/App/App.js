import './App.css';
import NamesList from "../NamesList";
import Counter from '../Counter';
import Lists from '../Lists';
import ClickableComponent from '../ClickableComponent';

function App() {
  
  return (
    
    <div className="App">
      <header className="App-header">        
        <h1>
          Hello world!
        </h1>
        <NamesList />
        <Counter />        
        <Lists />
        <ClickableComponent />
      </header>
     
    </div>
  );
}

export default App;
