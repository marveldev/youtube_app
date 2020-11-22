const leftNavEventListeners = () => {
  const icon = document.querySelector('.burger-icon');
  const videoGallery = document.querySelector('.video-gallery');
  const leftNav = document.querySelector('.leftside-nav');
  const widescreen = document.querySelector('.widescreen-nav');

  icon.addEventListener('click', () => {
    if (leftNav.style.display === 'none') {
      leftNav.style.display = 'block';
      widescreen.style.display = 'none';
      document.querySelector('.main-content').style.left = '15em';
      videoGallery.classList.remove('video-widescreen');
    } else {
      leftNav.style.display = 'none';
      widescreen.style.display = 'block';
      document.querySelector('.main-content').style.left = '0';
      videoGallery.classList.add('video-widescreen');
    }
  })
}

export default leftNavEventListeners;
