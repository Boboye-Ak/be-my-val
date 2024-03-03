import { useState } from 'react';
import useSound from "use-sound"
import './App.css';
import NoButton from './components/NoButton/NoButton';
import YesButton from './components/YesButton/YesButton';
import Accepted from './components/Accepted/Accepted';
import { motion } from "framer-motion"

function App() {
  const marriedLifeClip = "https://res.cloudinary.com/dc55ir792/video/upload/v1709462050/married-life-clipped_wtz4io.mp3"
  const [isAccepted, setIsAccepted] = useState(false)
  const [playSound, { stop }] = useSound(marriedLifeClip);

  return (
    <motion.div className="app" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {
        <>
          <h1 className='header'>WILL YOU BE MY VALENTINE? &#129402;</h1>
          {!isAccepted ? <div className='choice'>
            <YesButton setIsAccepted={setIsAccepted} playSound={playSound} stopSound={stop} />
            <NoButton />
          </div> : <>
            <div className='choice'>
              <Accepted setIsAccepted={setIsAccepted} playSound={playSound} stopSound={stop} />
            </div>
          </>}
        </>
      }
    </motion.div>
  );
}

export default App;
