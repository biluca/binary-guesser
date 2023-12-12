import "../Style.css"

interface PanelFooterProps {
    onClickYes: () => void;
    onClickNo: () => void;
}

function PanelFooter({ onClickYes, onClickNo }: PanelFooterProps) {
    return (
        <div className="button-container">
            <button className="button-green" type="button" onClick={onClickYes}>YES</button>
            <button className="button-red" type="button" onClick={onClickNo}>NO</button>
        </div>
    )
}

export default PanelFooter
