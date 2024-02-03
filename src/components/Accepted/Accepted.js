import "./Accepted.css"
import { Icon } from '@iconify/react';
import { motion } from "framer-motion"
const Accepted = ({ setIsAccepted, playSound, stopSound }) => {
    return <motion.div className="accepted" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="close-icon" onClick={() => {
            setIsAccepted(false)
            stopSound()
        }}><Icon icon="mi:close" /></div>
        <div className="text">Good Choice. God saved you.</div>

    </motion.div>
}


export default Accepted