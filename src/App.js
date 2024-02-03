import { useState } from 'react';
import useSound from "use-sound"
import './App.css';
import NoButton from './components/NoButton/NoButton';
import YesButton from './components/YesButton/YesButton';
import Accepted from './components/Accepted/Accepted';
import theBookOfLove from "./The-Book-of-Love.mp3"

function App() {
  const [isAccepted, setIsAccepted] = useState(false)
  const [playSound, { stop }] = useSound(theBookOfLove);




  return (
    <div className="app">
      {
        (window.innerWidth > 768) ? <>
          <h1 className='header'>WILL YOU BE MY VALENTINE</h1>
          {!isAccepted ? <div className='choice'>
            <YesButton setIsAccepted={setIsAccepted} playSound={playSound} stopSound={stop} />
            <NoButton />
          </div> : <>
            <div className='choice'>
              <Accepted setIsAccepted={setIsAccepted} playSound={playSound} stopSound={stop} />
            </div>
          </>}
        </> : <div>Small screen</div>
      }
    </div>
  );
}

export default App;
