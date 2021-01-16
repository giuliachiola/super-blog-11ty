/* ----------------------------
  Search post
---------------------------- */

const searchInput = document.querySelector('.j-search__input');

function searchPost () {
  const searchValue = searchInput.value.toLocaleLowerCase()
  const noResultText = document.querySelector('.j-search__no-results')
  let hasResults = false

  const cards = document.querySelectorAll('.c-card')
  for (const post of cards) {
    const title = post.querySelector('.c-card__title-heading')
    const abstract = post.querySelector('.c-card__abstract')

    if (title.textContent.toLocaleLowerCase().includes(searchValue) || abstract.textContent.toLocaleLowerCase().includes(searchValue)) {
      // show the post
      title.closest('.j-search__item').classList.remove('u-hidden');
      hasResults = true
    } else {
      // hide the post
      title.closest('.j-search__item').classList.add('u-hidden');
    }
  }

  if (hasResults) {
    noResultText.classList.add('u-hidden')
  } else {
    noResultText.classList.remove('u-hidden')
  }
}

// trigger search post at search input change

if (searchInput) { // if the DOM not exists
  searchInput.oninput = function() {
    searchPost();
  };
}
