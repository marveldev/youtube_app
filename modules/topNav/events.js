const topNavEvents = () => {
  const profilePhoto = document.querySelector('#profilePhoto');
  const overlay = document.querySelector('#overlay');
  const rightNavModal = document.querySelector('.rightNav-modal');
  const theme = document.querySelector('#theme');
  const themeModal = document.querySelector('#themeModal');
  const arrowLeft = document.querySelector('#arrowLeft');
  const root = document.querySelector('#root');

  const themeProperty = JSON.parse(localStorage.getItem('theme'));
  if (themeProperty) {
    root.className = themeProperty.theme;
    document.body.style.backgroundColor = themeProperty.backgroundColor;
    document.querySelector('.theme-name').innerText = themeProperty.themeName;
  }

  const displayRightModal = ( overlayValue, themeModalValue, rightNavValue, overflowValue ) => {
    overlay.style.display = overlayValue;
    themeModal.style.display = themeModalValue;
    rightNavModal.style.display = rightNavValue;
    document.body.style.overflow = overflowValue;
  }

  profilePhoto.addEventListener('click', () => {
    rightNavModal.style.display === 'block' ? displayRightModal('none', 'none', 'none', 'auto')
    : displayRightModal('block', 'none', 'block', 'hidden');
  })

  theme.addEventListener('click', () => {
    themeModal.style.display = 'block';
    rightNavModal.style.display = 'none';
  })

  arrowLeft.addEventListener('click', () => {
    rightNavModal.style.display = 'block';
    themeModal.style.display = 'none';
  })

  overlay.addEventListener('click', () => {
    displayRightModal('none', 'none', 'none', 'auto');
  })

  const toggleTheme = (selector, theme, backgroundColor, themeName) => {
    selector.addEventListener('click', () => {
      root.className = theme;
      document.body.style.backgroundColor = backgroundColor;
      document.querySelector('.theme-name').innerText = themeName;
      displayRightModal('none', 'none', 'none', 'auto');

      const themeProperty = { theme: theme, backgroundColor: backgroundColor, themeName: themeName };
      localStorage.setItem('theme', JSON.stringify(themeProperty));
    })
  }

  toggleTheme(document.querySelector('#darkTheme'), 'dark', '#181818', 'Dark');
  toggleTheme(document.querySelector('#lightTheme'), 'default', '#f9f9f9', 'Light');
}

export { topNavEvents };
