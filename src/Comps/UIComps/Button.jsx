const Button = ({ func, isRecording, imagePath }) => {
  const style = {
    backgroundImage: `url(${imagePath})`,
  }

  return (
    <button
      onClick={func}
      disabled={isRecording}
      className="button-background"
      style={style}></button>
  )
}

export default Button
