function speechBrowserSupport() {
  try {
    const recognition = new webkitSpeechRecognition()
    recognition.interimResult = false
    recognition.lang = 'en-US'
    return recognition
  } catch ({ _, message }) {
    console.error(new Error(message))
  }
}

const recognition = speechBrowserSupport()

export default recognition
