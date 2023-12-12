import PanelHeader from "./PanelHeader";
import PanelFooter from "./PanelFooter";
import PanelBody from "./PanelBody";
import { useState } from "react";
import "../Style.css"

interface GuessPanelProps {
    onCompleteAnswer: (finalAnswer: number) => void;
    onClickBack: () => void;

}

function GuessPanel({ onCompleteAnswer, onClickBack }: GuessPanelProps) {
    let [cardCollectionIndex, setCardCollectionIndex] = useState(0)
    let [answers, setAnswers] = useState<number[]>([]);

    const handleYesClick = () => {
        console.log("YES!")
        handleClick(1)
    }

    const handleNoClick = () => {
        console.log("NO")
        handleClick(0)
    }

    const handleClick = (answer: number) => {
        answers.push(answer)

        cardCollectionIndex = cardCollectionIndex + 1
        if (cardCollectionIndex > 5) {
            setCardCollectionIndex(-1)

            let finalResult = processAnswer()
            onCompleteAnswer(finalResult)
            return
        }

        setCardCollectionIndex(cardCollectionIndex)
    }

    const processAnswer = () => {
        let result = 0
        answers.forEach(function (number, index) {
            console.log(index);
            if (number === 1) {
                let subPart = Math.pow(2, index)
                console.log(result, " + ", subPart, " = ", result + subPart)
                result = result + subPart
            }
        });

        setAnswers([])
        return result
    }

    return (
        <>
            <div className="main-panel">
                <PanelHeader cardCollectionIndex={cardCollectionIndex} />
                <PanelBody currentCollectionIndex={cardCollectionIndex} />
                <PanelFooter onClickYes={handleYesClick} onClickNo={handleNoClick} />
                <button className="button-blue" type="button" onClick={onClickBack} >Go to Home</button>
            </div>
        </>
    )
}

export default GuessPanel
