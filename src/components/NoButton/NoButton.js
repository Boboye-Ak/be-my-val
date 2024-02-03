import { useState } from "react"
import "./NoButton.css"
const NoButton = () => {
    const [xPosition, setXPosition] = useState(null)
    const [yPosition, setYPosition] = useState(null)
    const [isMoved, setIsMoved] = useState(false)

    function getRandomNumber(min, max) {
        // Calculate a random number within the specified range
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const relocate = () => {
        setIsMoved(true)
        const windowWidth = window.innerWidth
        const windowHeight = window.innerHeight
        setXPosition(getRandomNumber(-windowWidth / 2+20, windowWidth / 2-20))
        setYPosition(getRandomNumber(-windowHeight / 2+20, windowHeight / 2-20))
    }
    return <div className="no-button" style={isMoved ? { top: yPosition, left: xPosition, } : {}} onMouseEnter={() => {
        relocate()
    }}>
        No
    </div>
}

export default NoButton