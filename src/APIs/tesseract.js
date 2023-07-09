import { createWorker } from 'tesseract.js'

export const readImageText = async (path) => {
  const worker = await createWorker({
    logger: (m) => console.log(m.progress),
  })
  await worker.loadLanguage('eng')
  await worker.initialize('eng')
  const {
    data: { text },
  } = await worker.recognize(path)
  await worker.terminate()
  return text
}
