/* ----------------------------
  Reading progress in article content
---------------------------- */

const _ = require('lodash')

document.addEventListener("DOMContentLoaded", DOMready)

function DOMready() {
  console.info('DOM ready ⚡️')

  const progressEl = document.querySelector('.j-reading-progress')
  const progressValueEl = document.querySelector('.j-reading-progress__value')
  const articleEl = document.querySelector('.j-article-section__content')
  const articleHeight = articleEl ? articleEl.clientHeight : undefined
  const offset = 0;

  if (articleEl && progressEl) {
    document.addEventListener('scroll', _.throttle(function() {
      updateProgress(progressEl, progressValueEl, articleEl, articleHeight, offset)
    }, 400))
  }
}

function updateProgress(progressEl, progressValueEl, articleEl, articleHeight, offset) {
  const scrollTop = document.documentElement.scrollTop
  const scrollPercent = Math.round((scrollTop - offset) / articleHeight * 100)

  progressValueEl.style.width = `${scrollPercent}%`
  progressEl.classList.toggle('is-sticky-on-top', articleEl.getBoundingClientRect().top < 0)
  // console.log('scrollPercent ', scrollPercent)
}