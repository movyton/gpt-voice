import Button from '../UIComps/Button'
import Textarea from '../UIComps/Textarea'
import { runPrompt } from '../../APIs/openai'
import LoadImage from './LoadImage'
import arrow from '../../images/arrow.png'
import micro from '../../images/microphone.png'
import stop from '../../images/stop.png'

const MessageControl = ({
  textareaRef,
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
      <Textarea state={textareaRef} setState={setTextareaRef} />
      <div className="record-control">
        <Button
          func={() => req(textareaRef)}
          isRecording={textareaRef?.length ? false : true}
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
        <LoadImage setTextareaRef={setTextareaRef} />
      </div>
    </div>
  )
}

export default MessageControl
