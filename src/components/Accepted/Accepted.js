import "./Accepted.css"
import { Icon } from '@iconify/react';
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect';
const Accepted = ({ setIsAccepted, playSound, stopSound }) => {
    return <motion.div className="accepted" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="close-icon" onClick={() => {
            setIsAccepted(false)
            stopSound()
        }}><Icon icon="mi:close" /></div>
        <div className="text"> <Typewriter onInit={(typewriter) => {
            typewriter.typeString("Good Choice. God saved you.").pauseFor(3000).deleteAll().typeString("JK. Thank you for saying yes. <3 :)").start()
        }} /></div>

    </motion.div>
}


export default Accepted