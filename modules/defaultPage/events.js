import { constants, switchCurrentPage } from "../helpers.js";

const defaultPageEventListeners = () => {
  const videos = document.querySelectorAll('.video');
  for (let index = 0; index < videos.length; index++) {
    const video = videos[index];
    video.addEventListener('click', () => {
      switchCurrentPage(constants.VIDEOWATCHPAGE, video.src);
      localStorage.setItem('videoSrc', video.src)
    })
  }
}

export default defaultPageEventListeners;
