import { useState } from 'react'
import recognition from './APIs/speechSettings'
import DialogWrapper from './Comps/otherComps/DialogWrapper'
import MessageControl from './Comps/otherComps/MessageControl'
import KeyPrompt from './Comps/UIComps/KeyPrompt'

const App = () => {
  const [dialog, setDialog] = useState([])
  const [isRecording, setIsRecording] = useState(false)
  const [textAreaRef, setTextareaRef] = useState('')

  recognition.onresult = (event) => {
    setTextareaRef(event.results[0][0].transcript)
    setIsRecording(false)
  }

  const recognitionStart = () => {
    recognition.start()
    setIsRecording(true)
  }

  const recognitionStop = () => {
    recognition.stop()
    setIsRecording(false)
  }

  return (
    <div className="App">
      <div className="container main_back-color">
        <DialogWrapper dialog={dialog} />
        <MessageControl
          textAreaRef={textAreaRef}
          setTextareaRef={setTextareaRef}
          setRequestLog={setDialog}
          recognitionStart={recognitionStart}
          recognitionStop={recognitionStop}
          isRecording={isRecording}
        />
      </div>
      <KeyPrompt />
    </div>
  )
}

export default App
