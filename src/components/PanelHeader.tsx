import "../Style.css"

interface PanelHeaderProps {
    cardCollectionIndex: number
}

function PanelHeader({ cardCollectionIndex = 1 }: PanelHeaderProps) {
    return (
        <div className="heading">
            <h1>Is your number in the following card?</h1>
            <h2>{cardCollectionIndex + 1}/6</h2>
        </div>
    )
}

export default PanelHeader
