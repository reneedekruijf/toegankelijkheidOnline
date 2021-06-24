const nav = document.querySelector('.header__nav');
let getHamburgerMenu = document.querySelector('.menuSmall');
const topMenu = document.querySelector('.header__nav__menu');
const linksTopmenu = topMenu.querySelectorAll('a');
const hamburgerMenu = document.createElement('div');

// hide the menu on pageload: shows the menu if no js
getHamburgerMenu.parentNode.removeChild(getHamburgerMenu);


// show/hide menu and icon on resize
function windowResize() {
  const windowSize = window.innerWidth; // get windowsize
  getHamburgerMenu = document.querySelector('.menuSmall');
  if (windowSize >= 600) {
    getHamburgerMenu.style.display = 'none';
    linksTopmenu.forEach(link => link.removeAttribute('tabindex'));
  } else if (windowSize <= 600) {
    getHamburgerMenu.style.display = 'block';
    topMenu.querySelectorAll('a').forEach(link => link.removeAttribute('tabindex', '-1'));
  }
}

// open or close the menu. Menu stays open on pagechange
function handleMenu(e) {
  let isClicked;
  if (e) isClicked = true; // als er geklikt wordt
  let menuState = sessionStorage.getItem('menu');
  const newHamburgerMenu = document.querySelector('.menuSmall');

  // het menu verbergt zich als js aan staat cookie menu wordt close
  if (menuState === 'close' || !menuState) {
    newHamburgerMenu.classList.remove('change');
    newHamburgerMenu.setAttribute('aria-expanded', 'false');
    topMenu.classList.add('hideMenu');
    // topMenu.firstChild.firstChild.focus();
    linksTopmenu.forEach(link => link.setAttribute('tabindex', '-1'));
    sessionStorage.setItem('menu', 'close');
    menuState = sessionStorage.getItem('menu');

    /* bij een click gaat het menu open en blijft open cookie wordt op open
  gezet en kan dus niet meer op pagina reload gesloten worden */
    if (e) {
      newHamburgerMenu.classList.add('change');
      topMenu.firstChild.firstChild.focus();
      newHamburgerMenu.setAttribute('aria-expanded', 'true');
      topMenu.classList.remove('hideMenu');
      linksTopmenu.forEach(link => link.removeAttribute('tabindex'));
      sessionStorage.setItem('menu', 'open');
      menuState = sessionStorage.getItem('menu');
      window.addEventListener('keydown', closeOnEsc);
    }
  } else if (isClicked) {
    // bij nog een click gaat het menu dicht en cookie op close
    newHamburgerMenu.classList.remove('change');
    newHamburgerMenu.setAttribute('aria-expanded', 'false');
    newHamburgerMenu.focus();
    topMenu.classList.add('hideMenu');
    linksTopmenu.forEach(link => link.setAttribute('tabindex', '-1'));
    sessionStorage.setItem('menu', 'close');
    menuState = sessionStorage.getItem('menu');
    window.removeEventListener('keydown', closeOnEsc);
    // const lines = newHamburgerMenu.querySelectorAll('#line');
    // lines.forEach(line => {
    //   line.style.backgroundColor = '#F39200';
    // });
  }
}

function closeOnEsc(e) {
  if (e.key === 'Escape') {
    handleMenu(e);
  }
}

// markup for the hamburgermenu
const markup = `
<div role="navigation" aria-labelledby="sr">
<button class="menuSmall change">
<span class="menuSmall__line01"></span>
<span class="menuSmall__line02"></span>
<span class="menuSmall__line03"></span>
<span class="sr-only" id="sr">Menu</span>
</button>
</div>
`;

// put the html into the dom
hamburgerMenu.innerHTML = markup;
nav.querySelector('.header__nav__link').after(hamburgerMenu);

// call the resize function
windowResize();

// hide the menu on pageload;
handleMenu();

const windowSize = window.innerWidth;
if (windowSize >= 600) {
  linksTopmenu.forEach(link => {
    if (link.hasAttribute('tabindex')) {
      link.removeAttribute('tabindex');
    }
  });
} else if (windowSize <= 600) {
  linksTopmenu.forEach(link => link.setAttribute('tabindex', '-1'));
}

// event listeners
hamburgerMenu.querySelector('button').addEventListener('click', handleMenu);
// hamburgerMenu.querySelector('button').addEventListener('focus', handleMenu);
window.addEventListener('resize', windowResize);
