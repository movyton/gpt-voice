import Message from '../UIComps/Message'

const DialogWrapper = ({ dialog }) => {
  return (
    <div className="dialog-wrapper">
      {dialog?.map((e, i) => (
        <Message key={i} messageType={e.type} message={e.message} />
      ))}
    </div>
  )
}

export default DialogWrapper
