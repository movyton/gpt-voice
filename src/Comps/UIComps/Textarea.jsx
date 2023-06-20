const Textarea = ({ state, setState }) => {
  return (
    <div className="textarea-wrapper">
      <textarea
        className="main_back-color"
        id="message-field"
        value={state}
        onChange={(e) => setState(e.target.value)}></textarea>
    </div>
  )
}

export default Textarea
