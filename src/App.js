import './App.css';
import MiddleBar from './components/MiddleBar';
import Lifepoints from './components/Lifepoints';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Lifepoints flip={true} />
        <MiddleBar />
        <Lifepoints />
      </div>
    </div>
  );
}

export default App;
