import "../Style.css"

interface WelcomePanelProps {
    onClickStart: () => void;
}

function WelcomePanel({ onClickStart }: WelcomePanelProps) {

    return (
        <div className="main-panel">
            <h1>Welcome to the Binary Guesser!</h1>
            <h2>Think in a Number between 1 and 60!</h2>
            <h2>Are you ready!?</h2>
            <button className="button-blue" type="button" onClick={onClickStart} >I'm Ready!</button>
        </div>
    )
}

export default WelcomePanel
