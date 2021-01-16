/* ----------------------------
  Switch theme (light/dark mode)
---------------------------- */
const switchTheme = (e) => {
  const theme = e.target.checked ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

document.addEventListener('DOMContentLoaded', (event) => {
  const toggleSwitch = document.querySelector('.j-theme-switcher input[type="checkbox"]')
  // const currentTheme = localStorage.getItem('theme') || 'light'
  // document.documentElement.setAttribute('data-theme', currentTheme)

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true
  }

  if(toggleSwitch) {
    toggleSwitch.addEventListener('change', switchTheme, false)
  }
})
