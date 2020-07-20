/* ----------------------------
  Get the checkbox
---------------------------- */

const checkbox = document.querySelector(".c-header__toggle");
checkbox.addEventListener('change', function() {
  document.body.classList.toggle("is-menu-open");
});

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

/* ----------------------------
  Dark mode toggle
---------------------------- */

const toggleSwitch = document.querySelector('.c-theme-switcher__checkbox input[type="checkbox"]')
const currentTheme = localStorage.getItem('theme')
const toggleSwitchLabel = document.querySelector('.c-theme-switcher__text')
const toggleLabels = {
  dark: 'Dark mode 🌙',
  light: 'Light mode ☀️'
}

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    toggleSwitchLabel.textContent = toggleLabels.light
  } else {
    toggleSwitchLabel.textContent = toggleLabels.dark
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleSwitchLabel.textContent = toggleLabels.light
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleSwitchLabel.textContent = toggleLabels.dark
    localStorage.setItem('theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);
