import Button from './UIComps/Button'
import Textarea from './UIComps/Textarea'

const MessageControl = ({
  textAreaRef,
  setTextareaRef,
  setRequestLog,
  recognitionStart,
  recognitionStop,
  isRecording,
}) => {
  return (
    <div className="message-control">
      <Textarea state={textAreaRef} setState={setTextareaRef} />
      <div className="record-control">
        <Button
          func={() => {
            setRequestLog((prev) => [
              ...prev,
              { message: textAreaRef, type: 'req' },
            ])
            setTextareaRef('')
          }}
          isRecording={false}
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
