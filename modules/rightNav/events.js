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
    } else {
      switchCurrentPage(constants.CHANNELPAGE);
    }
  })

  // document.querySelector('#settingButton').addEventListener('click', () => {
  //   switchCurrentPage(constants.MOBILESETTINGSPAGE)
  //   overlay.style.display = 'none';
  //   document.querySelector('.rightNav-modal').style.display = 'none';
  // })
}

export default rightNavEventListeners;
