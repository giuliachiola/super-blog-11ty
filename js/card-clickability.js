/* ----------------------------
  Card clickability
  (all card area is clickable and go to the main link, all links are still clickable)
---------------------------- */

const cards = document.querySelectorAll('.j-card')

if (cards) {
  for (let card of cards) {
    const mainLink = card.querySelector('.j-card__main-link')
    const clickableElements = Array.from(card.querySelectorAll('a'))

    card.addEventListener('click', function(e) {
      handleClick(e, mainLink)
    }, false)

    clickableElements.forEach((ele) =>
      ele.addEventListener('click', (e) => e.stopPropagation())
    )
  }
}

function handleClick(e, mainLink) {
  const isTextSelected = window.getSelection().toString()
  if (!isTextSelected) {
    mainLink.click()
  }
}
