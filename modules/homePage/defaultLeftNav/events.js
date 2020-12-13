import { switchCurrentPage, constants } from '../../helpers.js';

const defaultNavEventListeners = () => {
  const addSwitchPageEvent = (selectors, constant) => {
    for (let index = 0; index < selectors.length; index++) {
      const selector = selectors[index];
      selector.addEventListener('click', () => {
        switchCurrentPage(constant);
      })
    }
  }

  addSwitchPageEvent(document.querySelectorAll('.home'), constants.HOMEPAGE);
  addSwitchPageEvent(document.querySelectorAll('.trending'), constants.TRENDINGPAGE);
  addSwitchPageEvent(document.querySelectorAll('.setting'), constants.SETTINGSPAGE);
  
  const watchHisoryPage = document.querySelector('.history');
  watchHisoryPage.addEventListener('click', () => {
    switchCurrentPage(constants.WATCHHISTORYPAGE);
  })
}

export default defaultNavEventListeners;
