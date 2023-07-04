const Message = ({ messageType, message }) => {
  return (
    <div className="dialog-wrapper">
      <div
        className={
          messageType === 'res' ? 'dialog-message res' : 'dialog-message'
        }>
        <span>{message}</span>
      </div>
    </div>
  )
}

export default Message
