const leftNavEventListeners = () => {
  const burgerIcon = document.querySelector('.burger-icon');
  const leftNav = document.querySelector('.leftside-nav');

  burgerIcon.addEventListener('click', () => {
    if (leftNav.style.display === 'none') { 
      leftNav.style.display = 'block';
      document.querySelector('#leftSideNav').style.display = 'none';
      document.querySelector('.home-container').classList.remove('wide');
    } else {
      leftNav.style.display = 'none';
      document.querySelector('#leftSideNav').style.display = 'block';
      document.querySelector('.home-container').classList.add('wide');
    }
  })
}

export default leftNavEventListeners;
