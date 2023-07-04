import { Configuration, OpenAIApi } from 'openai'
import APIKeyProvider from './APIKeyProvider'

function openAIConfigGenerate(key = APIKeyProvider.getSecretKey) {
  const apiKey = key

  const configuration = new Configuration({
    apiKey: apiKey,
  })

  const openai = new OpenAIApi(configuration)
  return openai
}

async function keyValidation(key) {
  const configInstance = openAIConfigGenerate(key)
  const requestTest = await runPrompt('test', configInstance)

  if (requestTest) {
    APIKeyProvider.setSecretKey = key

    return true
  }

  return false
}

async function runPrompt(prompt, config = openAIConfigGenerate()) {
  try {
    const response = await config.createChatCompletion({
      model: 'gpt-3.5-turbo-0613',
      messages: [{ role: 'system', content: prompt }],
      temperature: 0,
    })

    return response
  } catch (e) {
    return false
  }
}

export { runPrompt, keyValidation }
