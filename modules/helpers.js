import homeLeftNav from './defaultPage/leftNav/leftNav.js';
import homePage from './defaultPage/homePage/homePage.js';
import channelPage from './defaultPage/channelPage/channel.js';
import trendingPage from './defaultPage/trendingPage/trending.js';
import watchHistoryPage from './defaultPage/watchHisoryPage/watchHistory.js';
import settingsNav from './settingsPage/leftNav/settingsNav.js';
import accountPage from './settingsPage/accountPage/accountPage.js';
import leftNavEventListeners from './defaultPage/leftNav/events.js';
import { topNavEventListeners } from './topNav/events.js';
import topNav from './topNav/topNav.js';

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
      currentPage.innerHTML = homePage();
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
      currentSideNav.innerHTML = homeLeftNav();
      leftNavEventListeners();
      topHomeNav.innerHTML = topNav();
      topNavEventListeners();
      currentPage.innerHTML = homePage();
      localStorage.setItem('currentPage', constants.HOMEPAGE)
      break;
    case 'settingsPage':
      currentSideNav.innerHTML = settingsNav();
      currentPage.innerHTML = accountPage();
      localStorage.setItem('currentPage', constants.SETTINGSPAGE)
      break;
    case 'accountPage':
      currentPage.innerHTML = accountPage();
      break;
    default:
      currentPage.innerHTML = homePage();
  }
}

export { switchCurrentPage, constants }
