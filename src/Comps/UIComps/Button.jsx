const Button = ({ func, isRecording, textContent }) => {
  return (
    <button onClick={func} disabled={isRecording}>
      {textContent}
    </button>
  )
}

export default Button
