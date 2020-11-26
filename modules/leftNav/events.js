const leftNavEventListeners = () => {
  const burgerIcon = document.querySelector('.burger-icon');
  const videoGallery = document.querySelector('.video-gallery');
  const leftNav = document.querySelector('.leftside-nav');

  burgerIcon.addEventListener('click', () => {
    if (leftNav.style.display === 'none') {
      leftNav.style.display = 'block';
      document.querySelector('#leftSideNav').style.display = 'none';
      document.querySelector('.grid-container').classList.remove('wide');
    } else {
      leftNav.style.display = 'none';
      document.querySelector('#leftSideNav').style.display = 'block';
      document.querySelector('.grid-container').classList.add('wide');
    }
  })
}

export default leftNavEventListeners;
