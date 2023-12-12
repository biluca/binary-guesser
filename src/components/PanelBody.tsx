import { useState } from "react";
import "../Style.css"
import cards_collection from "../data/cards.json"

interface PanelBodyProps {
    currentCollectionIndex: number
}

function PanelBody({ currentCollectionIndex = 0 }: PanelBodyProps) {

    let showNumbers = currentCollectionIndex > -1 && currentCollectionIndex < 6

    if (!showNumbers) {
        return <></>
    }

    let cards = cards_collection.cards

    return (
        <>
            <div className="card-set">
                {cards[currentCollectionIndex].map((number, index) => (
                    <div key={index} className="card-number">
                        {number}
                    </div>
                ))}
            </div>
        </>
    )
}

export default PanelBody
