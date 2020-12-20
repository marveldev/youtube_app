import defaultLeftNav from '../defaultLeftNav/defaultLeftNav.js';
import defaultNavEventListeners from '../defaultLeftNav/events.js';
import { switchCurrentPage, constants } from '../helpers.js';

const rightNavEventListeners = () => {
  document.querySelector('.channel').addEventListener('click', () => {
    const modalLeftNav = localStorage.getItem('modalLeftNav');
    const currentSideNav = document.querySelector('.side-nav');
    const overlay = document.querySelector('#overlay');
    if (modalLeftNav === 'true') {
      switchCurrentPage(constants.CHANNELPAGE);
      currentSideNav.innerHTML = defaultLeftNav();
      defaultNavEventListeners();
      document.querySelector('#main').className = 'grid-container';
      document.querySelector('.rightNav-modal').style.display = 'none';
      overlay.style.display = 'none';
      document.body.style.overflow = 'auto';
    } else {
      switchCurrentPage(constants.CHANNELPAGE);
      document.querySelector('.rightNav-modal').style.display = 'none';
      overlay.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  })

  document.querySelector('#setting').addEventListener('click', () => {
    switchCurrentPage(constants.SETTINGSPAGE);
    document.querySelector('#main').className = 'grid-container';
    document.querySelector('.rightNav-modal').style.display = 'none';
    document.querySelector('#overlay').style.display = 'none';
    document.body.style.overflow = 'auto';
  })
}

export default rightNavEventListeners;
