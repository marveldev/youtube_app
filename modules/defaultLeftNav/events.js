import { switchCurrentPage, constants } from '../helpers.js';
import defaultLeftNav from './defaultLeftNav.js';

const defaultNavEventListeners = () => {
  const addSwitchPageEvent = (selectors, constant) => {
    for (let index = 0; index < selectors.length; index++) {
      const selector = selectors[index];
      selector.addEventListener('click', () => {
        const modalLeftNav = localStorage.getItem('modalLeftNav');
        const leftSideNav = document.querySelector('.side-nav');
        if (modalLeftNav === 'true') {
          switchCurrentPage(constant);
          leftSideNav.innerHTML = defaultLeftNav();
          defaultNavEventListeners();
          document.querySelector('#main').className = 'grid-container';
          document.querySelector('.left-nav-modal').style.display = 'none';
          document.querySelector('#overlay').style.display = 'none';
        } else {
          switchCurrentPage(constant);
        }
      })
    }
  }

  addSwitchPageEvent(document.querySelectorAll('.home'), constants.HOMEPAGE);
  addSwitchPageEvent(document.querySelectorAll('.trending'), constants.TRENDINGPAGE);
  addSwitchPageEvent(document.querySelectorAll('.history'),constants.WATCHHISTORYPAGE);

  const settingButtons = document.querySelectorAll('.setting');
  for (let index = 0; index < settingButtons.length; index++) {
    const settingButton = settingButtons[index];
    settingButton.addEventListener('click', () => {
      const modalLeftNav = localStorage.getItem('modalLeftNav');
      if (modalLeftNav === 'true') {
        switchCurrentPage(constants.SETTINGSPAGE);
        document.querySelector('#main').className = 'grid-container';
        document.querySelector('.left-nav-modal').style.display = 'none';
        document.querySelector('#overlay').style.display = 'none';
      } else {
        switchCurrentPage(constants.SETTINGSPAGE);
      }
    })
  }
}

export default defaultNavEventListeners;
