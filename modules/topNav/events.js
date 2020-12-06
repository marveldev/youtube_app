import { constants, switchCurrentPage } from "../helpers.js";

const topNavEventListeners = () => {
  const profilePhoto = document.querySelector('#profilePhoto');
  const overlay = document.querySelector('#overlay');
  const rightNavModal = document.querySelector('.rightNav-modal');
  const themeModalButton = document.querySelector('#themeModalButton');
  const themeModal = document.querySelector('#themeModal');
  const closeModalButton = document.querySelector('#closeModalButton');
  const arrowLeft = document.querySelector('#arrowLeft');
  const root = document.querySelector('#root');
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => switchCurrentPage(constants.HOMEPAGE));

  const themeObject = JSON.parse(localStorage.getItem('theme'));
  if (themeObject) {
    root.className = themeObject.theme;
    document.body.style.backgroundColor = themeObject.backgroundColor;
    document.querySelector('.theme-name').innerText = themeObject.themeName;
  }

  const displayRightModal = ( overlayValue, themeModalValue, rightNavValue, overflowValue ) => {
    if (overlayValue) {
      overlay.style.display = overlayValue;
      document.body.style.overflow = overflowValue;
    }
    themeModal.style.display = themeModalValue;
    rightNavModal.style.display = rightNavValue;
  }

  profilePhoto.addEventListener('click', () => {
    if (rightNavModal.style.display === 'block') {
      displayRightModal('none', 'none', 'none', 'auto');
    } else {
      displayRightModal('block', 'none', 'block', 'hidden');
    }
  })

  themeModalButton.addEventListener('click', () => displayRightModal(null, 'block', 'none'))

  arrowLeft.addEventListener('click', () => displayRightModal(null, 'none', ''))

  overlay.addEventListener('click', () => {
    displayRightModal('none', 'none', 'none', 'auto');
  })

  closeModalButton.addEventListener('click', () => {
    displayRightModal('none', 'none', 'none', 'auto');
  })

  const toggleTheme = (selector, theme, backgroundColor, themeName) => {
    selector.addEventListener('click', () => {
      root.className = theme;
      document.body.style.backgroundColor = backgroundColor;
      document.querySelector('.theme-name').innerText = themeName;
      displayRightModal('none', 'none', 'none', 'auto');

      const themeObject = { theme: theme, backgroundColor: backgroundColor, themeName: themeName };
      localStorage.setItem('theme', JSON.stringify(themeObject));
    })
  }

  toggleTheme(document.querySelector('#darkThemeButton'), 'dark', '#181818', 'Dark');
  toggleTheme(document.querySelector('#lightThemeButton'), 'default', '#f9f9f9', 'Light');
}

export { topNavEventListeners };
