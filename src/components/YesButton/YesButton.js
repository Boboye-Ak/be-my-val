import "./YesButton.css"
const YesButton = ({ setIsAccepted, playSound }) => {
    return <div className="yes-button" onClick={() => {
        setIsAccepted(true)
        playSound()
    }}>
        Yes 
    </div>
}

export default YesButton