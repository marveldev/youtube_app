import defaultLeftNav from './homePage/defaultLeftNav/defaultLeftNav.js';
import defaultPage from './homePage/defaultPage/defaultPage.js';
import channelPage from './homePage/channelPage/channelPage.js';
import trendingPage from './homePage/trendingPage/trendingPage.js';
import watchHistoryPage from './homePage/watchHisoryPage/watchHistoryPage.js';
import settingsNav from './settingsPage/settingsLeftNav/settingsNav.js';
import accountPage from './settingsPage/accountPage/accountPage.js';
import notificationPage from './settingsPage/notificationPage/notificationPage.js';
import settingsNavEventListeners from './settingsPage/settingsLeftNav/events.js';
import performancePage from './settingsPage/performancePage/performancePage.js';

const constants = {
  HOMEPAGE: 'homePage',
  CHANNELPAGE: 'channelPage',
  TRENDINGPAGE: 'trendingPage',
  WATCHHISTORYPAGE: 'watchHistoryPage',
  DEFAULTNAV: 'defaultNav',
  SETTINGSNAV : 'settingsNav',
  ACCOUNTPAGE: 'accountPage',
  NOTIFICATIONPAGE: 'notificationPage',
  PERFORMANCEPAGE: 'performancePage'
}

const switchCurrentPage = page => {
  const currentPage = document.querySelector('.current-page');
  const currentSideNav = document.querySelector('.side-nav');
  switch(page) {
    case 'homePage':
      currentPage.innerHTML = defaultPage();
      localStorage.setItem('currentPage', constants.HOMEPAGE)
      break;
    case 'settingsNav':
      currentSideNav.innerHTML = settingsNav();
      currentPage.innerHTML = accountPage();
      settingsNavEventListeners();
      localStorage.setItem('currentNav', constants.SETTINGSNAV)
      localStorage.setItem('currentPage', constants.ACCOUNTPAGE)
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
    case 'defaultNav':
      currentSideNav.innerHTML = defaultLeftNav();
      currentPage.innerHTML = defaultPage();
      localStorage.setItem('currentNav', constants.DEFAULTNAV)
      localStorage.setItem('currentPage', constants.HOMEPAGE)
      break;
    case 'accountPage':
      currentPage.innerHTML = accountPage();
      localStorage.setItem('currentPage', constants.ACCOUNTPAGE)
      break;
    case 'notificationPage':
      currentPage.innerHTML = notificationPage();
      localStorage.setItem('currentPage', constants.NOTIFICATIONPAGE)
      break;
    case 'performancePage':
      currentPage.innerHTML = performancePage();
      localStorage.setItem('currentPage', constants.PERFORMANCEPAGE)
      break;
    default:
      currentPage.innerHTML = defaultPage();
  }
}

export { switchCurrentPage, constants }
