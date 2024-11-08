let darkmode = localStorage.getItem('darkmode')
const theme_switch = document.getElementById('theme-switch')

const enableDarkMode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if (darkmode === 'active') enableDarkMode()

theme_switch.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode === 'active' ? disableDarkMode() : enableDarkMode()
})