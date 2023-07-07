import { useState } from 'react'
import Button from '../UIComps/Button'
import Textarea from '../UIComps/Textarea'
import { runPrompt } from '../../APIs/openai'
import arrow from '../../images/arrow.png'
import micro from '../../images/microphone.png'
import stop from '../../images/stop.png'

const MessageControl = ({
  textAreaRef,
  setTextareaRef,
  setRequestLog,
  recognitionStart,
  recognitionStop,
  isRecording,
}) => {
  const req = async (messageText) => {
    const requestMessage = await runPrompt(messageText)
    const responseMessage = requestMessage.data.choices[0].message.content
    setRequestLog((prev) => [
      ...prev,
      { message: messageText, type: 'req' },
      { message: responseMessage, type: 'res' },
    ])

    setTextareaRef('')
  }

  return (
    <div className="message-control">
      <Textarea state={textAreaRef} setState={setTextareaRef} />
      <div className="record-control">
        <Button
          func={() => req(textAreaRef)}
          isRecording={textAreaRef.length ? false : true}
          imagePath={arrow}
        />
        <Button
          func={recognitionStart}
          isRecording={isRecording ? true : false}
          imagePath={micro}
        />
        <Button
          func={recognitionStop}
          isRecording={isRecording ? false : true}
          imagePath={stop}
        />
      </div>
    </div>
  )
}

export default MessageControl
