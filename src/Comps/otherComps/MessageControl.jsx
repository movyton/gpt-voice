import { useState } from 'react'
import Button from '../UIComps/Button'
import Textarea from '../UIComps/Textarea'
import { runPrompt } from '../../APIs/openai'

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
          textContent={'send req'}
        />
        <Button
          func={recognitionStart}
          isRecording={isRecording ? true : false}
          textContent={'start'}
        />
        <Button
          func={recognitionStop}
          isRecording={isRecording ? false : true}
          textContent={'stop'}
        />
      </div>
    </div>
  )
}

export default MessageControl
