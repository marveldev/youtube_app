const leftNavEventListeners = () => {
  const toggleLeftNav = () => {
    const icon = document.querySelector('.burger-icon');
    icon.addEventListener('click', () => {
      const leftNav = document.querySelector('.leftside-nav');
      console.log(leftNav.style.display);
      const widescreen = document.querySelector('.widescreen-nav');
      if (leftNav.style.display == 'block') {
        console.log('ok');
        leftNav.style.display = 'block';
        // leftNav.style.display = 'none';
      } else if(widescreen.style.display == 'block'){
        console.log('no');
        
        leftNav.style.display = 'none';
        document.querySelector('.main-content').style.left = '0';
        document.querySelector('.video-gallery').classList.add('video-widescreen');
        widescreen.style.display == 'block';
      }
    })

  }

  toggleLeftNav();
}

export default leftNavEventListeners;