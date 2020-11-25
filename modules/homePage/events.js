const videoEventListeners = () => {
  const videos = document.querySelectorAll('.video');
  for (let index = 0; index < videos.length; index++) {
    const video = videos[index];
    video.addEventListener('mouseover', () => {
      video.controls = true;
    })

    video.addEventListener('mouseout', () => {
      video.controls = false;
    })
  }
}

export { videoEventListeners };
