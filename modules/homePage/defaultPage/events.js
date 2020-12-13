const homeEventListeners = () => {
  const videos = document.querySelectorAll('.video');
  for (let index = 0; index < videos.length; index++) {
    const video = videos[index];
    video.addEventListener('click', () => {
      document.querySelector('.grid-container').style.display = 'none';
      document.querySelector('.video-page').style.display = 'block';

    })
  }
}

export { homeEventListeners };
