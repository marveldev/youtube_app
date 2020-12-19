import { switchCurrentPage, constants } from '../helpers.js';
import defaultLeftNav from './defaultLeftNav.js';

const defaultNavEventListeners = () => {
  const addSwitchPageEvent = (selectors, constant) => {
    for (let index = 0; index < selectors.length; index++) {
      const selector = selectors[index];
      selector.addEventListener('click', () => {
        const modalLeftNav = localStorage.getItem('modalLeftNav');
        const currentSideNav = document.querySelector('.side-nav');
        const overlay = document.querySelector('#overlay');
        if (modalLeftNav == 'true') {
          switchCurrentPage(constant);
          currentSideNav.innerHTML = defaultLeftNav();
          defaultNavEventListeners();
          document.querySelector('#main').className = 'grid-container';
          document.querySelector('.left-nav-modal').style.display = 'none';
          overlay.style.display = 'none';
        } else {
          switchCurrentPage(constant);
        }
      })
    }
  }

  addSwitchPageEvent(document.querySelectorAll('.home'), constants.HOMEPAGE);
  addSwitchPageEvent(document.querySelectorAll('.trending'), constants.TRENDINGPAGE);
  addSwitchPageEvent(document.querySelectorAll('.setting'), constants.SETTINGSPAGE);
  addSwitchPageEvent(document.querySelectorAll('.history'),constants.WATCHHISTORYPAGE);
}

export default defaultNavEventListeners;
