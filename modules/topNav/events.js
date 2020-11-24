const topNavEvents = () => {
  const profilePhoto = document.querySelector('#profilePhoto');
  const overlay = document.querySelector('#overlay');
  const rightNavModal = document.querySelector('.rightNav-modal');
  const theme = document.querySelector('#theme');
  const themeModal = document.querySelector('#themeModal');
  const arrowLeft = document.querySelector('#arrowLeft');
  const root = document.querySelector('#root');
  const darkTheme = document.querySelector('#darkTheme');
  const lightTheme = document.querySelector('#lightTheme');

  const themeProperty = JSON.parse(localStorage.getItem('theme'));
  console.log(themeProperty);

  // root.className = localStorage.getItem('theme');
  // document.body.style.backgroundColor = localStorage.getItem('backgroundColor');
  // document.querySelector('.theme-name').innerText = localStorage.getItem('themeName');

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

  darkTheme.addEventListener('click', () => {
    root.className = 'dark';
    document.body.style.backgroundColor = '#181818';
    document.querySelector('.theme-name').innerText = 'Dark';
    displayRightModal('none', 'none', 'none', 'auto');

    const theme = {
      theme: 'dark',
      backgroundColor: '#181818',
      themeName: 'Dark'
    };

    localStorage.setItem('theme', JSON.stringify(theme));
  })

  lightTheme.addEventListener('click', () => {
    root.className = 'default';
    document.body.style.backgroundColor = '#fff';
    document.querySelector('.theme-name').innerText = 'Light';
    displayRightModal('none', 'none', 'none', 'auto');
    // localStorage.setItem('theme', 'default');
    // localStorage.setItem('backgroundColor', '#fff');
    // localStorage.setItem('themeName', 'Light');
  })
}

export { topNavEvents };
