import { useState } from 'react'
import Button from './Button'
import { keyValidation } from '../../APIs/openai'
import APIKeyProvider from '../../APIs/APIKeyProvider'
import save from '../../images/save2.png'

const KeyPrompt = () => {
  const [input, setInput] = useState(
    !APIKeyProvider.getSecretKey ? '' : APIKeyProvider.getSecretKey
  )
  const [incorrectKeyMessage, setIncorrectKeyMessage] = useState(false)

  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  const keyVerif = (key) => {
    const keyReq = keyValidation(key)
    if (keyReq) {
      setIncorrectKeyMessage(false)
      return
    }
    setIncorrectKeyMessage(true)
  }

  return (
    <div className="key-prompt">
      <input
        value={input}
        onChange={handleInputChange}
        type="text"
        placeholder="your API key"
      />
      <Button
        func={() => keyVerif(input)}
        isRecording={false}
        imagePath={save}
      />
      <p className={incorrectKeyMessage ? 'unvalid-key-notification' : 'hide'}>
        invalid key
      </p>
    </div>
  )
}

export default KeyPrompt
