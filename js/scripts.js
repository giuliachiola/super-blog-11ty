/* ----------------------------
  Open/Close mobile menu
---------------------------- */
const checkbox = document.querySelector(".c-header__toggle")
if (checkbox) {
  checkbox.addEventListener('change', function() {
    document.body.classList.toggle("is-menu-open")
  })
}

/* ----------------------------
  Switch theme (light/dark mode)
---------------------------- */
const toggleSwitch = document.querySelector('.j-theme-switcher input[type="checkbox"]')
const currentTheme = localStorage.getItem('theme') || 'light'
document.documentElement.setAttribute('data-theme', currentTheme)

if (currentTheme === 'dark') {
  toggleSwitch.checked = true
}

const switchTheme = (e) => {
  const theme = e.target.checked ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

if(toggleSwitch) {
  toggleSwitch.addEventListener('change', switchTheme, false)
}

/* ----------------------------
  Add copy button in snippets using PrismJS
  https://www.tomspencer.dev/blog/2018/09/14/adding-click-to-copy-buttons-to-a-hugo-powered-blog/
---------------------------- */
(function() {
  'use strict'

  if(!document.queryCommandSupported('copy')) {
    return
  }

  function flashCopyMessage(el, msg) {
    el.textContent = msg
    setTimeout(function() {
      el.textContent = 'Copy'
    }, 1000)
  }

  function selectText(node) {
    const selection = window.getSelection()
    const range = document.createRange()
    range.selectNodeContents(node)
    selection.removeAllRanges()
    selection.addRange(range)
    return selection
  }

  function addCopyButton(containerEl) {
    const copyButton = document.createElement("button")
    copyButton.className = "c-code__copy-button"
    copyButton.textContent = "Copy"

    const codeEl = containerEl.firstElementChild
    copyButton.addEventListener('click', function() {
      try {
        const selection = selectText(codeEl)
        document.execCommand('copy')
        selection.removeAllRanges()

        flashCopyMessage(copyButton, 'Copied!')
      } catch(e) {
        console && console.log(e)
        flashCopyMessage(copyButton, 'Failed :\'(')
      }
    })

    containerEl.appendChild(copyButton)
  }

  function wrap(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el)
    wrapper.appendChild(el)
  }

  // Add copy button to code blocks
  const highlightBlocks = document.querySelectorAll("pre[class^=language-]")

  for (let block of highlightBlocks) {
    const newNode = document.createElement('div')
    newNode.className = 'c-code j-code'
    wrap(block, newNode)
  }

  Array.prototype.forEach.call(highlightBlocks, addCopyButton)
})()
