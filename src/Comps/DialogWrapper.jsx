const DialogWrapper = ({ dialog }) => {
  return (
    <div className="dialog-wrapper">
      {dialog?.map((e, i) => (
        <div
          className={e.type === 'res' ? 'dialog-message res' : 'dialog-message'}
          key={i}>
          <span>{e.message}</span>
        </div>
      ))}
    </div>
  )
}

export default DialogWrapper
