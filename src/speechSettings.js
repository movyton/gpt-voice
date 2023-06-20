const recognition = new webkitSpeechRecognition()
recognition.interimResult = false
recognition.lang = 'en-US'

export const setSettings = {
  setInterimResult: function (arg = false) {
    if (arg === 'true') {
      recognition.interimResult = true
    }
    recognition.interimResult = false
  },
  setLang: function (newLang = 'en-US') {
    recognition.lang = newLang
  },
}
export default recognition
