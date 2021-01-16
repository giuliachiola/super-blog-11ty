/* ----------------------------
  Scroll to top in TIL section
---------------------------- */

const backToTopLink = document.querySelector('.j-back-to-top')

function addBackToLink() {
  const scrollTop = document.documentElement.scrollTop
  backToTopLink.classList.toggle('is-active', scrollTop > 2000)
}

if (backToTopLink) {
  document.addEventListener('scroll', _.throttle(addBackToLink, 400))
}
