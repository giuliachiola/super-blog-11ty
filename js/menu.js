/* ----------------------------
  Open/Close mobile menu
---------------------------- */

const checkbox = document.querySelector(".c-header__toggle")
if (checkbox) {
  checkbox.addEventListener('change', function() {
    document.body.classList.toggle("is-menu-open")
  })
}
