function darkMode({ buttonDarkMode, buttonNormalMode }) {
  buttonDarkMode.addEventListener('click', () => {
    buttonDarkMode.classList.add('hide')
    buttonNormalMode.classList.remove('hide')

    document.body.classList.add('dark-theme')
  })

  buttonNormalMode.addEventListener('click', () => {
    buttonDarkMode.classList.remove('hide')
    buttonNormalMode.classList.add('hide')

    document.body.classList.remove('dark-theme')
  })
}

export { darkMode }
