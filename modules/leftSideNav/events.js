const leftNavEventListeners = () => {
  const icon = document.querySelector('.burger-icon');
  const videoGallery = document.querySelector('.video-gallery');
  const iconWidescreen = document.querySelector('.burger-icon-widescreen');

  const toggleLeftNav = ( firstValue, secondValue, value) => {
    const leftNav = document.querySelector('.leftside-nav');
    const widescreen = document.querySelector('.widescreen-nav');
    leftNav.style.display = firstValue;
    widescreen.style.display = secondValue;
    document.querySelector('.main-content').style.left = value;
  }

  icon.addEventListener('click', () => {
    toggleLeftNav('none','block', '0',);
    iconWidescreen.style.display = 'inline-block';
    videoGallery.classList.add('video-widescreen');
    icon.style.display = 'none';
  })

  iconWidescreen.addEventListener('click', () => {
    toggleLeftNav('block','none', '15em',);
    icon.style.display = 'inline-block';
    videoGallery.classList.remove('video-widescreen');
    iconWidescreen.style.display = 'none';
  })
}

export default leftNavEventListeners;
