import topNav from './topNav/topNav.js';
import defaultLeftNav from './homePage/defaultLeftNav/defaultLeftNav.js';
import defaultPage from './homePage/defaultPage/defaultPage.js';
import channelPage from './homePage/channelPage/channelPage.js';
import trendingPage from './homePage/trendingPage/trendingPage.js';
import watchHistoryPage from './homePage/watchHisoryPage/watchHistoryPage.js';
import settingsNav from './settingsPage/settingsLeftNav/settingsNav.js';
import accountPage from './settingsPage/accountPage/accountPage.js';
import { topNavEventListeners } from './topNav/events.js';
import defaultNavEventListeners from './homePage/defaultLeftNav/events.js';

const constants = {
  HOMEPAGE: 'homePage',
  CHANNELPAGE: 'channelPage',
  HOMELEFTNAV: 'homeLeftNav',
  TRENDINGPAGE: 'trendingPage',
  WATCHHISTORYPAGE: 'watchHistoryPage',
  RIGHTNAV: 'rightNav',
  LOGOPAGE: 'logoPage',
  SETTINGSPAGE: 'settingsPage',
  ACCOUNTPAGE: 'accountPage'
}

const switchCurrentPage = page => {
  const topHomeNav = document.querySelector('.top-nav-content');
  const currentPage = document.querySelector('.current-page');
  const currentSideNav = document.querySelector('.side-nav');
  switch(page) {
    case 'homePage':
      currentPage.innerHTML = defaultPage();
      localStorage.setItem('currentPage', constants.HOMEPAGE)
      break;
    case 'channelPage':
      currentPage.innerHTML = channelPage();
      localStorage.setItem('currentPage', constants.CHANNELPAGE)
      break;
    case 'trendingPage':
      currentPage.innerHTML = trendingPage();
      localStorage.setItem('currentPage', constants.TRENDINGPAGE)
      break;
    case 'watchHistoryPage':
      currentPage.innerHTML = watchHistoryPage();
      localStorage.setItem('currentPage', constants.WATCHHISTORYPAGE)
      break;
    case 'logoPage':
      currentSideNav.innerHTML = defaultLeftNav();
      defaultNavEventListeners();
      topHomeNav.innerHTML = topNav();
      topNavEventListeners();
      currentPage.innerHTML = defaultPage();
      localStorage.setItem('currentPage', constants.HOMEPAGE)
      break;
    case 'settingsPage':
      currentSideNav.innerHTML = settingsNav();
      currentPage.innerHTML = accountPage();
      topNavEventListeners();
      localStorage.setItem('currentPage', constants.SETTINGSPAGE)
      break;
    case 'accountPage':
      currentPage.innerHTML = accountPage();
      break;
    default:
      currentPage.innerHTML = defaultPage();
  }
}

export { switchCurrentPage, constants }
