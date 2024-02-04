import { useState } from 'react';
import useSound from "use-sound"
import './App.css';
import NoButton from './components/NoButton/NoButton';
import YesButton from './components/YesButton/YesButton';
import Accepted from './components/Accepted/Accepted';
import marriedLifeClip from "./married-life-clipped.mp3"
import SmallScreen from './components/SmallScreen/SmallScreen';

import { motion } from "framer-motion"

function App() {
  const [isAccepted, setIsAccepted] = useState(false)
  const [playSound, { stop }] = useSound(marriedLifeClip);




  return (
    <motion.div className="app" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {
        (window.innerWidth > 768) ? <>
          <h1 className='header'>WILL YOU BE MY VALENTINE? &#129402;</h1>
          {!isAccepted ? <div className='choice'>
            <YesButton setIsAccepted={setIsAccepted} playSound={playSound} stopSound={stop} />
            <NoButton />
          </div> : <>
            <div className='choice'>
              <Accepted setIsAccepted={setIsAccepted} playSound={playSound} stopSound={stop} />
            </div>
          </>}
        </> : <SmallScreen />
      }
    </motion.div>
  );
}

export default App;
