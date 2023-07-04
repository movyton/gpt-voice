const NotSupportedBrowser = () => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
      Probably, your browser not supporting&nbsp;
      <a href="https://caniuse.com/?search=SpeechRecognition">
        SpeechRecognition API
      </a>
    </div>
  )
}

export default NotSupportedBrowser
