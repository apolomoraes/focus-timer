import Sound from './sounds.js'
import { Timer } from './timer.js'
import { darkMode } from './theme.js'
import { elements } from './elements.js'

const {
  buttonNormalMode,
  buttonDarkMode,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonIncrease,
  buttonDecrease,
  buttonForest,
  buttonRain,
  buttonStore,
  buttonFire,
  svgForest,
  svgRain,
  svgStore,
  svgFire,
  volForest,
  volRain,
  volStore,
  volFire,
  minutesDisplay,
  secondsDisplay
} = elements

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControl
})

const sound = Sound()

function togglePlay(myAudio) {
  return myAudio.paused ? myAudio.play() : myAudio.pause()
}

function resetControl() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
}

/* Button Timer */

buttonPlay.addEventListener('click', () => {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')

  sound.pressButton()

  timer.countdown()
})

buttonPause.addEventListener('click', () => {
  resetControl()
  sound.pressButton()
  timer.hold()
})

buttonStop.addEventListener('click', () => {
  resetControl()
  sound.pressButton()
  timer.stop()
})

buttonIncrease.addEventListener('click', () => {
  sound.pressButton()
  timer.increment()
})

buttonDecrease.addEventListener('click', () => {
  sound.pressButton()
  timer.decrement()
})

/* Button Cards Audio */

buttonForest.addEventListener('click', () => {
  buttonForest.classList.toggle('selected')
  svgForest.classList.toggle('color')
  togglePlay(sound.forestAudio)
})

buttonRain.addEventListener('click', () => {
  buttonRain.classList.toggle('selected')
  svgRain.classList.toggle('color')
  togglePlay(sound.rainAudio)
})

buttonStore.addEventListener('click', () => {
  buttonStore.classList.toggle('selected')
  svgStore.classList.toggle('color')
  togglePlay(sound.storeAudio)
})

buttonFire.addEventListener('click', () => {
  buttonFire.classList.toggle('selected')
  svgFire.classList.toggle('color')
  togglePlay(sound.fireAudio)
})

/*  Button Theme */
darkMode({
  buttonDarkMode,
  buttonNormalMode
})

/* Event Volume */

volForest.addEventListener('input', () => {
  sound.forestAudio.volume = volForest.value
})

volRain.addEventListener('input', () => {
  sound.rainAudio.volume = volRain.value
})

volStore.addEventListener('input', () => {
  sound.storeAudio.volume = volStore.value
})

volFire.addEventListener('input', () => {
  sound.fireAudio.volume = volFire.value
})
