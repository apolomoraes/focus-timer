import Sound from './sounds.js'
import { Timer } from './timer.js'
import { darkMode } from './theme.js'

const buttonNormalMode = document.querySelector('.sun')
const buttonDarkMode = document.querySelector('.moon')

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonIncrease = document.querySelector('.increase')
const buttonDecrease = document.querySelector('.decrease')
const buttonForest = document.querySelector('.forest-audio')
const buttonRain = document.querySelector('.rain-audio')
const buttonStore = document.querySelector('.store-audio')
const buttonFire = document.querySelector('.fire-audio')

const svgForest = document.querySelector('.svg-forest')
const svgRain = document.querySelector('.svg-rain')
const svgStore = document.querySelector('.svg-store')
const svgFire = document.querySelector('.svg-fire')

const volForest = document.querySelector('#input-forest')
const volRain = document.querySelector('#input-rain')
const volStore = document.querySelector('#input-store')
const volFire = document.querySelector('#input-fire')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

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

darkMode({
  buttonDarkMode,
  buttonNormalMode
})

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

buttonDarkMode.addEventListener('click', () => {
  buttonDarkMode.classList.add('hide')
  buttonNormalMode.classList.remove('hide')
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
