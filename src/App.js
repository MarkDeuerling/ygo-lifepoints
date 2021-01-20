import './App.css';
import MiddleBar from './components/MiddleBar';
import Lifepoints from './components/Lifepoints';
import MainMenu from './components/MainMenu';
import {useState} from 'react'


const App = () => {
  const [startDuel, setDuel] = useState(false)

  return (
    <div className="App">
      <div className="content">
        {!startDuel && <MainMenu setDuel={setDuel}/>}
        {startDuel &&
          <>
            <Lifepoints flip={true} />
            <MiddleBar />
            <Lifepoints />
          </>
        }
        
      
      </div>
    </div>
  );
}

export default App;
