/* ----------------------------
  Add in snippets using PrismJS:
  - copy button
  - language
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

  function addLanguage(containerEl, lang) {
    const language = document.createElement("p")
    language.className = "c-code__lang"
    language.textContent = lang
    containerEl.appendChild(language)
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

    const lang = block.className.replace('language-', '') // exmple: twig
    addLanguage(block, lang)
  }

  Array.prototype.forEach.call(highlightBlocks, addCopyButton)
})()
