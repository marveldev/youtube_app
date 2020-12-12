import { switchCurrentPage, constants } from '../../helpers.js';

const defaultNavEventListeners = () => {
  const switchPages = (selectors, constant) => {
    for (let index = 0; index < selectors.length; index++) {
      const selector = selectors[index];
      selector.addEventListener('click', () => {
        switchCurrentPage(constant);
      })
    }
  }

  switchPages(document.querySelectorAll('.home'), constants.HOMEPAGE);
  switchPages(document.querySelectorAll('.trending'), constants.TRENDINGPAGE);
  switchPages(document.querySelectorAll('.setting'), constants.SETTINGSNAV);
  document.querySelector('.history').addEventListener('click', () => {
    switchCurrentPage(constants.WATCHHISTORYPAGE);
  })
}

export default defaultNavEventListeners;
