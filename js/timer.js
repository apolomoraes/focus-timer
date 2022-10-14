import Sound from './sounds.js'

export function Timer({ minutesDisplay, secondsDisplay, resetControl }) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateTimerDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function stop() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0

      updateTimerDisplay(minutes, 0)

      if (isFinished) {
        resetControl()
        updateTimerDisplay()
        Sound().timeEnd()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      updateTimerDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000)
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  function increment() {
    minutes = minutes < 25 ? Number(minutes) + 5 : (minutes = 25)
    updateTimerDisplay(minutes, 0)
  }

  function decrement() {
    minutes = minutes > 5 ? Number(minutes) - 5 : (minutes = 0)
    updateTimerDisplay(minutes, 0)
  }

  return {
    updateTimerDisplay,
    stop,
    countdown,
    increment,
    decrement,
    hold
  }
}
