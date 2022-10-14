export default function () {
  const forestAudio = new Audio('./audio/floresta.wav')
  const rainAudio = new Audio('./audio/chuva.wav')
  const storeAudio = new Audio('./audio/cafeteria.wav')
  const fireAudio = new Audio('./audio/lareira.wav')
  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )
  const alarm = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )

  forestAudio.loop = true
  rainAudio.loop = true
  storeAudio.loop = true
  fireAudio.loop = true

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    alarm.play()
  }

  return {
    forestAudio,
    rainAudio,
    storeAudio,
    fireAudio,
    pressButton,
    timeEnd
  }
}
