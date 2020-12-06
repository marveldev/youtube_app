import { switchCurrentPage, constants } from '../../helpers.js';

const leftNavEventListeners = () => {
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
  // switchPages(document.querySelectorAll('.home'), constants.HOMEPAGE);

  const historyPage = document.querySelector('.history');
  const settingsNav = document.querySelector('.setting');

  historyPage.addEventListener('click', () => switchCurrentPage(constants.WATCHHISTORYPAGE));
  settingsNav.addEventListener('click', () => switchCurrentPage(constants.SETTINGSPAGE));
}

export default leftNavEventListeners;
