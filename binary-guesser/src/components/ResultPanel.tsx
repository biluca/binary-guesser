import "../Style.css"

interface ResultPanelProps {
    onClickBack: () => void;
    finalResult: number;
}

function ResultPanel({ onClickBack, finalResult }: ResultPanelProps) {
    return (
        <div className="main-panel">
            <h1>Your number is:</h1>
            <h2>{finalResult}</h2>
            <h2>Thanks for Playing!</h2>
            <button className="button-blue" type="button" onClick={onClickBack} >Go to Home</button>
        </div>
    )
}

export default ResultPanel
