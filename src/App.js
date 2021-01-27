import './App.css';
import Lottery from './Lottery';


function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Mini daily" maxNum={10} numBall={4}/>
    </div>
  );
}

export default App;
