import { switchCurrentPage, constants } from '../../helpers.js';

const leftNavEventListeners = () => {
  const burgerIcon = document.querySelector('.burger-icon');
  const leftNav = document.querySelector('.leftside-nav');

  burgerIcon.addEventListener('click', () => {
    if (leftNav.style.display === 'none') {
      leftNav.style.display = 'block';
      document.querySelector('#leftSideNav').style.display = 'none';
      document.querySelector('.home-container').classList.remove('wide');
    } else {
      leftNav.style.display = 'none';
      document.querySelector('#leftSideNav').style.display = 'block';
      document.querySelector('.home-container').classList.add('wide');
    }
  })

  const homePage = document.querySelector('.home');
  const trendingPage = document.querySelector('.trending');
  const historyPage = document.querySelector('.history');
  const settingsNav = document.querySelector('.setting');
  const logo = document.querySelector('.logo');

  homePage.addEventListener('click', () => switchCurrentPage(constants.HOMEPAGE));
  trendingPage.addEventListener('click', () => switchCurrentPage(constants.TRENDINGPAGE));
  historyPage.addEventListener('click', () => switchCurrentPage(constants.WATCHHISTORYPAGE));
  settingsNav.addEventListener('click', () => switchCurrentPage(constants.SETTINGSPAGE));
  logo.addEventListener('click', () => switchCurrentPage(constants.SETTINGSPAGE));
}

export default leftNavEventListeners;
