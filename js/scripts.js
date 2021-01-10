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

/* ----------------------------
  Reading progress in article content
---------------------------- */

const progressEl = document.querySelector('.j-reading-progress')
const progressValueEl = document.querySelector('.j-reading-progress__value')
const articleEl = document.querySelector('.j-article-section__content')
const articleHeight = articleEl ? articleEl.clientHeight : undefined
const offset = 0;

function updateProgress() {
  const scrollTop = document.documentElement.scrollTop
  const scrollPercent = Math.round((scrollTop - offset) / articleHeight * 100)

  progressValueEl.style.width = `${scrollPercent}%`
  progressEl.classList.toggle('is-sticky-on-top', articleEl.getBoundingClientRect().top < 0)
  // console.log('scrollPercent ', scrollPercent)
}

if (articleEl) {
  document.addEventListener('scroll', _.debounce(updateProgress, 400))
}

/* ----------------------------
  Scroll to top in TIL section
---------------------------- */

const backToTopLink = document.querySelector('.j-back-to-top')

function addBackToLink() {
  const scrollTop = document.documentElement.scrollTop
  backToTopLink.classList.toggle('is-active', scrollTop > 2000)
}

if (backToTopLink) {
  document.addEventListener('scroll', _.debounce(addBackToLink, 400))
}

/* ----------------------------
  User is tabbing
  (identifying keyboard navigators)
---------------------------- */

(function () {
  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      // the "I am a keyboard user" key
      document.body.classList.add('user-is-tabbing')
      window.removeEventListener('keydown', handleFirstTab)
    }
  }
  window.addEventListener('keydown', handleFirstTab)
})()

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
