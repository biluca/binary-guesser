import GuessPanel from "./components/GuessPanel"
import WelcomePanel from "./components/WelcomePanel"
import ResultPanel from "./components/ResultPanel"
import { useState } from "react"
import "./Style.css"


function App() {

  let [starting, setStarting] = useState(true)
  let [playing, setPlaying] = useState(false)
  let [ending, setEnding] = useState(false)

  let [finalResult, setFinalResult] = useState(0)

  const handleStartClick = () => {
    console.log("Handling Start Click")
    setStarting(!starting)
    setPlaying(!playing)
  }

  const handleCompleteAnswer = (finalResult: number) => {
    console.log("Handling Complete Answer")
    setFinalResult(finalResult)
    setPlaying(!playing)
    setEnding(!ending)
  }

  const handleBackClick = () => {
    console.log("Handling Back Click")
    setEnding(false)
    setPlaying(false)
    setStarting(true)
  }

  return (
    <>
      <div className="body">
        {starting && <WelcomePanel onClickStart={handleStartClick} />}
        {playing && <GuessPanel onCompleteAnswer={handleCompleteAnswer} onClickBack={handleBackClick} />}
        {ending && <ResultPanel onClickBack={handleBackClick} finalResult={finalResult} />}
      </div>
    </>
  )
}

export default App
